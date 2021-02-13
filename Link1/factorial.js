let prompt=require('prompt-sync')({sigint:true});
let n=prompt("Enter a number :");
function fac(n){
    if (n==1){
        return 1;
    }
    else{
        return n*fac(n-1);
    }
}
console.log(fac(n));