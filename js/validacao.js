let email = document.getElementById("email");
let form = document.getElementById("contactForm");
let nameform = document.getElementById("name");
let phone = document.getElementById("phone");
let message = document.getElementById("message");
let btnLogin = document.getElementById("submitButton");
let recaptcha = document.getElementById("recaptcha");

form.addEventListener('submit', (e) => {

   let resultForm = checkForm();

  

    if (resultForm == false) {
        e.preventDefault();
    } else {
        setTimeout(userAction(), 500000)
        onSubmit(token);
    }
});

const userAction = async () => {
    const response = await fetch('https://api.staticforms.xyz/submit', {
      method: 'POST',
      body: myBody, // string or object
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
  }



function checkForm() {
    let emailValue = email.value;
    let nameValue = nameform.value;
    let phoneValue = phone.value;
    let messageValue = message.value;
    let emailValid = new RegExp('^[\\w\\.-]+@([\\w\\-]+\\.)+[A-Z]{2,4}$');

    if (nameValue === "") {
        document.querySelector(".invalid-name").classList.add("active");
        nameform.focus();
        return "";
    }
    else{
        document.querySelector(".invalid-name").classList.remove("active");
    }

    if (emailValue === "") {
        document.querySelector(".invalid-mail1").classList.add("active");
        email.focus();
        return "";
    } else if (!emailValue == emailValid ) {
        document.querySelector(".invalid-mail2").classList.add("active");
        email.focus();
        return "";
    }
    else{
        document.querySelector(".invalid-mail1").classList.remove("active");
    }

    if (phoneValue === "") {
        document.querySelector(".invalid-phone").classList.add("active");
        phone.focus();
        return "";
    }
    else{
            document.querySelector(".invalid-phone").classList.remove("active");
    }

    if (messageValue === "") {
        document.querySelector(".invalid-message").classList.add("active");
        message.focus();
        return "";
    }
    else{
        document.querySelector(".invalid-message").classList.remove("active");
    }

    if (!recaptcha.isChecked()) {
        document.querySelector(".invalid-recaptcha").classList.add("active");
        message.focus();
        return "";
    }
    else{
        document.querySelector(".invalid-recaptcha").classList.remove("active");
    }
    
    return true;
    
}

function onSubmit(token) {
    document.getElementById("contactForm").submit();
}
