const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error massage
function showError(input, massage){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = massage;
}

//Show succes outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


function checkRequired(inputArr){
    inputArr.forEach(function(input){
        console.log(input.value);
    });
}

//Event Listener
form.addEventListener('submit', function(e){
    e.preventDefault();

   checkRequired([usernam, email, password, password2]);
  });