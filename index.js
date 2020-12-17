console.log('Form Validation');
let isUserNameValid = false;
let isPhoneNumberValid = false;
let isUserEmailValid = false;
let isUserAddressValid = false;
let isUserCityValid = false;
let isUserStateValid = false;
let isUserPasswordValid = false;

let name = document.getElementById('userName');
name.addEventListener('blur', (element)=>{
    let userName = name.value;
    let regx = /^[a-zA-Z][a-zA-Z ]{2,20}$/;
    if(regx.test(userName)){
        console.log('Name is valid');
        isUserNameValid = true;
    }
    else{
        console.log('Name is not valid.');
    }
});

let email = document.getElementById('userEmail');
email.addEventListener('blur', (element)=>{
    let userEmail = email.value;
    let regx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(regx.test(userEmail)){
        console.log('Email is valid');
        isUserEmailValid = true;
    }
    else{
        console.log('Email is not valid.');
    }
});

let password = document.getElementById('userPassword');
password.addEventListener('blur', (element)=>{
    let userPassword = password.value;
    let regx = /^[a-zA-Z][a-zA-Z0-9 _*&^%$#@!]{6,18}$/;
    if(regx.test(userPassword)){
        console.log('Password is valid');
        isUserPasswordValid = true;
    }
    else{
        console.log('Password is not valid.');
    }
});

let phone = document.getElementById('userPhone');
phone.addEventListener('blur', (element)=>{
    let phoneNumber = phone.value;
    let regx = /^[0-9]{10}$/;
    if(regx.test(phoneNumber)){
        console.log('phone number is valid');
        isPhoneNumberValid = true;
    }
    else{
        console.log('phone number is not valid.');
    }
});

let address = document.getElementById('userAddress');
address.addEventListener('blur', (element)=>{
    let userAddress = address.value;
    let regx = /^[a-zA-Z0-9]{2,50}/;
    if(regx.test(userAddress)){
        console.log('Address is valid');
        isUserAddressValid = true;
    }
    else{
        console.log('Address is not valid.');
    }
});

let city = document.getElementById('userCity');
city.addEventListener('blur', (element)=>{
    let userCity = city.value;
    let regx = /^[a-zA-Z][a-zA-Z]{2,20}$/;
    if(regx.test(userCity)){
        console.log('City is valid');
        isUserCityValid = true;
    }
    else{
        console.log('City is not valid.');
    }
});

let state = document.getElementById('userState');
state.addEventListener('blur', (element)=>{
    let userState = state.value;
    let regx = /^[a-zA-Z][a-zA-Z ]{2,20}$/;
    if(regx.test(userState)){
        console.log('State is valid');
        isUserStateValid = true;
    }
    else{
        console.log('State is not valid.');
    }
});

let zip = document.getElementById('userPostalCode');
zip.addEventListener('blur', (element)=>{
    let userZip = zip.value;
    let regx = /^[0-9]{6}$/;
    if(regx.test(userZip)){
        console.log('Postal code is valid');
        isUserStateValid = true;
    }
    else{
        console.log('Postal code is not valid.');
    }
});

let signIn = document.getElementById('signInButton');
signIn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(isUserNameValid && isPhoneNumberValid && isUserEmailValid && isUserAddressValid && isUserCityValid && isUserStateValid && isUserPasswordValid){
        let massage = document.getElementById('massage');
        if(massage.classList.contains('alert-danger')){
            massage.classList.add('alert-danger');
        }
        massage.classList.add('alert-success');
        massage.innerHTML = `
            <h4 class="alert-heading">Congratulations</h4>
            <p>you have successfully registerted</p>
        `;
    }
    else{
        let massage = document.getElementById('massage');
        if(massage.classList.contains('alert-success')){
            massage.classList.add('alert-success');
        }
        massage.classList.add('alert-danger');
        massage.innerHTML = `
            <h4 class="alert-heading">Oops</h4>
            <p>Please check your details</p>
        `;
    }
});