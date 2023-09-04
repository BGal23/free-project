const button = document.querySelector(".buttons-box");
const text = document.querySelector(".text")

const yourText = (event) => {
    if (event.target.nodeName !== "BUTTON") {
        return text.textContent = "";
    }
    switch (event.target.innerText) {
        case "First":
            color = "blue";
            font = "15px";
            break;
        case "Second":
            color = "red";
            font = "25px";
            break;
        case "Third":
            color = "green";
            font = "20px";
            break;
    }

    text.textContent = " " + event.target.innerText
    text.style.color = color;
    text.style.fontSize = font;
}

button.addEventListener("click", yourText)