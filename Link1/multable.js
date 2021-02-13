const PromptSync = require("prompt-sync");

let prompt = require('Prompt-Sync')({sigint:true});
let n =prompt("type a number as input to generate tables upto 12:  ");
for(let i=0;i<=12;i++){
    let val=i*n;
    console.log(i +'X' + n + '=' + val);
}
