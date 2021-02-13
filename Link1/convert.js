var number = 12345;
    combine = [];

function change(number) {
    while (number) {
        combine.push(number % 10);
        number = Math.floor(number/10);
    }
    combine.reverse();
    return combine
}
//console.log(combine);
//console.log(number);
//.join(',')
console.log(change(number));
console.log("----------------------------------------------");
console.log("program for concatenation :");
let li1=[1,2,3];
let li2=["a","b","c"];
function con(li1,li2){
    return li1.concat(li2);
}
console.log(con(li1,li2));