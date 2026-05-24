import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";

const AboutPage = lazy(() => import("@/pages/about"));

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about">
        {() => (
          <Suspense fallback={
            <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
              <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          }>
            <AboutPage />
          </Suspense>
        )}
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

// Safe base path resolution for Wouter to prevent crashes when using relative Vite builds
const wouterBase = (() => {
  const metaBase = import.meta.env.BASE_URL;
  if (!metaBase || metaBase.startsWith(".") || metaBase === "/") {
    return "";
  }
  return metaBase.replace(/\/$/, "");
})();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={wouterBase}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
