const doubleChars = (value) => {
    let array = value.split("");
    let newArray = [];
    for (let i of array){
        newArray.push(i,i);
    }
    return newArray.join("")
}


doubleChars("Adrian");
doubleChars("ssssnake");