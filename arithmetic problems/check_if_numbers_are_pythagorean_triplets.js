function pythagoreanTripletOrNot(a, b, c) {
    if ((a ** 2 + b ** 2 === c ** 2) || (b ** 2 + c ** 2 === a ** 2) || (a ** 2 + c ** 2 === b ** 2)) {
        console.log(`${a},${b} and ${c} are pythagorean triplets`)
        return;
    }
        console.log(`${a}, ${b} and ${c} are not pythagorean triplets`);

}

pythagoreanTripletOrNot(3, 41, 5);