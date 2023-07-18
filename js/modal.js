function getCommonElements(array1, array2) {
    let tab = [];
    for (let i = 0; i < array2.length; i++) {
        if (array1.includes(array2[i])) {
        tab.push(array2[i]);
        console.log(tab);
        }
    }
    return tab;
}

getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);