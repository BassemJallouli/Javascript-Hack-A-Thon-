class Circle {

    constructor (r) {
        this.r=r;
    }

    getCirclePerimeter() { // calculate perimeter
        return Math.PI*2*this.r;
    }

    getCircleArea() { // calculate area
        return Math.pow(this.r,2)*Math.PI;
    }

}

let m = new Circle(7);
m.getCirclePerimeter();
m.getCircleArea();
console.log(m.getCirclePerimeter(), m.getCircleArea()); // display perimeter and area

console.log(new Circle(5).getCirclePerimeter(), new Circle(5).getCircleArea());