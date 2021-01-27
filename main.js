const button = document.querySelectorAll('[data-number]')

let display = document.querySelector(".display")
display.innerHTML = "test"



let buttonsArray = document.querySelectorAll("button")
for (let key of buttonsArray) {
    key.addEventListener('click', event => {
        console.log(event.target);
        display.innerHTML = key;
    });

};


