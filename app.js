
function getQueryParam(param) {
    var urlParams = new URLSearchParams(window.location.search); // Lấy tất cả params từ URL
    return urlParams.get(param); // Lấy param cần tìm và trả về giá trị
}

var tien = getQueryParam('vnp_Amount');
var maHoaDon = getQueryParam('vnp_TxnRef');
var isThanhCong = getQueryParam('vnp_ResponseCode');
var isThanhCong2 = getQueryParam('vnp_TransactionStatus');

document.getElementById('tongTien').innerHTML = (tien / 100) + ' đ';
document.getElementById('donHang').innerHTML = maHoaDon;

if (isThanhCong == '00' || isThanhCong2 == '00') {
    document.getElementById('status').innerHTML = 'Thanh toán thành công';
    document.getElementById('status').style.color = "green";
} else {
    document.getElementById('status').innerHTML = 'Thanh toán không thành công';
    document.getElementById('status').style.color = "red";
}
console.log(maHoaDon);
