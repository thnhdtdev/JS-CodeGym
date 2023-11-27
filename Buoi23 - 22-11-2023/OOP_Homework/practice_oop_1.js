/**
 * Hãy tạo một lớp `Rectangle` gồm có:
 * - Thuộc tính: chiều dài, chiều rộng hình chữ nhật
 * - Constructor nhận vào các thông tin khởi tạo thuộc tính
 * - Phương thức tính diện tích, chu vi
 * - Phương thức showInfo() log ra các thông tin dài, rộng,
 * diện tích, chu vi
 * 
 * Tạo ra các object hình chữ nhật từ Class Rectangle và
 * in ra thông tin của các object vừa tạo
 */class Rectangle {

    constructor(dai, rong) {
        this.dai = dai;
        this.rong = rong;
    }

    chuVi() {
        return (this.dai + this.rong) * 2;
    }

    dienTich() {
        return this.dai * this.rong;
    }

    showInfo() {
        console.log(`Chieu dai: ${this.dai}`);
        console.log(`Chieu rong: ${this.rong}`);
        console.log(`Chu vi: ${this.chuVi()}`);
        console.log(`Dien tich: ${this.dienTich()}`);
    }
}

hcn = new Rectangle(5, 3)
hcn.showInfo();