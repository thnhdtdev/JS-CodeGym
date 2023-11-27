class Car {
    // carName = 'MEC C200';
    // brandName = 'MEC';
    // carColor = 'black';

    constructor(name, brand, color) {
        this.name = name;
        this.brand = brand;
        this.color = color;
    }

    moveFoward() {
        console.log("Lorem is sum");
    }
    introduce() {
        console.log(`Ten xe: ${this.name}`);
        console.log(`Hang xe: ${this.brand}`);
        console.log(`Mau xe: ${this.color}`);
    }
}

car1 = new Car('mec s650', 'mec', 'black');
car1.introduce();
