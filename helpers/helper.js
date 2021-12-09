let myModule={};


myModule.uploadMedia = async (file) => {
	return new Promise(function(resolve, reject) {
		var fs = require("fs");
		var request = require("request");

		var options = { method: 'POST',
		  url: 'http://grha.space/dailybot-diagnosis/api/uploadingFiles/saveFile',
		  headers: 
		   { 'postman-token': 'ffa21be8-cb13-0159-03de-6c8f9203fb46',
		     'cache-control': 'no-cache',
		     'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
		  formData: 
		   { file_attach: 
		      { value: fs.createReadStream(file),
		        options: 
		         { filename: file,
		           contentType: null } } } };

		request(options, function (error, response, body) {
		  if (error) throw new Error(error);
		  // console.log("response", response);
		  console.log("body", body);
		  return body;
		});
	});	
};

module.exports = myModule


var fs = require("fs");
var request = require("request");

var options = { method: 'POST',
  url: 'http://grha.space/dailybot-diagnosis/api/uploadingFiles/saveFile',
  headers: 
   { 'postman-token': '920db2f9-be00-f684-ff83-847ec08eff0e',
     'cache-control': 'no-cache',
     'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
  formData: 
   { file_attach: 
      { value: 'fs.createReadStream("Cancel Cheque - VAIBHAV JAIN.jpeg")',
        options: 
         { filename: 'Cancel Cheque - VAIBHAV JAIN.jpeg',
           contentType: null } } } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
