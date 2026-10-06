//let arr=[]; //decleration

// let arr=[1,2,3,4];
// console.log(arr);


//index
// console.log(arr[0]);


///at index 2
// console.log(arr[2]);

///if extra index print
// console.log(arr[5]);



//length property

//1)length
// console.log(arr.length);

//print all intems of array
// for(let i=0;i<=arr.length-1;i++){
//     console.log(arr[i]);
// }


//create array and store the name of student.
// let arr=["vedant","Nini","sairaj","tejs","dushysnt"];
// console.log(arr);



//eg
// let arr=[1,2,3,4,5];
// let sum=0;
// for(i=0;i<arr.length;i++){
    
//     sum+=arr[i];
    
    

// }
// console.log(sum);



//eg
//print array in reverse form
// let arr=[1,2,3,4,5,6];
// for(let i=arr.length-1;i>=0;i--){
//     console.log(i);
// }

// let i=arr.length-1;
// while(i>=0){
//     console.log(i);
//     i--;
// }


///print index of items
// let arr=[1,2,3,4,5];
// for(let i=0;i<arr.length;i++){
//     console.log(i);
// }




///approch 3

// for(let index in arr){
//     console.log(index);
// }


//for items
// for(let index in arr){
//     console.log(arr[index]);
// }





//2nd
// for(let elem of arr){
//     console.log(elem);
// }




//update 

// let arr=[3,4,5,6];
// arr[2]=10;
// console.log(arr);

//insert
// console.log(arr.push(8));
// console.log(arr);



///pop
// console.log(arr.pop());
// console.log(arr);


///insert item at start

// console.log(arr.unshift(5));
// console.log(arr);



//eg
// let arr=[2,4,5,6];
// arr.shift();//undef
// arr.unshift(6);
// arr[3]=9;
// arr.push(7);
// arr.pop();
// console.log(arr);

//eg

//[4]
// let arr=[2,4];
// arr.shift();
// arr.push(5);
// arr.pop();
// console.log(arr.pop());
// console.log(arr.push(8));
// console.log(arr);


//rotate a array by k
// let arr=[4,5,2,1];
// let k=3;
// for(let i=0;i<k;i++){
//     let last_element=arr.pop();
//     arr.unshift(last_element);
// }
// console.log(arr);


//slice
// let  arr=[1,2,3,4,5];
// console.log(arr.slice(2,3));


//splice 
// let arr=[1,2,3,4];
// arr.splice(1,2);
// console.log(arr);

//eg

// let arr=[1,2,3,4,5];
// arr.splice(0,2);
// console.log(arr);


///remove 3 from array and insert 10 on place of 3
// let arr=[9,7,3,4,2];
// arr.splice(2,1,10);
// console.log(arr);

// arr.splice(0,0,4,3);
// console.log(arr);



// let arr=[1,2,3,4,5];
// for(let i=arr.length-1;i>=1;i--){
//     console.log(i);
// }





//indexof
 
// let arr=[1,2,3,4,5];
// console.log(arr.indexOf(2));

// let arr=[1,2,2,2,3,1,2]
// console.log(arr.indexOf(2));


// let arr=[2,2,4,4,4,4,5];
// console.log(arr.indexOf(4,3)); //3




///to find index between two array

// let arr=[1,3,4,6,9,10];
// let a=4;
// let b=10;
// let firstIndex=-1;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==a){
//         firstIndex=i;
//         break;
//     }
// }

// let secondIndex=-1;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==b){
//         secondIndex=i;
//         break;
//     }
// }
// console.log(secondIndex-firstIndex-1);


//second approah
// let arr=[1,3,4,6,9,10];
// let a=4;
// let b=10;
// let firstIndex=arr.indexOf(a);
// let secondIndex=arr.indexOf(b);
// console.log(secondIndex-firstIndex-1);




//include
// let arr=[1,2,3,4,5];
// console.log(arr.includes(3));

// console.log(arr.includes(6));


// let arr=[1,2,3,4,5,3,4];
// console.log(arr.indexOf(3,2));





///concate add two array

// let a =[1,2,3,4];
// let b=[4,5,6,7];
// console.log(a.concat(b));




///reverse
// let arr=[1,2,3,4];
// arr.reverse();
// console.log(arr);


//palindrome or not
// let arr=[1,2,1];
// for(let i=arr.length-1;i>=0;i--){
//     newArr.push(arr[i]);
// }
// let isPalindrome=true;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]!=newArr){

//     }
// }















////shallow copy
// let arr=[1,2,3,[4,5]];
// let newArr=arr.slice();
// newArr[3].push(5);
// console.log(arr);
// console.log(newArr);



//merged
// let arr1=[1,2,3];
// let arr2=[4,5,6];
// let merged=[...arr1,...arr2];
// console.log(merged);


//merg4ed
// let arr1=[1,2,3];
// let arr2=[8,...arr1];
// console.log(arr2);



//aray detructuring

// let arr=[1,2,3];
// let[a,b,c]=arr;
// console.log(a,b,c);


//first value
// let arr=[1,2,3,4];
// let[a]=arr;
// console.log(a);


//skip
// let arr=[1,2,3,4];
// let[a,,c]=arr;
// console.log(a,c);



//rest arr
// let[a,b,...arr]=[1,2,3,4,5];
// console.log(a,b,arr);








//********************************************************************************************************************************************** */
//string

// let str="tech";
// console.log(str);

// let str1='tech';
// console.log(str1);


//access character from string

// let str="check";
// console.log(str[0]);
// console.log(str[2]);

//charAt
// console.log(str.charAt(2));


// console.log(arr.length);



// let age=20;
// let str=`average age of the class is ${age}`;
// console.log(str);



// let marks=90;
// let str=`my score is  ${marks}`;
// console.log(str);






//immutablity
// let str="check";
// str[2]=`t`;
// console.log(str);


//string concation
// let str="abc";
// let str1='12';
// console.log(str+str1);


//type coercion
// let a="123";
// let b=123;
// console.log(a+b);

//string-number---->string converte dto number
// let a=123;
// let b=12;
// console.log(a-b);



//using loop


// let str="check";
// for(let i=0;i<str.length;i++){
//     console.log(str[i]);
// }





//revesre  STRING
// let str="check";
// function reversestring (str){
//     let rev="";
//     for(let i=4;i>=0;i--){

// rev+=str[i];
//     }
//     return rev;
// }console.log(reversestring(str));





///divide string nto two
//  str1="";
//  str2="";
// str="manual";
// for(let i=0;i<=2;i++){
//     str1+=str[i];
//     console.log(str[i]);
// }
// for(let i=3;i<=6;i++){
// str2+=str[i];
// console.log(str[i]);
// }



//palindrome



//for of loop
// let str="check";
// for(let ch of str){
//     console.log(ch);
// }

//escape character
// console.log("hel\`lo");
// console.log(`hlloe\``);

//escape sequence
//\n
// \t
// \r

//string searching

// let str ="check";
// console.log(str.indexOf('e'));

// let str1="hello world";
// console.log(str1.indexOf(" "));


// let str="Hello world";
// console.log(str.lastIndexOf('o'));


// let str1="check";
// console.log(str1.includes('e'));


//startwith
// let str="hello";
// console.log(str.startsWith("he"));
// console.log(str.startsWith("el",1));

//endswith
// let str="hello";
// console.log(str.endsWith("lo"));
// console.log(str.endsWith("el",1));



// let str = "abhishek";
// let newStr = str[0].toUpperCase()+str.slice(1).toLowerCase();
// console.log(newStr);



//middle characterto uppercase
// let str="check";
// let mid=Math.floor(str.length/2);
// let newStr=str.slice(0,mid)+str[mid].toUpperCase()+str.slice(mid+1);
// console.log(newStr);

//even length string
// let str1="chec";
// let mid=Math.floor(str1.length/2);
// let newStr=str1.slice(0,mid-1)+str1[mid-1].toUpperCase()+str1[mid].toUpperCase()+str1.slice(mid+1);
// console.log(newStr);


//replace (search,replace)
// let str ="validate";

// console.log(str.replace('l','e'));



//replace all
// let str="hello world" "hello";
// console.log(str.replaceAll('l','e'));


// let str="check";


// let result=str.split("");
// console.log(result)


//to find number of spaces in string
// let str="hello world";
// let count=0;
// for(let i=0;i<str.length;i++){
//     if(str[i]==" "){
//         count++;
//     }
// }
// console.log(count);




// let str ="this world is so much polluted";
// console.log(str.split("2"));

// let str1 ="this world is so much polluted";
// let rev=str.split(" ").reverse();
// for(let i=0;i<str.length;i++){
//     rev+=str[i];
// }
// console.log(rev);




//join(separator)convert array into string
// let res=["hello","is","this","vedant"];
// console.log(res.join(" "));



//trim
// let str=" check ";
// console.log(str.trim());


//trimStart
// let str=" check ";
// console.log(str.trimStart());


//trimEnd
// let str=" check ";
// console.log(str.trimEnd());  






//padstart
// let str="check";
// console.log(str.padStart(10,"aa"));

//padEnd    
// let str="check";
// console.log(str.padEnd(10,"a"));


// let str1="chak";
// console.log(str1.padEnd(10,"aa"));

// let str2="auoa";
// console.log(str2.padEnd(1,"o"));



//ASCII code
//digits(0,9)---->48-57
//uppercase(A-Z)---->65-90
//lowercase(a-z)---->97-122 


//charCodeAt
// console.log('A'.charCodeAt());
// console.log(" ".charAt());

//fromCharCode
// console.log(String.fromCharCode(65));
// console.log(String.fromCharCode(97));


//print the alphabet from b to f
// for(let i=98;i<103;i++){
//     console.log(String.fromCharCode(i));
// }


// reverse the order from G to A
// for(let i=71;i>=65;i--){
//     console.log(String.fromCharCode(i));
// }


//str="tiger is running"  reverse the order of words in string
// let str="tiger is running";
// let str1="";
// for(let i=str.length-1;i>=0;i--){
//    str1+=str[i];
// }
// console.log(str1);




//revere strig by word
// let str="tiger is running";
// let words=str.split(" ");
// for(let i=0;i<words.length;i++){
//     words[i]=words[i].split("").reverse().join("");
// }
// console.log(words.join(" "));






//***************************************************************************************************************************** 
// */


//objects
// let student={
//     name:"vedant",
//     age:20,
//     rollno:123,
//        printname(){
//         console.log(student.name);
//     }
// }


// // bracet notation
// console.log(student["name"]);
// student["printname"]();

// let chair={
//     colour:"red",
//     price:20,
//     quantity:1,

// }
// console.log(chair);



// let person={
//     name:"vedant",
//     age:20,

// }
// if(person.age>18){
//     console.log("eligible for vote");
// }else{
//     console.log("not eligible for vote");
// }







// let person={
//     name:"vedant",
//     age:20,
//     eligible(){
//         if(person.age>18){
//             console.log("eligible for vote");
//         }else{
//             console.log("not eligible for vote");
//         }
// }

// }
// person.eligible();




//dynamic key
// let key1="name";
// let key2="age";
// let value1="vedant";
// let value2=20;


// let person={
//     [key1]:value1,  
//     [key2]:value2
// }
// console.log(person);



//adding property
// let person1={
// name:"vedant",
// age:20
// }
// person1.gender="male";
// person1["city"]="pune";
// console.log(person1);   


// let key="pincode";
// person1[key]=411033;
// console.log(person1);




///update property
// let person1={
//     name:"vedant",
//     age:20

// }
// person1.age=20;
// person1["name"]="shete";
// console.log(person1);



///deleting property
// let person1={
//     name:"vedant",
//     age:20
// }
// delete person1.age;
// console.log(person1);



// let person1={
//     firstName:"vedant",
//     lastName:"shete",
//     age :20,
//     city:"pune",
// }
// delete person1.lastName;
// person1["age"]=21;
// person1.homeTown="nanded";
// console.log(person1);


////for in loop
// let person1={
//     firstName:"vedant",
//     lastName:"shete",
//     age :20,
//     city:"pune",
// }
// for(let key in person1){
//     console.log(key);
// }

// for(let value in person1){
//     console.log(person1);
// }



//print value with key
// let person1={
//     firstName:"vedant",
//     lastName:"shete",
//     age :20,
//     city:"pune",
// }

// for(let key in person1){
//     console.log(key, person1[key]);
// }


//count no of keys
// let person1={
//     firstName:"vedant",
//     age:20,
//     designation:"developer",
//     salary:50000,
//     city:null
// }
// let count=0;
// for(let key in person1){
//     if(person1[key]!==null){
//     count++;
// }
//  }
// console.log(count);



//if key exit in object or not
// let person1={
//     firstName:"vedant",
//     age:20,
//     designation:"developer",
//     salary:500

// }
// let object={
//     person1:"abhishek",
//     person2:"sairaj",
//     person3:"mayank"
// }
// for (let key in object){
//     console.log(key);
// }
// for (let value in object){
//     console.log(object[value]);
// }








/////types of keys
//note =intenally key of object is converted to string
// let obj={
//     1:"vedant",
//     2:"sairaj",
// }
// console.log(obj);
// console.log(typeof Object.keys(obj)[0]); // "string"








//imp for module

//  let arr=[1,2,3,4,5,5];
//  let freq={};
//  for  (let i=0;i<arr.length;i++){
//     if(arr[i] in freq==false){
//         freq[arr[i]]=1;

//     }else{
//         freq[arr[i]]=freq[arr[i]]+1;

//     }
        
//  }
//  console.log(freq);



 //obj.keys

//  let obj={
//     name:"ved",
//     gender:"male",
//     city:"india"

//  }
//  console.log(Object.keys(obj));



 //object.values

 
//  let obj={
//     name:"ved",
//     gender:"male",
//     city:"india"

//  }
//  console.log(Object.values(obj));




//  //object of object
//  let person={
//     firstname:"vedant",
//     lastname:"shete",
//     address:{
//         city:"pune",
//         state:"mahatashrta",
//         pincode:431806
//     }
//  };
// console.log(person.firstname+" "+person.address.city);




// //update

// person.address.pincode=410142;
// console.log(person);


// //ADD
// person.address.housenumber=43;





////eg
// let school={
//     name:"dps",
//     location:"rk delhi",
//     class:{
//         name:"9th",
//         student:40,
//         avgnumber:50

//     }

// }
// console.log(school.class.name);

// //using square 

// console.log(school.class["name"]);

// //delet 
// delete school.class.student






///array of object
 
// let school={
//     name:"dps",
//     location:"rk delhi",
//     class:[
//        {
//         name:"9th",
//         student:40,
//         avgnumber:50
//        },
//        {
//          name:"10th",
//         student:40,
//         avgnumber:50
//        },
//        {
//         name:"11th",
//         student:55,
//         avgnumber:80
//        }
//     ]
// }





// let library={
//     books:"80",
//     price:70,
//     accio:[
//         {
//         batch:"8obp",
//         course:"mern",
//         time:10
//         },
//         {
//         batch:"9obp",
//         course:"mern",
//         time:10
//         },
//         {
//         batch:"10obp",
//         course:"mern",
//         time:10
//         }
    


//     ]
// }
// for(let accio of library.accio){
//     console.log(accio.publisher="xyz");
// }

// for(let accio of library.accio){
//     if 
// }




//arrays of object


// let libraries=[
//     {
//     name:"Accio",
//     location:"Baner",
//     books:[
//          {
//             name:"Math",
//             author:"R.D sharma"
//         },
//         {
//          name: "Atomic Habit",
//          author: "Robin Sharma"
//         },
//         {
//            name:  "Physics",
//            author:"H.c verma"
//         },
//         {
//             name:"Math",
//             author:"R.D sharma"
//         },
//        {
//             name:"English",
//             author:"R.D sharma"
//         },
//     ]
//     },
//     {
//     name:"Accio",
//     location:"delhi",
//     books:[
//          {
//             name:"Math",
//             author:"R.D sharma"
//         },
//         {
//          name: "Atomic Habit",
//          author: "Robin Sharma"
//         },
//         {
//            name:  "Physics",
//            author:"H.c verma"
//         },
//         {
//             name:"Math",
//             author:"R.D sharma"
//         },
//        {
//             name:"English",
//             author:"R.D sharma"
//         },
//     ]
//     }
// ]
    


// for(let library of libraries){
//     console.log(library.name+" "+library.locarion);
// }



//frequency of array



// let arr = [1, 2, 2, 3, 3, 3, 4, 5];
// let freq={}
// for (let elem of arr){
//     if (elem in freq){
//         freq[elem]=freq[elem]+1;

//     }else{
//         freq[elem]=1;
//     }
// }
// console.log(freq)



//
// let students=[
//     {name:"abhishek",grade:"A"},
//     {name:"rakhi",grade:"B"},
//     {name:"naman",grade:"A"},
//     {name:"raman",grade:"C"}
// ]



//group by grade

// let res={
//     A:["abhishek","naman"],
//     B:["rakhi"],
//     C:["raman"]
// }
// let res={}
// for(let student of students){
//     if(student.grade in res){
//         res[student.grade].push(student.name);
//     }else{
//         res[student.grade]=[student.name];

//     }
    
// }
// console.log(res);






////object destructuring


// let person={
//     name:"naman",
//     age:20
// }

// let {name:firsrname,age:currage}=person;

// console.log(firstname,currentage);



// let persons=[
//     {
//         name:"abhishek",
//         address:{
//             city:"pune"
//         }
        
//     },{
//         name:"hemant",
//         address:{
//             city:"lucknow"
//         }
        

//     },{
//         name:"pavan",
//         address:{
//            city:"pune"
//         }
        
//     }
// ]

// let rev={}
// for(let person of persons){
//     if(person.address.city in rev){
//         rev[person.address.city].push(person.name);
//     }else{
//         rev[person.address.city]=[person.name];
//     }
// }
// console.log(rev);



/////////////spread operator

// let person={
//     name:"vedant",
//     city:"pune"
// }

//deep copy
// let person={
//     name:"ved",
//     age:20,
//     address:{
//         city:"pune",
//         pincode:"14806"
//     }
// }
// let user=structuredClone(person);
// console.log(user);



















/*********************************************************************************** */
// let student=[
//     {
//         name:"vedant",
//         attendance:"50%",
//         marks:"50%",
//         totalmarks:70
//     },{
//         name:"himanshu",
//         attendance:"70",
//         marks:"44.44%",
//         totalmarks:90

//     },{
//         name:"manak",
//         attendance:"60%",
//         marks:"50%",
//         totalmarks:100
//     }
// ];
// target1="55%";
// target2=50;
// for( let student of students){
//     if(student.attendance==target1 && student.marks==target2){
//         return passed;
//     }
//     else{
//         false;
//     }
// }




//sort()
// let arr=[5,4,8,1,0];
// arr.sort();
// console.log(arr);



// let arr=["raman","shyam","abhishek"];
// arr.sort();
// console.log(arr);


// function comp(a,b){
//     return b-a;
// };
// let arr=[12,5,4,0,11];
// arr.sort(comp);
// console.log(arr);



// let person=[
//     {
//         name:"abhishek",
//         age:20,
//         marks:30
//     },
//     {
//          name:"naman",
//         age:21,
//         marks:40
//     },
//     {
//           name:"shravan",
//         age:19,
//         marks:40
//     },
//     {
//         name:"john",
//         age:19,
//         marks:20
//     }
    
// ]

// person.sort(com);
// function com(a,b){
//     return a.age-b.age;  
// }
// console.log(person);



//store the information of department of company
// let companies =[
//     {
//         name:"Accio",
//         department:[{
//             name:"Tech",
//             noofEmployee:10,
//             hod:"vedant"
//     },
//     {
//         name:"Curriculum",
//         noofEmployee:20,
//         hod:"nini"
//     },
//     {
//         name:"HR",
//         noofEmployee:5,
//         hod:"sam"
//     },
//     {
//         name:"Marketing",
//         noofEmployee:45,
//         hod:"sia"
//     }]},
//     {
//         name:"ABC",
//         department:[{
//             name:"Tech",
//             noofEmployee:5,
//     },
//     {
//         name:"Sales",
//         noofEmployee:3,
//     },
//     {
//         name:"HR",
//         noofEmployee:5,
//     }
// ]}]






// function temperature(C) {
//   let F = (C * 9 / 5) + 32;

//   if (F >= 100) {
//     return "Very Hot";
//   } else if (F >= 70) {
//     return "Warm";
//   } else if (F >= 50) {
//     return "Pleasant";
//   } else {
//     return "Cold";
//   }
// }



// let stydents=[
//     {
//         name:"brejesh",
//         age:20,
//         adress:{
//             city:"pune"
//         }
//     },
//     {
//         name:"akash",
//         age:20,
//         adress:{
//             city:"delhi"
//         }
//     },
//     {
//         name:"meshesh",
//         age:30,
//         adress:{
//             city:"pune"

//         }
//     }
// ]
// function groupcity(arr){
// let city={};
// for(let i=0;i<arr.length;i++){
//     if(city[arr[i].adress.city]){
//         city[arr[i].adress.city].push(arr[i].name);
//     }else{
//         city[arr[i].adress.city]=[arr[i].name];
//     }
// }
// return city;
// }
// console.log(groupcity(stydents));


//largest and second largest
// let arr=[1,2,3,4,5];
// let largest=arr[0];
// let secondlargest=arr[0];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         // let secondlargest=arr[0];
//         secondlargest=largest;
//         largest=arr[i];

//     }
//     else{
//        (arr[i] > secondLargest && arr[i] !== largest) 
//     }

// }
// console.log(largest);
// console.log(secondlargest);



// let arr=[1,2,4,4,5,3,3,3];
// let arr = [1, 2, 2, 3, 3, 3, 4, 5];

// let freq = {};

// for (let i = 0; i < arr.length; i++) {
//   if (freq[arr[i]]) {
//     freq[arr[i]]++;
//   } else {
//     freq[arr[i]] = 1;
//   }
// }

// console.log(freq);


// let arr=[10, 20, 30, 40, 50];
// sum=[];
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i];
// }
// console.log(sum);



// let str="the cat sat on he mat because the cat was tired";
// let freq={}
// for(let i=0;i<str.length;i++){
//     if(str[i] in freq ==false){
//         freq[str[i]]=1;

//     }else{
//         freq[str[i]]=freq[str[i]+1];
//     }
// }
// console.log(freq);



// let prime=[];
// let arr=[1,2,3,8,9,10];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         prime.push(arr[i]);
//     }
// }
// console.log(prime);



//  function prime() {
    
// }




     