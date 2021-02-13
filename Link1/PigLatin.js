let prompt=require('prompt-sync')({sigint:true});
let str=prompt("Enter the string that you want to change to Pig latin :");
function pigLatinTranslator(str) {
    const arr = str.split(' ');
    const finalArr = [];    
        arr.map(e => {
        let strArr = e.split('');
        let first = strArr.shift();
        if (first === first.toUpperCase() ) {  
            first = first.toLowerCase();
            strArr[0] = strArr[0].toUpperCase();
        }
        strArr.push(first + 'ay');
        const newStr = strArr.join('');
        finalArr.push(newStr);
    });
return finalArr.join(' ');
}
//console.log(pigLatinTranslator("Hetay uickqay rownbay oxfay", false));
console.log(pigLatinTranslator(str));