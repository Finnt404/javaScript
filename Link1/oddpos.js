let prompt=require('prompt-sync')({sigint:true});
let a=["BMW","AUDi","BENCE","LAMBO"];
let li=[];
for(let i=0;i<a.length;i++){
    if(i%2==1){
        li.push(a[i]);   
        }   
    }
console.log(li);

console.log("--------------------------");
console.log("program for max value in a list");
let arr=[1,2,3,4,6,77,3,24];
let val=Math.max(...arr);
console.log(val);


console.log("--------------------------");
console.log("program for reverse a list");
let revlist=[];
for(let i=arr.length-1;i>=0;i--){
        revlist.push(arr[i]);
}
console.log(revlist);



console.log("-----------------------------------");
console.log("program for finding cumulative sum of a array");
//let vals=[];
let al=[1,2,3,4];
//let tot=0;
function totSum(al) {
    let result = [al[0]];

    for(let i = 1; i < al.length; i++) {
      result[i] = result[i - 1] + al[i];
    }

    return result;
}
console.log(totSum(al));

console.log("--------------------------");
console.log("program to chech the given string is palindrome or not");
function checkPalindrome(str) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
//let prompt=require('prompt-sync')({sigint:true});
let string = prompt('Enter a string: ');
let value = checkPalindrome(string);
console.log(value);



console.log("--------------------------");
console.log("program to check the element is present in the giveen string");  //we can use javascript inbuilt method called "include" to find the occurences. 

let inp=prompt("enter the value to find that occurs in the list or not:");
count=0;
for(let i=0;i<arr.length;i++){
        if(inp==arr[i]){
        count+=1;
    }
}
if(count>=1){
    console.log("element Found!");
}
else{
    console.log("Element not found!");
}
