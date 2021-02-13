let prompt = require('Prompt-Sync')({sigint:true});
let year=parseInt(prompt("Enter the year to find the leap year for 20 years!: "));
let count=5;
    while(count>0){
        if(year%4==0 && year%100!=0 || year%400==0){
                console.log(year);
                year++;
                count--;
    }
        else{
            year++;
        }
    }

