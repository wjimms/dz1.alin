const phoneInput = document.querySelector(".phoneInput");
const phoneCheck = document.querySelector(".phoneCheck");
const phoneResult = document.querySelector(".phoneResult");


const phoneRegExp = /^\ 011111\d{4}\d{4}$/;

phoneCheck.addEventListener("click", () => {

if(phoneRegExp.test(phoneInput.value)){
phoneResult.innerText = "ok";
phoneInput.style.border = '3px solid green';
} else {
phoneResult.innerText = "not ok";
phoneInput.style.border = '3px solid red';
}
} );