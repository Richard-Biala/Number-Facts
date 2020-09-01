let fact = document.querySelector('#fact');
let factText = document.querySelector('#fact-text');

const numberInput = document.querySelector("#numberInput");
numberInput.addEventListener('input', getFactAjax);

function getFactAjax(){
    let number = numberInput.value;
    console.log(number);
}
