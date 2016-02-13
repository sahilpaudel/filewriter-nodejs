var fs = require('fs');
var prompt = require('prompt');

//starting the prompt
prompt.start();

//specifying the property for prompt behaviour
var property1 = {
	
	name: "filename",
	message: "Write filename",
	default:"filename"
};
//specifying the property for prompt behaviour
var property2 = {
	
	name: "fileContent",
	message: "Write Something",
	default:"filecontent"
};
//getting the filename
prompt.get(property1, function (err, fname){
  
	console.log("FileName is : "+fname.filename);
		//getting the file content
		prompt.get(property2, function (err, fcontent){
			//specifying the directory
			fs.writeFile("notes/" + fname.filename + ".txt",fcontent.fileContent,function(err,data){
	
			});
		});

});

