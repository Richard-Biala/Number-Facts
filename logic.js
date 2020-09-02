let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

const numberInput = document.querySelector("#numberInput");
numberInput.addEventListener('input', getFactFetch);



function getFactFetch (){
    let number = numberInput.value.toString();

    fetch('https://numbersapi.com/' +number +'/trivia?fragment')
        .then(response => response.text())
        .then(data => {
            if(number != ''){
                fact.style.display = 'block';
                factText.innerText = data;
            }
            ;
        })
        .catch(err => console.log(err))

}       

