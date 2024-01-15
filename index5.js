let a= +prompt("Nhập số a bất kì");
let b= +prompt("Nhập số b bất kì");
if (a==0) {
    if (b==0) {
        console.log("Phương trình vô số no");
    }else{
       console.log("Phương trình vô no");
    }
}else{
    if(b==0){
        console.log("x=0");
    } else{
        console.log("x="+(-b/a));
    }
   
}

