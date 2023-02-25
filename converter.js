const input = document.querySelector('input');
// console.log(input);
const convertFrom = document.querySelector('#from');
// console.log(convertFrom.value);
const convertTo = document.getElementById('to');
// console.log(convertTo);
const submitButton = document.querySelector('.submit');
// console.log(submitButton);
const clearButton = document.querySelector('.clear');
// console.log(clearButton);
let degrees;
const output = document.querySelector('.output')

function convertTemperature() {
    let parsedInput = parseInt(input.value)
    if(convertFrom.value === 'c' && convertTo.value === 'f') {
        degrees = parsedInput * 1.8 + 32;
    } else if(convertFrom.value === 'f' && convertTo.value === 'c') {
        degrees = (parsedInput - 32) / 1.8;
    } else if(convertFrom.value === 'c' && convertTo.value === 'k') {
        degrees = parsedInput + 273.15;
    } else if(convertFrom.value === 'f' && convertTo.value === 'k') {
        degrees = (parsedInput - 32) * 5/9 + 273.15;
    } else if(convertFrom.value === convertTo.value) {
        return output.innerHTML = "Why are you the way you are?"
    } else if(convertFrom.value = 'k' && convertTo.value === 'c') {
        degrees = parsedInput - 273.15;
    } else if(convertFrom.value = 'k' && convertTo.value === 'f') {
        degrees = (parsedInput - 273.15) * 1.8 + 32;
    }
    // console.log(degrees);
    output.innerHTML = `Converting ${parsedInput}°${convertFrom.value.toUpperCase()} into ${convertTo.value.toUpperCase()} would be ${degrees.toFixed(3)}°${convertTo.value.toUpperCase()}`;
    if(parsedInput < 32 && convertFrom.value === 'f') {
        output.style.backgroundColor = 'blue'
    } else if(parsedInput > 100) {
        output.classList.add('boiling')
    }
}

submitButton.addEventListener('click', convertTemperature)
clearButton.addEventListener('click', () => {
    input.value = '';
})