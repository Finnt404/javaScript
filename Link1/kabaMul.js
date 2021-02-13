var array1=[1,2,3,4,5];
var array2=[1,4,9,8,7];
function add(array1,array2)
{
var sum=[];
for(var i=0;i<array1.length;i++){
sum.push(array1[i]+array2[i]);
}
return sum;
}
function substract(array1,array2)
{
var sum1=[];
for(var i=0;i<array1.length;i++){
sum1.push(array1[i]-array2[i]);
}
return sum1;
}
function multiple(array1,array2)
{
var sum2=[];
for(var i=0;i<array1.length;i++){
sum2.push(array1[i]*array2[i]);
}
return sum2;
}
console.log(add(array1,array2));
console.log(substract(array1,array2));
console.log(multiple(array1,array2));
