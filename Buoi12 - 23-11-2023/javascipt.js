//Bai 1
let btnAction1 = document.getElementById('btn-action-1');

btnAction1.addEventListener('click', () => {

    let valueLength = parseFloat(document.getElementById('length').value);
    let valueWidth = parseFloat(document.getElementById('width').value);

    if (valueLength === valueWidth) {
        alert("day la hinh vuong")
    } else {
        alert("Day khong phai la hinh vuong")
    }
});

//Bai 2
let btnAction2 = document.getElementById("btn-action-2")

btnAction2.addEventListener('click', () => {

    let a = parseFloat(document.getElementById('number-a').value);
    let b = parseFloat(document.getElementById('number-b').value);

    if (a > b) {
        alert('A lon hon B')
    } else {
        alert('B lon hon A')
    }
});

//Bai3
let btnAction3 = document.getElementById("btn-action-3")

btnAction3.addEventListener('click', () => {

    let n = parseFloat(document.getElementById('n').value);
    let abs = Math.abs(n);

    alert("Gia tri tuyet doi cua " + n + " la " + abs);

});

//Bai4
let btnAction4 = document.getElementById("btn-action-4")

btnAction4.addEventListener('click', () => {

    let day = parseInt(document.getElementById('day').value);
    let result = '';

    switch (day) {
        case 2:
            result = 'Monday';
            break;
        case 3:
            result = 'Tuesday';
            break;
        case 4:
            result = 'Wednesday';
            break;
        case 5:
            result = 'Thurday';
            break;
        case 6:
            result = 'Friday';
            break;
        case 7:
            result = 'Saturday';
            break;
        case 8:
            result = 'Sunday';
            break;
        default:
            result = 'error!!!';
            break;
    }

    alert(result);

});

//Bai5
let btnAction5 = document.getElementById("btn-action-5")

btnAction5.addEventListener('click', () => {

    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let n3 = parseFloat(document.getElementById('n3').value);

    let max = n1;

    if (n2 > max) {
        max = n2;
    }
    if (n3 > max) {
        max = n3;
    }

    alert("So lon nhat la " + max)
    //console.log("%cSo lon nhat la:" + max, "color:red")

});



