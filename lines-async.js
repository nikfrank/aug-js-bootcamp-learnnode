const fs = require('fs');

const filename = process.argv[2];

fs.readFile(filename, (err, contents)=>{
  if( err ) return console.error(err);

  const fileString = contents.toString();

  console.log( fileString.split('\n').length -1 );
});
