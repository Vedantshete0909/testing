//time complixity


// let n=5;
// for(let i=0;i<n;i++){
//     console.log("hello");
// }


//no of iteration=5
//no of iteration=7



//time complexity=O(n) linear time complexity


///////////////////////////////////////////////////////////////////////////////


// let n=4;
// for(let i=0;i<n;i++){
//     for(let j=0;j<n;j++){
//         console.log("hello");
//     }
// }

//no of iteration n=2 ---2*2
//no of iteration n=3 ---3*3



////////////////////////////////////////////////////////////////////////////////////


// for(let i=0;i<n;i++){
//     for(let j=0;j<i;j++){
        
//     }
// }

//no of iteration n=2 ---1
//tc=O(n^2) quadratic time complexity

/////////////////////////////////////////////////////////////////////////////


// for (let i=0;i<n;i++){
//     for(let j=0;j<n;j++){
//         for(let k=0;k<n;k++){
            
//         }
//     }
// }

//tc=O(n^3) cubic time complexity

////////////////////////////////////////////////////////////////////////////////

// for(let i=0;i*i<=n;i++){

// }
//tc=O(sqrt(n)) square root time complexity


///////////////////////////////////////////////////////////////////////////////
// while (n!=0){
//     n=n/2;
// }
//tc=O(log n) logarithmic time complexity
          





///find target exixt or not

// let arr=[4,1,8,2,3,6];
// let target=3;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==target){
//         console.log("target exists");
//         break;
//     }
// }

//////////////////////////////////////////////////////////////////////////////////////////////


///Binary search

//mostly work on sorted array

// let arr=[1,2,3,4,5];
// let target=4;
// while(l<=r){
//     let mid=Math.floor((l+r)/2);
//     if(arr[mid]==target){
//         console.log("target exists");
//         break;
//     }
//     else if(arr[mid]<target){
//         l=mid+1;
//     }
//     else{
//         r=mid-1;
//     }
// }




// let arr=[1,2,3,4,4,5,5,];
// let target=4;
// let l=0;
// let ans=-1;
// let r=arr.length-1;
// while(l<=r){
//     let mid=Math.floor((l+r)/2);
//     if(arr[mid]==target){
//         ans=mid;
//         r=mid-1;
        
//     }
//     else if(arr[mid]>target){
//         r=mid-1;
//     }
//     else{
//         l=mid+1;
//     }
//     return ans;

// }
    





//find last occurence of target
let arr=[1,2,3,4,4,5,5,];
let target=4; 
let l=0;
let r=arr.length-1;
let ans=-1;
while(l<=r){
    let mid=Math.floor((l+r)/2);
    if(arr[mid]==target){
        ans=mid;
        l=mid+1;
    } else if(arr[mid]>target){
        r=mid-1;
    }else{
        l=mid+1;
    }
}
console.log(ans);
