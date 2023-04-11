
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

const url = 'http://vtech.booksapi/DSDonHang/vnpay_response';

// Query params cần truy vấn
const queryParams = { vnp_TxnRef: maHoaDon, vnp_Amount: (tien / 100), vnp_ResponseCode: isThanhCong };

// Tạo URL với Query Params
const urlWithQueryParams = new URL(url);
Object.keys(queryParams).forEach(key => urlWithQueryParams.searchParams.append(key, queryParams[key]));

// call api
fetch(urlWithQueryParams, { method: 'GET' })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to retrieve data because ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        // Xử lý dữ liệu được trả về từ server
    })
    .catch(error => {
        console.error('Error:', error);
        // Xử lý lỗi
    });


