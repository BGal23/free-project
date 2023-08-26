const input = [
    ["a", "b", "c", "f"],
    ["c", "d", "f"],
    ["d", "f", "g"],
];

const output = input.flat().reduce((accumulator, currentValue) => {
    console.log(accumulator, currentValue)
    if (accumulator[currentValue]) {
        //console.log(accumulator[currentValue])
        accumulator[currentValue] += 1;
    } else {
        accumulator[currentValue] = 1;
    }
    return accumulator;
},{});

console.log(output)