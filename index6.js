let a= prompt("Nhập 1 số bất kì có 4 chữ số ");
if (a.length !== 4 || isNaN(a)) {
    console.log("Vui lòng nhập số có 4 chữ số ")
}else{
    console.log("Chữ số hàng nghìn" +a[0]);
    console.log("Chữ số hàng trăm" +a[1]);
    console.log("Chữ số hàng chục" +a[2]);
    console.log("Chữ số hàng đơn vị" +a[3]);
}