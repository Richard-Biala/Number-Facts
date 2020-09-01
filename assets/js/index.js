let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

const numberInput = document.querySelector("#numberInput");
numberInput.addEventListener('input', getFactAjax);

function getFactAjax(){
    let number = numberInput.value;

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://numbersapi.com/' +number);

    xhr.onload = function(){
        if(this.status == 200 && number != ''){
            console.log(this.responseText);
            fact.style.display = 'block';
            factText.innerText = this.responseText;
        }
    }

    xhr.send();
}
