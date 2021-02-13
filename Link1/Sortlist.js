function sortlist(a,b){
        for(i=0;i<b.length;i++){
            a.push(b[i]);
        }
          for(i=0;i<a.length;i++){
                for(j=i+1;j<a.length;j++){
                    if(a[i]>a[j]){
                        temp=a[i];
                        a[i]=a[j];
                        a[j]=temp;
                    }
                }
            }
            return a;
        }
a=[1,2,3,5,9];
b=[4,6,7,8];
console.log(sortlist(a,b));