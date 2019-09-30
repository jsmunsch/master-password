function showProcessDetails() {
  console.log(`Node version: ${process.version}`);
  console.log(`Platform: ${process.platform} ${process.arch}`);
  console.log(`Arguments: ${process.argv.join(" ")}`);
})

showProcessDetails(); // Execute Function