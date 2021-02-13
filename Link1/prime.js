let prompt=require('prompt-sync')({sigint:true});
let start=parseInt(prompt("Enter the start value:"));
let end=parseInt(prompt("Enter the end value:"));
for(let i=start;i<=end;i++){
    let flag=0;
    for(let j=2;j<i;j++){
        if(i%j==0){
            flag=1;
            break;
        }
    }

if(i>1 && flag==0){
    console.log(i);
}
}   