let prompt = require('prompt-sync')({sigint:true}); 
let num = prompt('Enter a number: ');
for(let i=1;i<=num;i++){
    console.log(i , '*' ,i , '=' , i*i);
}