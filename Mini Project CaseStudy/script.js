/**
 * Sở giao thông cần theo dõi việc đăng ký xe của người dân.
 * Dựa vào dung tích xylanh của xe, sở giao thông sẽ tính
 * mức thuế phải đóng trước bạ khi mua xe như sau:
 * 
 * - Dưới 100cc, 1% giá trị của xe
 * - Từ 100 đến 200 cc, 3% giá trị của xe
 * - Trên 20cc, 5% giá trị của xe
 * 
 * Hãy thiết kế class `Vehicle` với các thông tin như sau:
 * - Thuộc tính: tên chủ xe, loại xe, dung tích, trị giá
 * - Constructor khởi tạo các thuộc tính thông qua params
 * - Hàm tính giá trị thuế trước bạ dựa vào dung tích xylanh
 * - Hàm showInfo in ra các thông tin của xe: tên chủ xe,
 * loại xe, dung tích, trị giá, thuế phải nộp
 * 
 * Khởi tạo các đối tượng Vehicle và in ra các thông tin
 * tương ứng của các đội tượng được khởi tạo
 */

class Vehicle {
    constructor(tenChuXe, loaiXe, dungtich, triGia) {
        this.tenChuXe = tenChuXe;
        this.loaiXe = loaiXe;
        this.dungtich = dungtich;
        this.triGia = triGia;
    }
    thue() {
        if (this.dungtich < 100) {
            return this.triGia * 0.01;
        } else if (100 < this.dungtich < 200) {
            return this.triGia * 0.03;
        } else if (this.dungtich > 20) {
            return this.triGia * 0.05;
        }
    }

    showInfo() {
        console.log(`Ten chu xe: ${this.tenChuXe}`);
        console.log(`Loai xe: ${this.loaiXe}`);
        console.log(`Dung tich: ${this.dungtich}`);
        console.log(`triGia: ${this.triGia}`);
        console.log(`Thue: ${this.thue()}`);
    }
}

//nguoi dung nhap data tren web
function addVehicle() {
    let ownerName = document.getElementById("owner-name").value;
    let vehicleType = document.getElementById("vehicle-type").value;
    let cylinderCapacity = document.getElementById("cyliner-capacity").value;
    let cost = document.getElementById("cost").value;

    //tao mot xe moi tu front end
    let newVehicle = new Vehicle(ownerName, vehicleType, cylinderCapacity, cost);

    //them newVehicle vao mot mang vehicleArr data
    vehicleArr.push(newVehicle);

    alert("Vehicle is added succesfully!");
    console.log(vehicleArr);

    updateTable(vehicleArr);
}

let vehicleArr = [];

//update table
function updateTable(data) {
    let tableElem = document.getElementById("vehicle-table");
    tableElem.remove();

    //create new table again
    let newTableElem = document.createElement("table");

    //set id
    newTableElem.setAttribute("id", "vehicle-table");

    //create heading row
    let newRowElem = document.createElement("tr");
    let heading1 = document.createElement("th");
    let heading2 = document.createElement("th");
    let heading3 = document.createElement("th");
    let heading4 = document.createElement("th");
    let heading5 = document.createElement("th");
    let heading6 = document.createElement("th");

    heading1.innerText = "No."
    heading2.innerText = "Owner Name."
    heading3.innerText = "Verhicle Type"
    heading4.innerText = "Cylinder Capacity"
    heading5.innerText = "Cost"
    heading6.innerText = "Tax Value"

    newRowElem.appendChild(heading1);
    newRowElem.appendChild(heading2);
    newRowElem.appendChild(heading3);
    newRowElem.appendChild(heading4);
    newRowElem.appendChild(heading5);
    newRowElem.appendChild(heading6);

    //append row to table
    newTableElem.appendChild(newRowElem);

    //add data row
    for (let i in data) {
        let vehicle = data[i];
        newRowElem = document.createElement("tr");
        let info1 = document.createElement("td");
        let info2 = document.createElement("td");
        let info3 = document.createElement("td");
        let info4 = document.createElement("td");
        let info5 = document.createElement("td");
        let info6 = document.createElement("td");

        info1.innerText = i;
        info2.innerText = vehicle.tenChuXe;
        info3.innerText = vehicle.loaiXe;
        info4.innerText = vehicle.dungtich;
        info5.innerText = vehicle.triGia;
        info6.innerText = vehicle.thue();

        newRowElem.appendChild(info1);
        newRowElem.appendChild(info2);
        newRowElem.appendChild(info3);
        newRowElem.appendChild(info4);
        newRowElem.appendChild(info5);
        newRowElem.appendChild(info6);

        //
        newTableElem.appendChild(newRowElem);

    }
    document.body.appendChild(newTableElem);
}