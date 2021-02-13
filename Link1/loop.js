s="javascriptloops";
//newS="";
//vowels="aeiou";

let j;
for (j=0;j<s.length;j++){
    let str=s[j];
    if(str=='a' || str == 'e' || str =='i' || str =='o' || str =='u' ){
        console.log(str)
    } 
}
    for (j=0;j<s.length;j++){
        let str=s[j];
        if(str!='a' && str != 'e' && str !='i' && str !='o' && str !='u' ){
            console.log(str)
        } 
}
