let arr=[1,2,3,4];
function forloop(arr){
    let total=0;
    for(let i=0;i<arr.length;i++){
        total+=arr[i];
        //console.log(total);
    }
    return total;
}
function whileloop(arr){
    let i = 0; 
    let tot = 0;
    while(i < arr.length) {
        tot += arr[i]; 
        i++;
    }
    return tot;
}


function recursion(arr) {
    if (arr.length == 1){ 
        return arr[0];
    } 
    else{
        return arr[0] + recursion(arr.slice(1))  ;
    }    
}

console.log(forloop(arr));
console.log(whileloop(arr));
console.log(recursion(arr));