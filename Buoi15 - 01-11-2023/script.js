//Bai1
let btnAction1 = document.getElementById('btn1');

btnAction1.addEventListener("click", () => {

    let soNguyenN = parseInt(document.getElementById("number1").value);

    let i = 0;
    let tongChan = 0;

    while (i <= soNguyenN) {
        if (i % 2 === 0) {
            tongChan = tongChan + i;
        }
        i++;
    }
    console.log("Tổng các số chẵn từ 0 đến " + soNguyenN + " là " + tongChan + "");
});

//--------------------------------------------------------------------------//
//Bai2

let btnAction2 = document.getElementById('btn2');

btnAction2.addEventListener("click", () => {

    let soNguyenN = parseInt(document.getElementById("number2").value);

    let i = 1;
    let giaiThua = 1;

    while (i <= soNguyenN) {
        giaiThua = giaiThua * i;
        i++;
    }
    console.log(+soNguyenN + "! = " + giaiThua + "");
});

//--------------------------------------------------------------------------//
//Bai3

//--------------------------------------------------------------------------//
//Bai4
let btnAction4 = document.getElementById('btn4');

btnAction4.addEventListener("click", () => {

    let soNguyenN = parseInt(document.getElementById("number4").value);

    let i = 1;
    let cuuChuong = 9;

    while (i <= cuuChuong) {
        let tich = soNguyenN * i;
        console.log(+soNguyenN + " x " + i + " = " + tich + "")
        i++
    }
});

//--------------------------------------------------------------------------//
//Bai5

let btnAction5 = document.getElementById('btn5');

btnAction5.addEventListener("click", () => {

    let soNguyenN = parseInt(document.getElementById("number5").value);

    let i = 1;
    let tongUocSo = 0;

    while (i < soNguyenN) {
        if (soNguyenN % i === 0) {
            tongUocSo = tongUocSo + i;
        }
        i++;
    }

    if (tongUocSo === soNguyenN) {
        console.log(+soNguyenN + " la mot so hoan hao");
    } else {
        console.log(+soNguyenN + " khong la mot so hoan hao");

    }
});