function signup(e) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var confirmpass = document.getElementById("confirm_pass").value;

    var user = {
        username: username,
        email: email,
        pass: pass,
        confirmpass: confirmpass,
    }

    //them vao localStorage
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert("Dang ky thanh cong")
}

function login(e) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;

    var user = localStorage.getItem(username);
    var data = JSON.parse(user);

    if (user == null) {
        alert("Vui long nhap lai. Co the ban da sai TK/MK");
    } else if (username == data.username && email == data.email && pass == data.pass) {
        alert("Dang nhap thanh cong");
        window.location.href = "index.html"
    } else {
        alert("Dang nhap that bai");
    }
}



