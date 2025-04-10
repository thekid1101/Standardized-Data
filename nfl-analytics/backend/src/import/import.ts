import { importAll } from './importData';

// Run the import
importAll()
  .then(() => {
    console.log('Import completed successfully.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Import failed:', error);
    process.exit(1);
  });