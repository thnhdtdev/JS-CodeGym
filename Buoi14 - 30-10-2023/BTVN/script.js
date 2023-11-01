//Bai 1
// for (let i = 1500; i <= 2700; i++) {
//     if (i % 5 === 0 && i % 7 === 0) {
//         console.log();
//     }
// }

//-----------------------------------------------//
//Bai 2
let btnAction1 = document.getElementById('btn-1');

btnAction1.addEventListener('click', () => {

    let n = parseInt(document.getElementById('soNguyenN').value);

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0) {
            console.log("java")
        } else if (i % 7 === 0) {
            console.log("script")
        } else if (i % 3 === 0 && i % 7 === 0) {
            console.log("javascript")
        } else {
            console.log(i);
        }
    }
});

//-----------------------------------------------//
//Bai3
let btnAction2 = document.getElementById('btn-2');

btnAction2.addEventListener('click', () => {

    let chieuCao = parseInt(document.getElementById('chieuCao').value);

    for (let i = chieuCao; i >= 1; i--) {
        let hang = '';
        for (let j = 1; j <= i; j++) {
            hang += '*';
        }
        console.log(hang);
    }
})

//-----------------------------------------------//
//Bai 5
let btnAction5 = document.getElementById('btn-5');

btnAction5.addEventListener('click', () => {

    let soNguyenTo = parseInt(document.getElementById('soNguyenTo').value);

    function isPrime(number) {
        if (number <= 1) {
            return false;
        }
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }


    if (isPrime(soNguyenTo)) {
        console.log(+ soNguyenTo + ' là số nguyên tố.');
    } else {
        console.log(+ soNguyenTo + ' không là số nguyên tố.');
    }
})





