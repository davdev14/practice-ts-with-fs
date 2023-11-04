import fs from "node:fs";

const handleCreateFolder = (folderPath: string) => {
  try {
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
      console.log("folder created");
    } else {
      console.log("failed to create folder");
    }
  } catch (error) {
    console.log(error);
  }
};
// handleCreateFolder('/home/david-ouatedem/Documents/test');

const handleCreateFile = (filePath: string, content: string) => {
  try {
    fs.writeFileSync(filePath, content);
    console.log("file created");
  } catch (error) {
    console.log(error);
  }
};
// handleCreateFile('/home/david-ouatedem/Documents/test/test-file.txt', 'my first file');

const sortFromZToA = (b: any, a: any) => {
  return b.localeCompare(a)
};


const handleFilterDirectoriesInADirectory = (source: string) => {
  try {
    const directoriesEntry = fs.readdirSync(source, { withFileTypes: true });

    const directories = directoriesEntry
      .filter((dir) => dir.isDirectory())
      .map((dir) => dir.name);
      console.log(directories);
      

    const sortedDirectories = directories.sort((a, b) => b.localeCompare(a));
    console.log('Directories (Z to A):', sortedDirectories);    
  } catch (error) {
    console.error('Error:', error);
  }
};


handleFilterDirectoriesInADirectory("/home/david-ouatedem/Documents");
