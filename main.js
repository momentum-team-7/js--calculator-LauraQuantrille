// const button = document.querySelectorAll('[data-number]')

let display = document.querySelector(".display")
display.innerHTML = ""



let buttonsArray = document.querySelectorAll("button")
for (let key of buttonsArray) {
    key.addEventListener('click', event => {
        if (event.target.innerHTML === '=') {
            console.log(display.innerHTML)
            display.innerHTML = eval(display.innerHTML);
        }
        else if (event.target.innerHTML === 'C') {
            display.innerHTML = ' '
        }
        else if (display.innerHTML === '0' && event.target.innerHTML === '0') {
            display.innerHTML = '0'
        }
        else if (event.target.innerHTML === 'X') {
            display.innerHTML = [display.innerHTML, '*'].join('');
        }
        else {
            display.innerHTML = [display.innerHTML, event.target.innerHTML].join('');
        }






        // display.innerHTML = [display.innerHTML, event.target.innerHTML].join('')

        // console.log(event.target.innerText);

    });
}
