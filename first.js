

//let name="vedant";
//let age=30;
//let isEligible=true; 

//console.log("Name:", name);
//console.log("Age:", age);
//console.log("Is Eligible:", isEligible);
//to find the type of variable we use typeof operatorconsole.log( typeof name);


/*let a=12;
a="vedant";
console.log(a);
console.log(typeof a);  
*/


//order of operations--
//PEMDAS
//parenthessis ()
//exponent
//multplication and division (left to right)
//addition and subtraction (left to right)

//let a=2+2+2*5+10/5-6;
// 1)division ==2+2+2*5+2-6
// 2)multiplication == 2+2+10+2-6
// 3)subtraction== 2+2+10-4
// 4)subtraction == 2+2+6
// 5) addtion== 4+6
// 6) addtion== 10

//let b=5+2/2+6*3-8+9;
 //==25

//letc=2+(3*6-4)+5-2*(3+4);
 //7



 // exponentiation
 //let a=2**6;
 //console.log(a); 


 //let b=10**3
 //console.log(b); 

//let c= 10**3.5
//console.log(c); 



//******************************************************************************************************* */


//compound assignment operator(+=, -=, *=, /=, %=, **=)

//eg +=
// let res=10;
//res+=5;
//console.log(res);


//short hand operators

//-=

//let a=4
//a-=2;
//console.log(a);

//let b=6;
//a-=a/2;
////console.log(a);       /// work for any value


//*=

//let a=5;
//a*=2;
//console.log(a);



///   /=

//let b=10;
//b/=2;
//console.log(b);


//eg

//let c=10;
//c+=5;
//c/=3;
//console.log(c);


///******************************************************************************************* 
/// math object basics(math.round, math.floor, math.ceil, math.random, math.min, math.max, math.pow, math.sqrt


//1) math.round

//console.log(Math.round(4.6));  //5

//console.log(Math.round(4.4));  //4

//console.log(Math.round(0.5));  //1

  //  console.log(Math.round(2.5));  //3

    //console.log(Math.round(2.3));  //2

    //console.log(Math.round(3.6));  //4
    
    //console.log(Math.round(-2.3));  //-2

    //console.log(Math.round(-4.7));  //-5

    //console.log(Math.round(-0.2));  //0



    //2) math.floor    --> round down to the nearest integer

    //console.log(Math.floor(4.6));  //4

    //console.log(Math.floor(2.8));  //2

    //console.log(Math.floor(-2.8));  //-3

    //console.log(Math.floor(-4.7));  //-5




    //3) math.ceil   --> round up to the nearest integer

   // console.log(Math.ceil(3.5));  //4

    //console.log(Math.ceil(-4.3));  //-4


   // console.log(Math.ceil(4.3));  //5




    //4) to fixed  --> round to the nearest integer

    //let a =8/3;
    //console.log(a.toFixed(2));  //2.67
    //console.log(a.toFixed(3));  //2.667

    //let b= 3.45555567;
    ////console.log(b.toFixed(2));  //3.46
    ////console.log(b.toFixed(3));  //3.456


    //5)parseInt()  --> convert string to integer

    //let c="10";
    //console.log(parseInt(c));  //10


    //console.log(parseInt("123a"));  //123

    //console.log(parseInt("a123"));  //NaN

    //console.log(parseInt("10.5"));  //10





//console.log(Math.round(4.8)) 

//console.log(Math.floor(4.8)) //4

//console.log(Math.ceil(4.8)) //5

//console.log(parseInt("10.5")) //10

//let a=8/3;
//console.log(a.toFixed(2)) //2.67
    


///6) ParseFloat()  --> convert string to float
//console.log(parseFloat("1.25abc")) //1.25

///7) infinity
//let b=2/0;
//console.log(b) //infinity
    
///8)number object
//console.log(Number("10")) //10
//console.log(Number("123abc")) //NaN

///max number that can be represented in js
//console.log(Number.MAX_VALUE) //1.7976931348623157e+308
//console.log(Number.MIN_VALUE) //5e-324

//let ans =2*Number.MAX_VALUE;
//console.log(ans) //infinity 


//isNaN()  --> check if the value is NaN or not
//console.log(isNaN(10)) //false
//console.log(isNaN("abc")) //true
//console.log(isNaN("123abc")) //true



//let v =125;
//let s=120;
//let occupancy=s/v*100;
//console.log(occupancy) //96



//let last_year=125;
//let this_year=125*15/100;
//console.log(this_year) //18.75
//let total=last_year+this_year;
//console.log(total) //143.75


//*******************************************************************************************************

//comparision operators(==, ===, !=, !==, >, <, >=, <=)

//1)==(loose equality operator)  --> check if the values are equal or not, it does not check the data type
//type coercin when two vaalues of different data types are compared, js converts one of the values to the other value's data type and then compares them

// console.log(10==10) //true
// console.log("10"==10) //true

// console.log(1234="1234") //true

// console.log(0=="") //true empty string is converted to 0

// console.log(0==false) //true false is converted to 0

// console.log(null==undefined) //true null is converted to undefined

// console.log("1"==true) //true true is converted to 1

// console.log("0"==false) //true false is converted to 0

// console.log("1"==false) //false false is converted to 0 and 1 is not equal to 0


//2) ===(strict equality operator)  --> check if the values are equal or not, it also checks the data type
// console.log(10===10) //true
// console.log("10"===10) //false
// console.log(true===true) //true
// console.log(true===1) //false


//3) !=(loose inequality operator)  --> check if the values are not equal or not, it does not check the data type
// console.log(10!=10) //false
// console.log("10"!=10) //false
// console.log(true!=0) //true
// console.log(null!=undefined) //false


//!==  (strict inequality operator)  --> check if the values are not equal or not, it also checks the data type

// console.log(1!==2) //true
// console,log(1!==true)//true



//less than(<)  --> check if the value on the left is less than the value on the right
// console.log(10<20) //true
// console.log(20<10) //false
// console.log("10"<"20") //true
// console.log("20"<"10") //false


//greater than(>)  --> check if the value on the left is greater than the value on the right
// console.log(10>20) //false
// console.log(20>10) //true
// console.log("10">"20") //false
// console.log("20">"10") //true

//********************************************************************************************* */
// trurhy and falsy values in js
//falsy values --> false, 0, "", null, undefined, NaN
//truthy values --> all other values

// console.log(Boolean(false)) //false
// console.log(Boolean(0)) //false
// console.log(Boolean("")) //false
// console.log(Boolean(null)) //false
// console.log(Boolean(undefined)) //false



//truthy values
// console.log(Boolean(true)) //true
// console.log(Boolean(1)) //true
// console.log(Boolean("hello")) //true
// console.log(Boolean({})) //true
// console.log(Boolean([])) //true




//**************************************

//logical operators in js
//1) &&(logical and)  --> returns true if both the operands are true, otherwise returns false
// console.log(true && true) //true
// console.log(true && false) //false
// console.log(false && true) //false
// console.log(false && false) //false

// console.log(2&&3) //3  --> returns the last truthy value if both the operands are truthy, otherwise returns the first falsy value
// console.log([]&&{}) //{}  --> returns the last truthy value if both the operands are truthy, otherwise returns the first falsy value
//And operator returns the first falsy value if any of the operands is falsy, otherwise returns the last truthy value


///2)or(||)  --> returns true if any of the operands is true, otherwise returns false
// console.log(2||3) //2  --> returns the first truthy value if any of the operands is truthy, otherwise returns the last falsy value
// console.log(0||2) //2  --> returns the first truthy value if any of the operands is truthy, otherwise returns the last falsy value
// console.log({}||0||false) //{}  --> returns the first truthy value if any of the operands is truthy, otherwise returns the last falsy value
// console.log(false||0||undefined)



//3)! operator  --> returns true if the operand is false, otherwise returns false
//true-->false
//false-->true

// console.log(!true) //false
// console.log(!false) //true
// console.log(!0) //true
// console.log(!{} )//false
// console.log(!(2&&3)) //false
// console.log({}&&![]) //false
// console.log(2&&3 || 4) //3







//********************************************************************************************************** */


//Short circuit--> when a expreaaion contain logical operator like &&,|| then we stop the evalution 
// let ans =2&&0&&3&&4;
// console.log(ans); //0


// let ans =  2||0||3&&4;
// console.log(ans);//2


// //******************************************************************* *
// //condtional statments

// if(//condtion){
// //code
// }


// let age=24;
// if(age>=18){
//   console.log("is eligible");

// }
// else{
//   console.log("not eligible");
// }




// let n=5;
// if(n%2==0){
//   console.log("it is even");

// }else{
//   console.log("it is odd");
// }




// let n=-2;
// if(n>0){
//   console.log("positive")

// }else if (n==0){
//   console.log("it is zero")
// }else{
//   console.log("negative")
// }

  



// let mark=10
// if(mark>90){
//   console.log("grade A+");

// }else if(mark>=80 &&mark<90){
//   console.log("grade A")
// }else if(mark>=70 && mark<80){
//   console.log("grade B+");
// }else if (60<=mark && mark<70){
//   console.log("grade B");

// }else(mark<60)
//   console.log("fail");

  


// let day=5;
// if(day==1){
//   console.log("Monday");
// }else if(day==2){
//   console.log("Tuesday");

// }else if(day==3){
//   console.log("Wednesday");
// }else if(day==4){
//   console.log("Thursday");
// }else if (day==5){
//    console.log("Friday");
// }else if(day==6){
//   console.log("Saturday");
// }else if(day==7)
//   console.log("Sunday");





  //nested if

  // let age=18;
  // let dl=true;
  // if(age>=18){
    
  //     if(dl==true){
  //       console.log("eligible")
  //     }
    
  // }else{
  //   console.log("not elogible");
  // }









// let month=12;
// if(month==1){
//   console.log("jan");

// }else if(month==2){
//   console.log("feb");

// }else if(month==3){
//   console.log("march");
// }else if(month==4){
//   console.log("april");
// }else if(month==5){
//   console.log("may");
// }else if(month==6){
//   console.log("june");
// }else if(month==7){
//   console.log("july");
// }else if (month==8){
//   console.log("august");
// }else if(month==9)
  




///*************************************************************************************************** */


//switch and terniary

// let day=6;
// switch(day){
//   case 1:
// console.log("jan");
// break;
// case 2:
//   console.log("feb");
//   break;
//   case 3:
//     console.log("marxh");
//     break;
//     default:
//       console.log("not valid month");
// }






//switch case without break keywords


// let check=1;
// switch(check){
//   case 1:
//     console.log("no is either 1 or 2");
//     break;
//   case 2:
//     console.log("no is either 1 or 2");
//     break;
//   case 3:
//     console.log("no is either 2 or 3");
//     break;  

// }


//******************************************************************************** */
//ternary condtion

// console.log(age>=18?"eligible":"not eligible");

// //2
// console.log(age>=?"eligible":"not eligible");


// let n=10;
// console.log(n%2==0?"even number":"not even");



// let age=17;
// let dl=true;
// console.log(age>=18 && dl==true ? "is eligible" : "not eligible");

// let a=1;
// let b=2;
// let c=3;
// if (a>b&&c){
//   console.log("a is greater");
// }else if(b>a&&b>c){
//   console.log("b is greater");
// }else  (c>a&&c>b)
//   console.log("c is greater");







//    let marks=90;
// switch(true){
//   case marks>90:
//     console.log(" grade A");
//     break;
//   case marks>=70:
//     console.log("grade B");
//     break;
//   case marks>=50:
//     console.log("grade C");
//   break;
//   default:
//     console.log("fail");
    
// }
  

// let age =18;
// let dl=true;
// switch(true){
//   case age >18 && dl==true:
  
//     console.log("is eligible");
//     break;
//     default:
//       console.log("not eligible");
// }





// let month=9;
// switch(true){
//   case month>=4 && month<=6:
//     console.log("quarter 4");
//     break;
//   case month >=7 && month<=9:
//     console.log("qurter 2");
//     break;
//   case month >= 10 && month<=12:
//     console.log("qurter 3");
//     break;
//     default:
//       console.log("qurter 1");
  
// }




//*****************************************************************************************************************
//  */


//loopss


// let a=10;
// a++;
// console.log(a);


// let a=10;
// a+=1;
// console.log(a);

// let a=10;
// console.log(a+a++);


// let b =10;
// b++;
// console.log(b++);//11
// console.log(b);//12



// let a ;
// a++;
// console.log(a);



// let a=5,b=9

// console.log(a+++b+b--);//20




//pre incremenent 
// let a =10;
// console.log(++a);    



// for(let i=1;i<=5;i++){
//   console.log("print hello");
// }


//******************************************************************************************** */
//1) FOR LOOP

// for(let i=1;i<=5;i++){
//   console.log(i);
// }



// for(let i=1;i<=10;i++){
//   console.log("*");
// }




// //print same line  
// let str="";
// for(let i=1;i<=10;i++){
//   str+="*";
// }
// console.log(str);




//***************************************************************************************************** */

//2) while loop

// let i=0;
// while(i<5){
//   console.log(i);
//   i++;
// }


//eg sum of number from 1 to 10

// let sum=0;
// for(let i=1;i<=10;i++){
//   sum+=i;
  
// }
// console.log(sum);


// let sum=0;
// let i=1;
// while(i<=10){
//   sum=3*i;           
//   i++;
// }




//print all even number

// for(let i=1;i<=10;i++){
//   if (i%2==0)
//     console.log(i);
  
  
// }

// for(let i=8;i<=80;i++){
//   if(i%8==0)
//     console.log(i);
// }



//sum of digit of number 
// let n=431;
// let sum=0;
// while(n>0){
//   let last_digit=n%10;
//   sum+=last_digit;
//   n=Math.floor(n/10);
// }
// console.log(sum);

//product of all the digit of number

// let n=431;
// let product=1;
// while(n>0){
//   let last_digit=n%10;
//   product*=last_digit;
//   n=Math.floor(n/10);
// }
// console.log(product);




//count no of digits

// let n=431;
// let count=0;
// while(n>0){
//   let last_digit=n%10;
//   count++;
//   n=Math.floor(n/10);
// }
// console.log(count);





//reverse a number


// let n=431;
// let rev=0;
// while(n>0){
//   let last_digit=n%10;
//   rev=rev*10+last_digit;
//   n=Math.floor(n/10);
// }
// console.log(rev);




///break and continue


// for(let i=0;i<10;i++){
//   if(i==5)
//     break;
//   console.log(i);
// }




//continue

// for(let i= 0;i<=5;i++){
//   if(i==4)
//     continue;
//   console.log(i);
// }





// for(let i=1;i<=10;i++){
//   if(i%3==0)
//     continue;
//   console.log(i);
// }



//********************************************* */
//do while
// let i=1;
// do{
//   console.log(i)
//   i++;
// }while(i<=50);



// for(let i=1;i<=50;i++){
//   if(i%2==0)
//     continue;
//   else if(i==35)
//     break;
//   console.log(i);
// }




// for(let i=0;i<=30;i++){
//   if(i%3==0){
//     console.log("foo")
//     break;
//   }else if(i%5==0){
//     console.log("bar");
//     break;
//   }else if(i%3==0 && i%5==0){
//     console.log("foo and bar");
//     break;
//   }
// }




     //**********************************************************

     //functionsss
//reusable  code

    //  let a=5
    //  let b=8;
    //  sum=a+b;
    //  console.log(sum);




     ///function declartion

// function sum  (){

// }sum()



// function print(){
//   console.log("hello world");
// }

// print()
// print()





// function print (username){
//   console.log("hello i am");
//   console.log("username");

// }
// print("vedant");
// print("shete");




// function print(name,age){

//   console.log("hello my name",name);


//   console.log("my age",age);

// }
// print("vedant",24);





///defalut parameter

// function print(name,age=20){
//   console.log(name);
//   console.log(age);
// }
// print("vedant");




// function print(name,age=20){
//   console.log(name);
//   console.log(age);
// }
// print("vedant",30);


// let age=20;
// function iseligible(){
// if (age>18)
//   return true;
// else
//   return false;
// }
// console.log(iseligible());





//2nd approch
// let age=20;
// function iseligible(){
// if (age>18)
//   return true;
// else
//   return false;
// }
// console.log(iseligible(20));

// let ans=iseligible(30);
// console.log(ans);



///factorial of number

// function fact(n){
// let prod=1;
// for(let i=1;i<=n;i++){
//   prod*1;
// }
// return prod;
// }

// console.log(fact(4));
// console.log(fact(6));



//function for even number 

// function even(n){

// for(let i=1;i<=n;i++){
//   if(i%2==0)
//     console.log(i);

  
  
// }

// }
// even(10);
// even(15);




//sum of prime number from 1 to n

// function isprime(i){
//   if(i%2!=0){
// return false;
// }
     
// }
// return true;

// function primesum(n){
//   let sum=0;
// for(let i=1;i<=n;i++){
  
// if(isprime(i)){
//   sum+=i;
// }
    
// }
// return sum;
// } 

///scope
//1)global scaope varible that can be declerad outside thr function or block can be accesed anywehre in the program that scope is known is global scope
// let a=2
// function check(){
//   console.log("inside function",a);
// }
// check();

// {
//   console.log("inside block",a);
// }

// ///2nd eg

// let b=30;
// function modify(){
//   b=50;
//   console.log("inside function",b);
// }
// console.log("global function",b);
// modify();




//diffrent varible decleration

// var
// let
// const




//2)function scope
//varible delare inside function is only accesible inside that function only
function check(){
  var a=10;
  console.log(a);
}
check();





