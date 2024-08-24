const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

// Function to copy file from source to destination
function copyFile(source, destination) {
  if (fs.existsSync(destination)) {
    console.log(
      chalk.yellow(
        `⚠️  ${path.basename(destination)} already exists. Skipping copy.`,
      ),
    );
  } else {
    fs.copyFile(source, destination, (err) => {
      if (err) {
        console.error(
          chalk.red(`❌ Error copying ${path.basename(destination)}:`),
          err,
        );
      } else {
        console.log(
          chalk.green(
            `✅ ${path.basename(destination)} was successfully copied.`,
          ),
        );
      }
    });
  }
}

// Define source and destination paths
const filesToCopy = [
  {
    source: path.join(__dirname, "apps", "backend", ".env.example"),
    destination: path.join(__dirname, "apps", "backend", ".env"),
  },
  {
    source: path.join(__dirname, "apps", "frontend", ".env.local.example"),
    destination: path.join(__dirname, "apps", "frontend", ".env.local"),
  },
];

// Header
console.log(chalk.blue.bold("\n📂 Initializing Environment Files...\n"));

// Iterate over the files and copy them
filesToCopy.forEach((file) => copyFile(file.source, file.destination));

// Footer
console.log(chalk.blue.bold("\n✨ Environment setup complete!\n"));
