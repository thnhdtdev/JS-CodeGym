/**
 * Viết hàm isLeapYear() nhận vào một số năm và kiếm tra xem đó có phải là năm nhuận hay không.
 * Nếu có, trả về true. Ngược lại, trả về false.
 * 
 * Ví dụ: 
 * isLeapYear(2016)
 * 
 * Output:
 * false
 *  */
function isLeapYear(year) {
    //nam chia het cho 4 nhung khong chia het 100 la nam nhuan hoac chia het cho 400
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return true;
    } else {
        return false;
    }

}
console.log(isLeapYear(2016));
console.log(isLeapYear(2024));