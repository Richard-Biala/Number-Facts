// let fact = document.querySelector('#fact');
// let factText = document.querySelector('#factText');

// const numberInput = document.querySelector("#numberInput");
// numberInput.addEventListener('input', getFactFetch);



// function getFactFetch (){
//     let number = numberInput.value;

//     fetch('http://numbersapi.com/' +number)
//         .then(response => response.text())
//         .then(data => {
//             if(number != ''){
//                 fact.style.display = 'block';
//                 factText.innerText = data;
//             }
//             ;
//         })
//         .catch(err => console.log(err))

// }       

let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');
var ready = (callback) => {
if (document.readyState != "loading") callback();
else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
let number = numberInput.value.toString() || '123'
    fetch('http://numbersapi.com/'+ number +'/trivia')
   .then(response => response.text())
        .then(data => {
            if(number != ''){
                fact.style.display = 'block';
                factText.innerText = data;
            }
            ;
        })
        .catch(err => console.log(err)) 
});