const prompt = require('prompt-sync')({sigint:true});
 
const num = prompt('Enter a number: ');
let numbs=[];
function sum(num){
        
        let total=0;
        for (let i=1;i<=num;i++){
            total+=i;
            numbs.push(i);
        }
        return total;
    }
console.log("the sum of n (Whole values from 1 to N)numbers is: " + sum(num));

let newval=[];
for(let j=0;j<=numbs.length;j++){
    let DivNum=numbs[j];
    if (DivNum%3==0){
        newval.push(DivNum);
     }
     else if (DivNum%5==0){
         newval.push(DivNum);
     }
}
console.log("the sum series which is from 1  to N :");
console.log(numbs);
console.log("the sum series which is divisible by 3 and 5 is:");
console.log(newval);
let tot=0;
for(let k=0;k<newval.length;k++){
        let str=newval[k];
        tot+=str;

}
console.log("the values of sum which is div by 5 and 3:")
console.log(parseInt(tot));




/*
function numberSum(N) {
  var total = 0;
    for(var i = 1; i <= N; i++){
      total += i;
    }
    return total;
}

function run(){
  val = document.getElementById("val").value;
  document.getElementById("results").innerHTML=val+": "+numberSum(val)
  }
<input id="val">
<input type="Submit" onclick="run();">
<p id="results"></p>

*/