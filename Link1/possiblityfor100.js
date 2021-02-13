let numbers=[1,2,3,4,5,6,7,8,9];  //combinations will be 1[+|-|'']2[+|-|'']3[+|-|'']4[+|-|'']5[+|-|'']6[+|-|'']7[+|-|'']8[+|-|'']9 = 100
let target=100;
let combinations=  Math.pow(3,numbers.length-1);             //The number of operands is 3 and the spaces between the numbers are 8, which means 3^8 =
let o={0:"",1:"+",2:"-"};
let nums=[];
for(let i=0;i<=combinations;i++){
   let tries =i.toString(3);
    let p = ("00000000" + tries ).substr(-8,8).split("").map(function(v){ return parseInt(v) });

    let comb = "1"+o[p[0]]+"2"+o[p[1]]+"3"+o[p[2]]+"4"+o[p[3]]+"5"+o[p[4]]+"6"+o[p[5]]+"7"+o[p[6]]+"8"+o[p[7]]+"9";

	if(eval(comb) === 100)
	{  
        nums.push(comb);
    }
}
console.log(nums);