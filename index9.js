let year = +prompt("Nhập 1 năm bất kì");
let month = +prompt("Nhập 1 tháng bất kì")   ;
if (year>0) {
    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            console.log("Đây là tháng có 31 ngày");
            break;
        case 2:
            console.log("Đây là tháng có 29 ngày");
            break;
        case 4: case 6: case 9: case 11:
            console.log("Đây là tháng có 30 ngày");
            break;
        default:
            console.log("Không hợp lệ")
            break;
    }
}else{
    console.log("không hợp lệ  ")
}