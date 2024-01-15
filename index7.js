let a=prompt("Nhap 1 so a bat ki");
let b=prompt("Nhap 1 so b bat ki");
let c=prompt("Nhap 1 so c bat ki");
if (a==0) {
    console.log("ket qua cua pt bac nhat la: " +(-c/b));
}else{
    console.log("Ket qua cua pt bac nhat la: " +(-c-a)/b);
}
if (b==0) {
    console.log("Ket qua cua pt bac nhat la: " +(-c/a));
}else{
    console.log("ket qua pt bac nhat la: " + (-c-b)/a);
}
if (c==0) {
    console.log("ket qua cua phuong trinh bac nhat la: " +(-b/a));
}else{
    console.log("ket qua cua phuong trinh bac nhat la: "+(c-b))
}
