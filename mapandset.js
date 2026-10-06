//map
//stores key-value pairs


// let mp=new Map();

// mp.set("vedant",30);
// mp.set("sachin",40);
// mp.set("sachin",50); //overwrites the value of sachin

//key cant be duplicate but value can be duplicate
// mp.set("sachin",50);

//get=to acess the value of a key
// console.log(mp.get("vedant"));

//mp.has=to check if a key exists or not
// console.log(mp.has("vedant"));

//mp.clear=to clear the map
// mp.clear();

//mp.delete=to delete a key-value pair
// mp.delete("vedant");

//time complexity
//best case=O(1)
//average case=O(1)
//worst case=O(n)

// let mp=new Map();
// mp.set("vedant",30);
// mp.set("sachin",40);
// mp.set("akash",50);

// console.log(mp.get("vedant"));
// console.log(mp.has("vedant"));

// for (let property of mp){
//     console.log(property[0],property[1]);
// }

// for(let[key,value] of mp){
//     console.log(key,value);
// }

// let arr=[1,2,3,4,4,5,5];
//find frequency of each element in the array

// let mp=new Map();

// for(let element of arr){
//     if(mp.has(element)){
//         mp.set(element,mp.get(element)+1);
//     }
//     else{
//         mp.set(element,1);
//     }
// }

// console.log(mp);

//size of map
// console.log(mp.size);

//creating map from array
// let mp=new Map([
//     [1,2],
//     [2,3],
//     [4,5]
// ]);

// for (let [key, value] of mp) {
//     console.log(key, value);
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////

//set--stores only keys and no values
// let st=new Set();
// st.add(1);
// st.add(2);
// st.add(3);
// st.add(4);

// for(let element of st){
//     console.log(element);
// }

//CONVERT array to set
// let arr=[1,2,3,4,4,5,5];
// let st=new Set(arr);
// console.log(st);

//print unique items from array
// let arr=[8,8,2,3,4,5,5,5];
// let st=new Set(arr);
// for(let element of st){
//     console.log(element);
// }

//given am array check if it is duplicate or not
// let arr=[1,2,4,4,5];
// let st=new Set(arr);
// if(st.size==arr.length){
//     console.log("no duplicate");

// }else{
//     console.log("duplicate exists");
// }

// let arr=[
//     {name:"akash", city:"pune"},
//     {name:"vedant", city:"mumbai"},
//     {name:"sachin", city:"delhi"},
//     {name:"akash", city:"pune"},

// ]

//group by city
//  let mp=new Map();
//  for(let p of arr){
//     if (mp.has(p.city)==false){
//         mp.set(p.city,[p.name]);
//     }
//     else{
//         let names=mp.get (p.city);
//         names.push(p.name);
//         mp.set(p.city,names);
//     }
//  }
//  console.log(mp);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//resursion

// function print(n){
//     if(n==0)
//         return;
//     print(n-1);
//     console.log(n);

// }
// print(5);

//find sum of 1 to n using recursion

// function total(n,sum){
//     if(n==0){
//         console.log(sum);
//         return;
//     }
//     sum+=n;
//     total (n-1,sum);

// }
// total(5,0);

///find factorial o]using resursion

// function factorial(n){
//     if(n==0 || n==1){
//         return 1;

//     }
//     return n*factorial(n-1);
// }
// console.log(factorial(5));

//find sum of digit

// function sumOfDigits(n){
//     if(n==0){
//         return 0;

//     }
//      return (n % 10) + sumOfDigits(Math.floor(n / 10));
// }

// console.log(sumOfDigits(121));

//find maximum of array
// let arr=[1,2,3,4,5];
// function findmax(arr,i,ans){
//     if(i==arr.length){
//         console.log(ans);
//         return;
//     }
//     if(arr[i]>ans)
//         ans=arr[i];
//     findmax(arr,i+1,ans);

// }
// findmax(arr,0,-Infinity);

//check if arr is sorted or not

// let arr=[1,2,3,5,3];
//  function Sorted(arr,index){
//     if(index==arr.length-1){
//         return true;

//     }
//    if( arr[index]>arr[index+1]){
//     return false;
//    }
//    return Sorted(arr,index+1);

// }
// console.log(Sorted(arr,0));

// let str="rar"
// function ispalindrome(str,start,end){
//     if(start>=end){
//         return true;
//     }
//     if(str[start]!==str[end]){
//         return false;
//     }
//     return ispalindrome(str,start+1,end-1);
// }
// console.log(ispalindrome(str,0,str.length-1));

//print all the prime number from 1 to n

// function isprime(n,i){
//     if(n<2){
//         return false;

//     }if(i==n){
//         return true;
//     }
//     if(n%i==0){
//         return false;
//     }
//     return isprime(i+1,n);
// }
// function print(){
//     for(let i=1;i<=n;i++){
//         if(isprime(i,n)){
//             console.log(n);
//         }
//     }
// }

///reverse a array using recursion

// let arr = [5, 4, 6, 2, 1];
// function reverse(arr, start, end) {
//   if (start >= end) {
//     return;
//   }
//   let temp = arr[start];
//   arr[start] = arr[end];
//   arr[end] = temp;
// }
// reverse(0, arr.length - 1, arr);
// console.log(arr);








//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//selection sort


// let arr=[5,4,1,2];
// for(let i=0;i<arr.length;i++){
//     let minindex=i;
//     let minitem=arr[i];
//     for(let j=i;j<arr.length;j++){
//         if(arr[j]<minitem){
//             minindex=j;
//             minitem=arr[j];
//         }
    
        
//     }

//     let temp=arr[i];
//     arr[i]=arr[minindex];
//     arr[minindex]=temp;
// }
// console.log(arr);


////////////////////////////////////////////////////////////////////////////////////////////////////////



///bubble sort


// let arr=[5,4,1,2];
// for(let i=0;i<arr.length;i++){
   
//     for(let j=0;j<arr.length;j++){
//         if(arr[j]>arr[j+1]){
//             let temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
            
//         }
    
        
//     }

    
// }
// console.log(arr);

/////////////////////////////////////////////////////////////////////////////////////////////////////


//quicksort

// let arr=[5,4,6,7,1,2];
// function paritionIndex(arr,l,high){
//     let i=l,j




//     return index;


// }
// paritionIndex(arr,0,arr.length-1);







///arrow function

// const mul=(a,b)=>{
//     return a*b;
// }

// console.log(mul(3,6));


//////////////////////////////////////////

// const multiply=(a,b)=>{
//     return a*b;
// }
// const adddtion=(a,b)=>{
//     return a+b;
// }
// const subtraction=(a,b)=>{
//     return a-b;
// }

// function calculate(a,b,operations){
//     console.log(operations(a,b))
// }
// calculate(1,2,multiply);

// calculate(3,2,adddtion);


// calculate(5,2,subtraction);




///////////////////////////////////////////////////////////

// function buy(){
//     return function payment(){
//         console.log("payment is being processed");
//     }
// }
// console.log(buy());
// const process =buy();
// process();


// buy()()




////////////////////////////////////////////////////////////////////////////////////////


//higher order function

// let arr=[4,3,2,1];


// function callback(item,index,arr){
//     return 2*item;
// }
// let double=arr.map(callback);
// console.log(double);




//////////////////////////////////

// let arr=[4,3,2,1];
// function callback(item,index,arr){
//     return 3*item;

// }
// let double=arr.map(callback);
// console.log(double);




// let triple =arr.map((item)=>item*3);
// console.log(triple);





//////////////////////////////////////////////////////////////


// let price=[5,6,7,8,9];

// let gst=price.map((item)=>item*20/100);
// console.log(gst);






///////////////////////////////////////////////////////////////////////



// let students=[
//     {
//         name:"akash",
//         score:40,
//         age:20,
//         iseligible:false,
//     },
//     {
//          name:"vikas",
//         score:20,
//         age:30, 
//         iseligible:false,
//     },
//     {
//           name:"suyash",
//         score:50,
//         age:50,
//         iseligible:true,
//     }
// ]

// let names=students.map((student)=>student.name);
// console.log(names);



// let transformdata=students.map((student)=>{
//     return{
//         name:student.name,
//         age:student.age,
//         score:student.score,
//         iseligible:student.score >40 && student.age>20,


//     }
// })

// console.log(transformdata);


///////////////////////////////////////////////////////////////////



// let arr=[1,2,3,4,5];
// let transform=arr.map((items,index)=>{
//     return{
//         items,index,
//     }
// })
// console.log(transform);




///////////////////////////////////////////////////////////////////////////////////////




//filter


//return eve number
// let arr=[1,2,3,4,5];

// function iseven(item){
//     return item>2?true:false;
// }
// let even =arr.filter(iseven);
// console.log(even);


/////////////////////////////////////////////////////////////////////////////////////////////


// let students=[
//     {
//         name:"akash",
//         score:40,
//         age:20,
//         iseligible:false,
//     },
//     {
//          name:"vikas",
//         score:20,
//         age:30, 
//         iseligible:false,
//     },
//     {
//           name:"suyash",
//         score:50,
//         age:50,
//         iseligible:true,
//     }
// ]
// let transform=students.filter((student)=>student.age>20);
// console.log(transform);





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const employees = [
//   {
//     employeeId: "EMP001",
//     name: "Aarav Sharma",
//     gender: "Male",
//     department: "IT",
//     jobTitle: "Software Engineer",
//     location: "Pune",
//     salary: 850000,
//     joiningDate: "2022-06-15",
//     experience: 4,
//     status: "Active"
//   },
//   {
//     employeeId: "EMP002",
//     name: "Ananya Patel",
//     gender: "Female",
//     department: "HR",
//     jobTitle: "HR Executive",
//     location: "Mumbai",
//     salary: 650000,
//     joiningDate: "2023-01-10",
//     experience: 3,
//     status: "Active"
//   },
//   {
//     employeeId: "EMP003",
//     name: "Rohan Mehta",
//     gender: "Male",
//     department: "Finance",
//     jobTitle: "Financial Analyst",
//     location: "Pune",
//     salary: 780000,
//     joiningDate: "2021-08-22",
//     experience: 5,
//     status: "Active"
//   },
//   {
//     employeeId: "EMP004",
//     name: "Priya Singh",
//     gender: "Female",
//     department: "IT",
//     jobTitle: "Senior Software Engineer",
//     location: "Bangalore",
//     salary: 1250000,
//     joiningDate: "2020-03-18",
//     experience: 6,
//     status: "Active"
//   },
//   {
//     employeeId: "EMP005",
//     name: "Kabir Joshi",
//     gender: "Male",
//     department: "Sales",
//     jobTitle: "Sales Executive",
//     location: "Delhi",
//     salary: 720000,
//     joiningDate: "2023-07-05",
//     experience: 3,
//     status: "Active"
//   },
// ];


// let transform =employees.filter((employees)=>employees.salary>100000);
// console.log(transform);





////////mapa and filter


// let filterdata=employees.filter((employees)=>employees.salary>100000);
// let names=filterdata.map((employees)=>employees.name);
// console.log(names);






/////////////////////////////////////////////////////////////////////////////////////////////////////////
//reduce

// let arr=[4,5,6,7,8];
// function callback(accum,curr){
//     console.log(accum,curr);
//     return curr*accum;
// }

// let finalvalue=arr.reduce(callback,1);
// console.log(finalvalue);









// const employees = [
//   {
//     employeeId: "EMP001",
//     name: "Aarav Sharma",
//     gender: "Male",
//     department: "IT",
//     jobTitle: "Software Engineer",
//     location: "Pune",
//     salary: 850000,
//     joiningDate: "2022-06-15",
//     experience: 4,
//     status: "Active"
//   },
//   {
//     employeeId: "EMP002",
//     name: "Ananya Patel",
//     gender: "Female",
//     department: "HR",
//     jobTitle: "HR Executive",
//     location: "Mumbai",
//     salary: 650000,
//     joiningDate: "2023-01-10",
//     experience: 3,
//     status: "Active"
//   },
//   {
//     employeeId: "EMP003",
//     name: "Rohan Mehta",
//     gender: "Male",
//     department: "Finance",
//     jobTitle: "Financial Analyst",
//     location: "Pune",
//     salary: 780000,
//     joiningDate: "2021-08-22",
//     experience: 5,
//     status: "Active"
//   },
//   {
//     employeeId: "EMP004",
//     name: "Priya Singh",
//     gender: "Female",
//     department: "IT",
//     jobTitle: "Senior Software Engineer",
//     location: "Bangalore",
//     salary: 1250000,
//     joiningDate: "2020-03-18",
//     experience: 6,
//     status: "Active"
//   },
//   {
//     employeeId: "EMP005",
//     name: "Kabir Joshi",
//     gender: "Male",
//     department: "Sales",
//     jobTitle: "Sales Executive",
//     location: "Delhi",
//     salary: 720000,
//     joiningDate: "2023-07-05",
//     experience: 3,
//     status: "Active"
//   },
// ];


// let totalsalary=employees.reduce((accum,curr)=>accum+curr.salary,0);
// console.log(totalsalary);


// let transform =employees.filter((employees)=>employees.department=="IT");

// let noemploye=transform.reduce((accum)=>accum+1,0);
// console.log(noemploye);




// let transform=employees.filter((employees)=>employees.location=="Pune");
// let nameofemploy=transform.reduce((accum,curr)=>accum+1,0);
// console.log(nameofemploy);



// function ispune(curr,accum){
//     if(curr.location=="Pune")
//         count++;
//     return count;

// }

// let total=employees.reduce(employees,0);
// console.log(total);
/////////////////////////////////////////////////////////////////////////////////





// let transform=employees.filter((employees)=>employees.location=="Delhi");
// let nameofemploy=transform.reduce((accum,curr)=>accum+1,0);
// console.log(nameofemploy);
// let names=transform.map((employees)=>employees.location);
// console.log(names);




// let student=[
//     {
//         name:"vikas",
//         class:10,
//         marks:20
//     },
//     {
//         name:"akash",
//         class:12,
//         marks:15 
//     },
//     {
//          name:"ramesh",
//         class:12,
//         marks:17
//     }
// ]
// let grouped = student.reduce((accum, curr) => {
//   if (!accum[curr.class]) accum[curr.class] = [];
//   accum[curr.class].push(curr.name);
//   return accum;
// }, {});












// let n=8;
// for(let row=1;row<=n;row++){
//     let str="";
//     for(let col=1;col<=n;col++){
//         if(row==1 || row==n || col==1 || col==n){
//            str+="* ";
//         }else{
//            str+="  ";
//         }
//     }
//     console.log(str);
// }





// let mat=[[4,5,6],
//         [7,8,9],
//         [10,11,12]]

// for(let row=0;row<mat.length;row++){
//     for(let col=0;col<mat[row].length;col++){
//         if(row+col==mat.length-1)
//           console.log(mat[row][col]);
//     }
// }



// for(let col=0;col<mat[0].length;col++){
//     for(let row=0;row<mat.length;row++){
//         console.log(mat[row][col]);
//     }
// }











let mat=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];


let left=0,right=mat[0].length-1,
top=0,bottom=mat.length-1;




while(left <= right && top<= bottom     ){
    for(let k=left;k<=right;k++){
        console.log(mat[top][k]);
    }
    top++;



    for(let k=top;k<=bottom;k++){
        console.log(mat[k][right]);
    }
    right--;


      for(let k=right;k>=left&& top<=bottom;k--){
        console.log(mat[bottom][k]);
    }
    bottom--;




     for(let k=bottom;k>=top && left<=right ;k--){
        console.log(mat[k][left]);
    }
    left++;

}





// let k=2;

// let arr=[5,4,8,9,10];


// for(let i=0;i<arr.length-k+1;i++){
//     let subarray=[];

//     for(j=i;j<i+k;j++){
//         subarray.push(arr[j]);
//     }
//     console.log(subarray);
//     ;
// }
   



// let arr=[5,4,8,9];
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<=arr.length;j++){
//         console.log(arr.slice(i,j));
        
//     }
// }




// let arr = [1,2,3];

// let count=0;
// for(let i=0;i<arr.length;i++){
//     let subarray=[];
//     for(let j=i;j<arr.length;j++){
//        subarray.push(arr[j]);
//        console.log(subarray);
//        count++;
//     }    
// }

// console.log(count);






// let arr=[5,6,8,9,10];
//    let target=8



// function binarySearch(arr,target){
//     let l=0,r=arr.length-1;
//     while (l <= r) {
//         let mid = Math.floor((l + r) / 2);
//         if (arr[mid] == target)
//             return true;
//         else if (arr[mid] > target) {
//             r = mid - 1;
//         }
//         else {
//             l = mid + 1;
//         }
//     }
//     return false;
// }

// console.log(binarySearch(arr,target));


