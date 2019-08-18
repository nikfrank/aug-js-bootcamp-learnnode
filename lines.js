const fs = require('fs');

const filename = process.argv[2];

const fileContents = fs.readFileSync(filename);

const fileString = fileContents.toString();

let lines = 0;
for( let i=0; i< (fileString.length); i++){
  if( fileString[i] === '\n' ) lines++;
}

console.log(lines);

// console.log(fileString.split('').filter(char => char === '\n').length);

// console.log(
//   fileString.split('\n').length - 1
// );
