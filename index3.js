let number= +prompt("Mời bạn nhập 1 số ");
let a= Math.sqrt(number);
if (Number.isInteger(a)) {
    console.log("Là số chính phương" + a);
}else{
    console.log("Kh phải là số chính phương" + a);
}