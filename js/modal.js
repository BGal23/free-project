const everyList = document.querySelectorAll('ul')


everyList.forEach((element)=> {
    element.firstElementChild.innerHTML = "First"
    element.lastElementChild.innerHTML = "Last"
})
