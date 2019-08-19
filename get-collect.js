const http = require('http');

const url = process.argv[2];

http.get(url, (res)=> {

  let textResponse = '';

  res.on('data', (chunk)=> {
    textResponse += chunk.toString();
  });

  res.on('end', ()=>{
    console.log( textResponse.length );
    console.log( textResponse );
  });
});
