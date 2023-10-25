function triangleType(x, y, z) {
    if (x === y &&y === z) {
        console.log("equilateral triangle");
    } else if (x === y || y === z || x === z) {
        console.log("isosceles triangle");
    } else {
        console.log("scalene triangle");
    }
}

triangleType(30, 10, 20);