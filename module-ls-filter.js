const fs = require('fs');

module.exports = (pathname, ext, callback)=>{
  fs.readdir(pathname, (err, filenames)=> {
    if( err ) return callback(err);

    const filteredFilenames = filenames.filter(filename => (
      filename.slice( -ext.length-1 ) === ('.' + ext)
    ));

    callback(null, filteredFilenames);
  });
};
