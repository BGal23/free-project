function filterArray(numbers, value) {

    let i;
    for (i = 0; value > numbers[i]; i++) {
        i;
    }
    let c = [];
    for (i; i < numbers.length; i++) {
        c.push(numbers[i]);
    }
    console.log(c);
}


filterArray([12, 24, 8, 41, 76], 20);