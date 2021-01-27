let buttonsArray = document.querySelectorAll("button")
for (let key of buttonsArray) {
    key.addEventListener('click', event => {
        console.log(event.target)
    })

}




// let buttons = document.querySelectorAll("button")
// console.log(buttons)