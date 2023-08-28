const divBox = document.getElementById("list-app")
const text = document.createElement("p")
const ulList = document.createElement("ul")
const input = document.createElement("input")
const button = document.createElement("button")

text.innerHTML = "Click on the item to change the text, or click on the button to create a new item."
button.innerHTML = "Create New"

divBox.appendChild(text)
divBox.appendChild(ulList)
divBox.appendChild(input)
divBox.appendChild(button)

const addElement = () => {
    const liList = document.createElement("li")
    ulList.appendChild(liList)
    liList.innerHTML = input.value
}

button.addEventListener("click", addElement)