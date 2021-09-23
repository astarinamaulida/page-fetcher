const request = require('request');
const fs = require('fs');

const domain = process.argv[2];
const path = process.argv[3];

request(domain, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
  }
  fs.writeFile(path, body, (error) => { //do not use sync then use writeFile, use bracket for error because we only need the error
    if (error) {
      console.log('error:', error); // Print the error if one occurred
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${path}`); // we can use the body length as 1 character is 1 byte
    }
  }
  );
});


//You need to make an http request and wait for the response.
//After the http request is complete, you need to take the data you receive and write it to a file in your local filesystem.
