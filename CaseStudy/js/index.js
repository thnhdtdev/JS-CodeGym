function validateForm() {
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var price = document.getElementById("price").value;
    var desc = document.getElementById("desc").value;

    if (id == "") {
        alert("ID is required");
        return false;
    }

    if (price < 0) {
        alert("Price must be positive number")
        return false;
    }

    if (name == "") {
        alert("Name is required");
        return false;
    }

    if (desc == "") {
        alert("Description is required");
        return false;
    }
    return true;
}

function showData() {
    var productList;
    if (localStorage.getItem("productList") == null) {
        productList = [];
    } else {
        productList = JSON.parse(localStorage.getItem("productList"))
    }

    var html = "";

    productList.forEach(function (product, index) {
        html += "<tr>";
        html += "<td>" + product.id + "</td>";
        html += "<td>" + product.name + "</td>";
        html += "<td>" + product.price + "</td>";
        html += "<td>" + product.desc + "</td>";
        html +=
            '<td><button onclick="deleteData(' +
            index +
            ')" class="btn btn-danger">Delete</button><button onclick="updateData(' +
            index +
            ')"class="btn btn-warning m-2">Edit</button></td>';
        html += "</tr>";
    });

    document.querySelector("#crudTable tbody").innerHTML = html;
}


document.onload = showData();

//check id da co trong localStorage hay chưa
function checkDuplicate(id) {
    var productList = JSON.parse(localStorage.getItem("productList")) || [];
    return productList.some(product => product.id === id);
}

// function thêm
function AddData() {
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var price = document.getElementById("price").value;
    var desc = document.getElementById("desc").value;

    if (validateForm() && !checkDuplicate(id)) {
        var productList = JSON.parse(localStorage.getItem("productList")) || [];
        productList.push({
            id: id,
            name: name,
            price: price,
            desc: desc,
        });

        localStorage.setItem("productList", JSON.stringify(productList));
        showData();
        document.getElementById("id").value = "";
        document.getElementById("name").value = "";
        document.getElementById("price").value = "";
        document.getElementById("desc").value = "";
    } else {
        alert("ID must be unique or all fields must be filled!");
    }
}


// function xóa
function deleteData(index) {
    var productList = JSON.parse(localStorage.getItem("productList")) || [];

    // Hiển thị thông báo xác nhận trước khi xóa
    var confirmation = confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");

    // Nếu người dùng chọn OK (đồng ý xóa), thực hiện xóa
    if (confirmation) {
        productList.splice(index, 1);

        localStorage.setItem("productList", JSON.stringify(productList));

        showData();
    }
}

// function update
function updateData(index) {

    document.getElementById("Submit").style.display = "none";
    document.getElementById("Update").style.display = "block";

    var productList;
    if (localStorage.getItem("productList") == null) {
        productList = [];
    } else {
        productList = JSON.parse(localStorage.getItem("productList"))
    }

    document.getElementById("id").value = productList[index].id;
    document.getElementById("name").value = productList[index].name;
    document.getElementById("price").value = productList[index].price;
    document.getElementById("desc").value = productList[index].desc;

    document.querySelector("#Update").onclick = function () {
        if (validateForm() == true) {
            productList[index].id = document.getElementById("id").value;
            productList[index].name = document.getElementById("name").value;
            productList[index].price = document.getElementById("price").value;
            productList[index].desc = document.getElementById("desc").value;

            localStorage.setItem("productList", JSON.stringify(productList));

            showData();

            document.getElementById("id").value = "";
            document.getElementById("name").value = "";
            document.getElementById("price").value = "";
            document.getElementById("desc").value = "";

            document.getElementById("Submit").style.display = "block";
            document.getElementById("Update").style.display = "none";
        }
    }

}


// function searchID
function searchID() {
    var searchValue = document.getElementById("search-id").value;
    var productList = JSON.parse(localStorage.getItem("productList")) || [];
    var foundProducts = [];

    //Nếu ô tìm kiếm không có gì thì sẽ là tất cả dữ liệu ban đầu
    if (searchValue.trim() === "") {
        showData();
        return;
    }

    // so sánh nếu ID nhập vào bằng với ID có trong localStorage
    for (var i = 0; i < productList.length; i++) {
        if (productList[i].id === searchValue) {
            foundProducts.push(productList[i]);
        }
    }

    displaySearchResults(foundProducts);
}

// function sau khi tìm thấy ID tương ứng thì nội dung sẽ xuất hiện ở crudTable
function displaySearchResults(results) {
    var tableBody = document.querySelector("#crudTable tbody");
    tableBody.innerHTML = "";

    // Nếu không có ID nào tương ứng thì sẽ alert 
    if (results.length === 0) {
        alert("Không tìm thấy sản phẩm có ID tương ứng.");
        return;
    }


    results.forEach(function (product) {
        var row = "<tr>" +
            "<td>" + product.id + "</td>" +
            "<td>" + product.name + "</td>" +
            "<td>" + product.price + "</td>" +
            "<td>" + product.desc + "</td>" +
            "<td>" +
            '<button onclick="deleteData(' + product.id + ')" class="btn btn-danger">Delete</button>' +
            '<button onclick="updateData(' + product.id + ')" class="class="btn btn-warning ">Edit</button>' +
            "</td>" +
            "</tr>";
        tableBody.innerHTML += row;
    });
}


