const fs = require('fs-extra');
const path = require('path');

const sourcePath = './canvas';
const destinationPath = './modules/commands/';

fs.move(sourcePath, destinationPath, { overwrite: true }, (err) => {
  if (err) throw err;
  console.log('Folder moved successfully');
});
