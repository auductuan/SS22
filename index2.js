let a = prompt("Độ dài cạnh a là:");
let b = prompt("Độ dài cạnh b là:");
let c = prompt("Độ dài cạnh c là:");
if(a+b>c && a+c>b && b+c>a){
    console.log("Độ dài 3 cạnh đã hợp lệ");
}else{
    console.log("Độ dài nhập vào kh hợp lệ ");
}