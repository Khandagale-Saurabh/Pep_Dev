// // function s(a)
// // {
// //     console.log('HI');
// //     console.log(typeof a)
// // }
// // //s(10);

// // let obj={
// //     l_name: "khandagale",
// //     fname: 'Saurabh',
// //    age: 66,
// //    //movies:["S","A","U"],
// //    sayhi: function(a)
// //    {
// //        console.log("HI");
// //        //return "aaa";
// //    },
// //    address:
// //    {
// //        state:'nago'
// //    },
// //    movie:['m1','m2']
// // }
// // obj[key]["s"]
// // console.log(obj.movie[1]);
// // console.log("",obj.sayhi(1));
// // console.log("",obj.s(1));

// // for(let key in obj)
// // {
// //    console.log(key," ",obj[key]);
    
// // }

// a=[
// "Hello"
// ,1,2.3    
// {
//     'abc'
// }
// ];
// console.log(a["last val"]);

// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];
// for(let i in contacts)
// {
// console.log(contacts[1].lastName);
// }
function lookUpProfile(name, prop)
{
     if(name=="Kristian")
     {
        console.log(prop);
     }
     if(name=="Sherlock")
     {
         console.log(contacts[2].likes);
     }
     if(name=="Harry")
     {
         console.log(contacts);
     }
        for(let i in contacts.firstName)
          {  if(i!=name)
             {
                console.log("No such contact"); 
                
             }
         }
}

// let f=lookUpProfile("Akira", "likes");

 let f1=lookUpProfile("Kristian", "Vos");
 console.log(f1);
  lookUpProfile("Sherlock", "likes");
  lookUpProfile("Harry", "likes")
  lookUpProfile("Bob", "number")
   //console.log(f1);