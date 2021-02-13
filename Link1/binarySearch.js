function recursiveFunction  (arr, x, start, end) { 
       
    // Base Condition 
    if (start > end) return false; 
   
    // Find the middle index 
    let mid=Math.floor((start + end)/2); 
   
    // Compare mid with given key x  //Where x is the user input number that should be search in the array.  
    if (arr[mid]==x) return true; 
          
    // If element at mid is greater than x, 
    // search in the left half of mid 
    if(arr[mid] > x)  {
        return recursiveFunction(arr, x, start, mid-1); 
    }
    else{
  
        // If element at mid is smaller than x, 
        // search in the right half of mid 
        return recursiveFunction(arr, x, mid+1, end); 
    }
} 
   
let prompt=require('prompt-sync')({sigint:true});
let x=prompt("enter the value that should be searched: ");
let arr = [1, 3, 5, 7, 8, 9]; 
//let x = 6;   // user input to find the value in the array

    
if (recursiveFunction(arr, x, 0, arr.length-1)) {
    console.log("Element found!"); 
}
else {
    console.log("Element not found!"); 
}