/**
 * Viết hàm calcFactorial() nhận vào một số nguyên và trả về giá trị giai thừa của số nguyên đó
 * 
 * Ví dụ: 
 * calcFactorial(4)
 * 
 * Output:
 * 24
 *  
 * */

function calcFactorial(number) {
    if (number < 0) {
        console.log("Khong the tinh giai thua so am")
    } else {
        let result = 1;
        for (let i = 2; i <= number; i++) {
            console.log({ i });
            result = result * i;
        }
        return result;
    }
}

console.log(calcFactorial(4));
