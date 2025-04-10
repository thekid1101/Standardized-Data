// Direct CSV file reading
const fs = require('fs');
const path = require('path');

// Function to read the first few lines of a file
function readFirstLines(filePath, lineCount = 5) {
  try {
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`);
      return;
    }

    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split('\n').slice(0, lineCount);
    
    console.log(`First ${lines.length} lines of ${path.basename(filePath)}:`);
    lines.forEach((line, i) => console.log(`${i+1}: ${line}`));
    
    return lines;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
  }
}

// Main function
function main() {
  const dataDir = "C:/Users/johnn/Documents/Standardized Data";
  console.log(`Reading files from: ${dataDir}`);
  
  // List files
  const files = fs.readdirSync(dataDir);
  console.log(`Found ${files.length} files:`);
  files.forEach(file => console.log(`- ${file}`));
  
  // Read first lines of each type of file
  const gamelogFile = files.find(file => file.includes('Gamelog'));
  const pbpFile = files.find(file => file.includes('PBP'));
  const rosterFile = files.find(file => file.includes('Roster'));
  
  if (gamelogFile) {
    console.log('\n=== GAMELOG FILE ===');
    readFirstLines(path.join(dataDir, gamelogFile));
  }
  
  if (pbpFile) {
    console.log('\n=== PBP FILE ===');
    readFirstLines(path.join(dataDir, pbpFile));
  }
  
  if (rosterFile) {
    console.log('\n=== ROSTER FILE ===');
    readFirstLines(path.join(dataDir, rosterFile));
  }
}

// Execute the main function
main();