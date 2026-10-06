// let str="";
// for(let i=1;i<=5;i++){
//     str+="*"
// }
// console.log(str);

//   *****
//   *****
//   *****

// let n=3;
// for(let row=1;row<=n;row++){
//     let str="";
//     for(let col=1;col<=5;col++){
//         str+="*";
//     }
//     console.log(str);
// }







// *
// **
// ***
// ****

// let n=4;
// for(let row=1;row<=n;row++){
//     let str="";
//     for(let col=1;col<=row;col++){
//         str+="*";
//     }
//     console.log(str);
// }








// *
// ***
// *****
// *******

// let n=4;
// for(let row=1;row<=n;row++){
//     let str="";
//     for(let col=1;col<=2*row-1;col++){
//         str+="*";
//     }
//     console.log(str);
// }







// **
// ****
// ******


// let n=4;
// for(let row=1;row<=n;row++){
//     let str="";
//     for(let col=1;col<=2*row-2;col++){
//         str+="*";
//     }
//     console.log(str);
// }







// ****
// ***
// **
// *



// let n=4;
// for(let row=1;row<=n;row++){
//     let str="";
//     for(let col=1;col<=n-row+1;col++){
//         str+="*";
//     }
//     console.log(str);
// }






// *********
// *******
// *****
// ***
// *

// let n=5;
// for(let row=1;row<=n;row++){
//     let str="";
//     for(let col=1;col<=2*(n-row+1)-1;col++){
//         str+="*";
//     }
//     console.log(str);
// }






// let n=3;
// for(let row=1;row<=n;row++){
//     let str="";
//     for(let col=1;col<=2*(n-row+1)-2;col++)
//         str="  ";
//     for(let col=1;col<=2*row-1;col++)
//         str+="*";
    
//     console.log(str);
// }










// ********
//   ******
//     ****
//       **




// let n=4;
// for(let row=1;row<=n;row++){
//     let str="";
//     for(let col=1;col<=2*row-2;col++)
//         str+=" ";
//     for(let col=1;col<=2*(n-row+1);col++)
//         str+="*";
    
//     console.log(str);
// }




// *****
//   ***
//     *


// let n=4;
// for(let row=1;row<=n;row++){
//     let str="";
//     //space
//     for(let col=1;col<=2*row-2;col++)
//         str+=" ";
//     //star
//     for(let col=1;col<=2*(n-row)-1;col++)
//         str+="*";
    
//     console.log(str);


    
// }








// 1
// 12
// 123
// 1234



// let n=4;
// for(let row=1;row<=n;row++){
//     let str="";
//     for(let col=1;col<=row;col++){
//         str+=col;
//     }
//     console.log(str);
// }






// let n=4;
// for(let row=1;row<=n;row++){
//     let str="";
//     for(let col=1;col<=row;col++){
//         str+=String.fromCharCode(65+col-1);
//     }
//     console.log(str);
// }













// let mat=[
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]   
// ]
// //print matrix coloumn wise
// for(let col=0;col<mat[0].length;col++){
    
//     for(let row=0;row<mat.length;row++){
//         console.log(mat[row][col]);
//     }
//     // console.log(mat[row][col]);
// }





//print boundary of matrix
// let arr=[
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]   
// ]

// for(let row=0;row<arr.length;row++){
//     for(let col=0;col<arr[0].length;col++){
//         if(row==0 || row==arr.length-1 || col==0 || col==arr[0].length-1){
//             console.log(arr[row][col]);
//         }
//     }   
// }






//find maximum in matrix
// let mat=[
//     [1,2,3,4],
//     [5,6,14,8],
//     [9,10,11,12],
//     [13,13,0,9]   
// ]
// let max=mat[0][0];
// for(let row=0;row<mat.length;row++){
//     for(let col=0;col<mat[0].length;col++){
//         if(mat[row][col]>max){
//             max=mat[row][col];
//         }
//     }
// }
// console.log(max);








//print the items of second diagonal of matrix
// let mat=[
//     [1,2,3],
//     [5,6,14],
//     [9,10,11]       
     
// ]         
// for(let row=0;row<mat.length;row++){
//     for(let col=0;col<mat[0].length;col++){
//         if(row+col==mat.length-1){
//             console.log(mat[row][col]);
//         }
//     }   

// }



//print secondary diagonal from bottom to top
// let mat=[
//     [1,2,3],
//     [5,6,14],
//     [9,10,11]   
// ]
// for(let row=mat.length-1;row>=0;row--){
//     console.log(mat[row][mat.length-1-row]);
// }



//transpose of matrix
// let mat=[
//     [1,5,8],
//     [2,6,10],
//     [3,9,9]
// ]
// let trans=[]
// for(let row=0;row<mat.length;row++){
//     for(let col=0;col<mat[0].length;col++){
//         if(row<col){
//             let temp=mat[row][col];
//             mat[row][col]=mat[col][row];
//             mat[col][row]=temp;
//         }
//     }
// }
// console.log(mat);






//boundry traversal of matrix
// let mat=[
//     [1,4,7,1],
//     [2,5,8,0],
//     [3,6,9,5]
// ]


// let left=0;
// let right=mat[0].length-1;
// let top=0;
// let bottom=mat.length-1;

// // Print top row
// for(let col=left;col<=right;col++){
//     console.log(mat[top][col]);
// }
// top++;

// // Print right column
// for(let row=top;row<=bottom;row++){
//     console.log(mat[row][right]);
// }
// right--;

// // Print bottom row
// for(let col=right;col>=left;col--){
//     console.log(mat[bottom][col]);
// }
// bottom--;

// // Print left column
// for(let row=bottom;row>=top;row--){
//     console.log(mat[row][left]);
// }
// left++;



//*////////////////////////////////////////////////////////////////////////////////


//subarray




//subray of lenght 2
// let arr=[1,2,3,4];
// let k=2;
// for(let i=0;i<arr.length-k+1;i++){
//     let subarr=[];
//     for(let j=i;j<i+k;j++){
//         subarr.push(arr[j]);
//     }
//     console.log(subarr);
// }



// let str="akash";
// let k=2;
// for(let i=0;i<str.length-k+1;i++){
//     let substr="";
//     for(let j=i;j<i+k;j++){
//         substr+=str[j];
//     }
//     console.log(substr);
// }




//find total number of subarrays
// let arr=[1,2,3,4];
// let count=0;
// for(let i=0;i<arr.length;i++){
//     for(let j=i;j<arr.length;j++){
//         count++;
//     }
// }
// console.log(count);












let mat=[
    [1,4,7],
    [2,5,8],
    [3,6,9]
]

// 1 4 7 1 0 5 9 6 3 2


let left=0,right=mat[0].length-1,
top=0,bottom=mat.length-1;

while(top<=bottom || left<=right)

// left to right for top rows
for(let k=left;k<=right;k++){
    console.log(mat[top][k]);
}
top++;

// top to bottom for right column
for(let k=top;k<=bottom;k++){
    console.log(mat[k][right]);
}
right--;

// right to left for bottom row 
for(let k=right;k>=left;k--){
    console.log(mat[bottom][k]);
}
bottom--;
// bottom to top for left column
for(let k=bottom;k>=top;k--){
    console.log(mat[k][left]);
}
left++;


