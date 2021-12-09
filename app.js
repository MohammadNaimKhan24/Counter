// set initial count
let count = 0;

// set value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (item) {
    item.addEventListener('click', function (e) {
        const style = e.currentTarget.classList;
        if (style.contains('decrease')) {
            count--;
        }
        else if (style.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }
        value.textContent = count;
        // select the color
        if (count > 0) {
            value.style.color = "green";
        }
        else if (count < 0) {
            value.style.color = "red";
        }
        if (count == 0) {
            value.style.color = "#222";
        }
    })
})
