const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('\n🚀 Preparing Hostinger package...');

// 1. Run the build process
console.log('📦 Building static React frontend assets...');
try {
  execSync('pnpm --filter @workspace/venture-beast run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed! Cannot create ZIP package.', error.message);
  process.exit(1);
}

// 2. Locate output directory
const buildDir = path.resolve(__dirname, '..', 'artifacts', 'venture-beast', 'dist', 'public');
const zipFile = path.resolve(__dirname, '..', 'venture-beast-build.zip');

if (!fs.existsSync(buildDir)) {
  console.error(`❌ Output directory not found at: ${buildDir}`);
  process.exit(1);
}

// 3. Compress files
console.log('🗜️ Packaging assets into ZIP file...');
const isWindows = process.platform === 'win32';

try {
  // If zip file already exists, delete it first to ensure a clean package
  if (fs.existsSync(zipFile)) {
    fs.unlinkSync(zipFile);
  }

  if (isWindows) {
    // On Windows, use native tar.exe (bsdtar) to prevent the backslash directory bug of Compress-Archive
    const zipCommand = `tar -acf "${zipFile}" -C "${buildDir}" .`;
    execSync(zipCommand, { stdio: 'inherit' });
  } else {
    // On Linux/macOS, use standard zip
    // Change to directory first so we don't include absolute paths in zip structure
    const zipCommand = `cd "${buildDir}" && zip -r "${zipFile}" .`;
    execSync(zipCommand, { stdio: 'inherit' });
  }

  console.log(`\n🎉 Success! Ready to install on Hostinger!`);
  console.log(`📁 Package created: ${path.basename(zipFile)}`);
  console.log(`ℹ️  How to install:`);
  console.log(`   1. Open Hostinger File Manager.`);
  console.log(`   2. Navigate to your website's 'public_html' folder.`);
  console.log(`   3. Upload '${path.basename(zipFile)}'.`);
  console.log(`   4. Right-click the uploaded ZIP file and click 'Extract'.`);
  console.log(`   5. Make sure the extracted files are directly inside 'public_html' (not in a subfolder).`);
} catch (error) {
  console.error('❌ Compression failed!', error.message);
  process.exit(1);
}
