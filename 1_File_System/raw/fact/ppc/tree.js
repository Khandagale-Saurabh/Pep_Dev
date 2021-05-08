let fs =require("fs");
let path=require("path");
function isFileChecker(dirPath) {
    return fs.lstatSync(dirPath).isFile();
}
function readContent(dirPath) {
return fs.readdirSync(dirPath);
}
function viewTree(dirPath,indent)
{
let isFile=isFileChecker(dirPath);
if(isFile==true)
{
console.log(indent,path.basename(dirPath)+"*");
}
else
{
console.log(indent,path.basename(dirPath));
let childrens=readContent(dirPath);
for(let i=0;i<childrens.length;i++)
{
viewTree(dirPath+"/"+childrens[i],indent+"\t",);
}
}

}
viewTree("C:\\Users\\saurabh\\Desktop"," ");
