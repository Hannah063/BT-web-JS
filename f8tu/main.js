//alert('Hi my name is Ho Thi Huyen!!!')//hiện một thông báo
var fullName = 'Ho Thi Huyen';//khai báo biến
var age = 19;
console.log(fullName) //in ra dòng chữ thông báo
console.warn(age) //in ra dòng cảnh báo
console.error(fullName) //in ra lỗi

confirm('Xác nhận đủ tuổi!');//hộp thoại xác nhận

prompt('Xac nhan du tuoi');//hộp thoại + ô input

setTimeout(function() {
    alert('huyen')/*function */
}, 1000 /*time*/)   //cho chạy sau 1 khoảng time (ms)

setInterval//chạy đoạn code sau 1 khoảng time và lặp đi lặp lại