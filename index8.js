let a= +prompt("Nhap phep tinh thu nhat:");
let b= +prompt("Nhap phep tinh thu hai:");
let number=prompt("Nhap phep tinh");
if ( a >0  &&  b>0) {
    if (number=='+'){
        console.log(a+"+"+b+"="+(a+b));
    }else if (number=='-') {
        console.log(a+"-"+b+"="+(a-b));
    }else if (number=='/') {
        console.log(a+"/"+b+"="+(a/b));
    }else if (number=='*') {
        console.log(a+"*"+b+"="+(a*b));
    }else{
        console.log("Kh hợp lệ");
    }
}else{
    console.log("Kh hợp lệ");
    
}
