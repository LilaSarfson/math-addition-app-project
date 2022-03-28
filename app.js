//generate random numbers
let firstNumber = parseInt(Math.random() * 10);
let secondNumber = parseInt(Math.random() * 10);

//get the total
let total = firstNumber + secondNumber;

//display numbers on the canvas
let primary = $('#primary-number');
primary.html(`<p>${firstNumber}</p>`);

let secondary = $('#secondary-number');
secondary.html(`<p>${secondNumber}</p>`);


//get guess from user
let button = $('#btn');

button.click(function () {

    let guess = $('#guess').val();
    guess = Number(guess);
    //check answer
    if (guess === total) {
        alert('Correct');
        window.location.reload()
    } else {
        alert('Sorry. Incorrect. The correct answer was ' + total + '.')
        window.location.reload()

    }
});

