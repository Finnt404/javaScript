let prompt = require('prompt-sync')({sigint:true}); 
let num = prompt('Enter a number: ');
console.log("1 for addition,,,, 2 for multipilication");
console.log("type 1 or 2 as a user input");
let choose=prompt ("enter the val 1(add) or 2(mul):");
    let total=0;
    let mul=1;
    switch (choose) {
        case '1':
            let total=0;
            for (i=1;i<=num;i++){
                total+=i;
             }
        console.log(total);
        break;
    case '2':
        let mul=1;
        for (i=1;i<=num;i++){
            mul*=i;  
            }
        console.log(mul); 
        break;
    
        default:
            console.log('Sorry, we are not using --> '+choose);
    }