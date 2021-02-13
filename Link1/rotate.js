function rotateArray(A, K) {
    //if (!A.length) return A;
    let index = -1;
    while (++index < K) {
        A.unshift(A.pop());
    }
    let val=A.reverse();
    return val;
}

//console.log(A);
console.log(rotateArray([1,2,3,4,5,6],3));  
