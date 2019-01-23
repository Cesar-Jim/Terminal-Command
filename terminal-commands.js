const fs = require('fs');

module.exports.ls = () => {
   fs.readdir('./', (err, files) => {
      const filesToString = files.reduce((acc, file) => {
         return `${acc} ${file} `;
      }, '');

      console.log(filesToString);
   });
};


module.exports.touch = (filename) => {
   fs.writeFile(filename, '', (err) => {
      if (err) throw err;

      console.log(`The file "${filename}" was successfully created!`);
   });
};


module.exports.mkdir = (dirName) => {

   if (!fs.existsSync(dirName)) {
      fs.mkdir(`./${dirName}`, (err) => {
         if (err) throw err;

         console.log(`The directory "${dirName}" was successfully created!`)
      });
   } else {
      console.log('The directory already exists');
   }
};