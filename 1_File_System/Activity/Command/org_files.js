let fs=require("fs");
let path=require("path");

let input=process.argv.slice(2);
let dirpath=input[0];
let orgFilePath=path.join(dirpath,"organized_files");


fs.mkdirSync(orgFilePath);
for(let key in types)
{
let innerdirPath=path.join(orgFilePath,key);
fs.mkdirSync(innerdirPath);
dirCreator(innerdirPath);
}
let otherpath=path.join(orgFilePath,"others");
dirCreator(otherPath);
// fs.mkdirSync(otherPath);