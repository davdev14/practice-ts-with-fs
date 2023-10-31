import fs from "node:fs";
import path from "node:path";

const folderPath = '/home/david-ouatedem/Documents/my-folder';
const filePath = path.join(folderPath, 'example.txt');
const content = 'This is the content of the file.';

fs.mkdir(folderPath, { recursive: true }, (err) => {
  if (err || fs.existsSync(filePath)) {
    console.error('Error creating the folder:', err);
  } else {
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        console.error('Error creating the file:', err);
      } else {
        console.log('Folder and file created successfully.');
      }
    });
  }
});
