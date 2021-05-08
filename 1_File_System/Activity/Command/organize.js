let fs=require("fs");
let path=require("path");
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

function dirCreator(dirpath)
{
    if(fs.existsSync(dirpath)==false)
    {
    fs.mkdirSync(dirpath);
    }
}


let input=process.argv.slice(2);
let dirpath=input[0];
console.log(dirpath);
let orgFilePath=path.join(dirpath,"organized_files");


dirCreator(orgFilePath);
for(let key in types)
{
let innerdirPath=path.join(orgFilePath,key);
//fs.mkdirSync(innerdirPath);
dirCreator(innerdirPath);
}

let otherpath=path.join(orgFilePath,"others");
dirCreator(otherpath);
// fs.mkdirSync(otherPath);
function getDirectorName(dirpath)
{
let strArr=dirpath.split(".");
let ext=strArr.pop();
for(let key in types){
  for(let i=0;i<types[key].length;i++)
  {
    if(types[key][i]==ext)
    {
      return key;
    }
  }
}

  return "other";
}
function isFileorNot(dirpath)
{
return fs.lstatSync(dirpath).isFile();
}
function listContent(dirpath)
{
return fs.readdirSync(dirpath);
}
function OrganizeDir(dirpath)
{
 let File=isFileorNot(dirpath);
 if(File==true)
 {
  let folderName=getDirectorName(dirpath);
  console.log(dirpath,"->",folderName);
 }
 else{
     let content=listContent(dirpath);
     for(let i=0;i<content.length;i++)
     {
       let childPath=path.join(dirpath,content[i]);
       OrganizeDir(childPath);
     }
 }
}
OrganizeDir(dirpath);


function OrganizeExecutor()
{
console.log("Organize Executed");
}
module.exports=
{
organizeFn:OrganizeExecutor
}
