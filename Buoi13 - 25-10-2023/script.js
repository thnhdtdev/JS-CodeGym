let btnAction1 = document.getElementById('btn-submit');

btnAction1.addEventListener('click', () => {

    let time = parseInt(document.getElementById('giolam').value);
    let rank = parseFloat(document.getElementById('capbac').value);

    if (time > 400) {
        if (rank === 1) {
            alert('Donate 1000$ USD')
        } else if (rank === 2) {
            alert("Donet 2000$ USD")
        }
    } else {
        alert("Not Enough Time!!!")
    }
});