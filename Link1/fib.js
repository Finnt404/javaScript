let prompt=require('prompt-sync')({sigint:true});
let n = prompt("Enter the end val of the fib series:");
function fib(n){
    if (n==1) 
    {
      return [0, 1];
    } 
    else 
    {
      var s = fib(n - 1);
      s.push(s[s.length - 1] + s[s.length - 2]);
      return s;
    }
  }
  
console.log(fib(n));
   