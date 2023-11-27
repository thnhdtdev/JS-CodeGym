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
Vehicle1 = new Vehicle('Nguyen A', 'honda', '120', '12000000');
Vehicle1.showInfo();
