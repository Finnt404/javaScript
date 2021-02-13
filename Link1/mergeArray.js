let a=['a','b','c','d'];
let b=[1,2,3,4];
let val1=a.length;
let val2=b.length;
let run =0;
let result=[];
if (val1>val2){
    run += val1;
}
else{
    run +=val2;
}
//console.log(run);

for(let i=0;i<run;i++){
    if (i+1 <= val1){
            result.push(a[i]);
    }
        if (i+1 <= val2){
            result.push(b[i]);
        }
}
console.log(result);