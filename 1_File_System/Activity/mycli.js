let helpFn= require("./Command/help");
 let organizeFn= require("./Command/organize");
let viewfnObj= require("./Command/view");
let input =process.argv.slice(2);
let cmd=input[0];

switch(cmd)
{
case "view":
     viewfnObj.viewFn();
break;
case "organize":
      organizeFn.organizeFn();
case"help":
      helpFn.helpFn();
break;
default:
      console.log("Wrong Command");
}