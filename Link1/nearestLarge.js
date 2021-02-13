function nextLargest(arr,n){
    for (var i=n;i<=arr.length;i++){
        for (var j=i+1;j<=arr.length;j++){
            if(arr[i]<arr[j]){
                return arr[j];
            }
            
            
        }
    }
    
}
console.log(nextLargest([1,4,3,2,5,7],1));
    