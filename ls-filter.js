const fs = require('fs');

const pathname = process.argv[2];
const ext = '.' + process.argv[3];

fs.readdir(pathname, (err, filenames)=> {
  for(let i=0; i<(filenames.length); i++){
    if( filenames[i].slice( -ext.length ) === ext )
      console.log( filenames[i] );
  }
});
