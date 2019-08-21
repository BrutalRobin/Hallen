const button = document.getElementById('send');


//tjek input:text felt firstname
button.onclick = function() {
    const firstname = document.getElementById('firstname');
    if(firstname.value === '') {
        alert('Feltet Fulde navn må ikke være tomt!')
        firstname.focus();
        return false;
    }

    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
    }

    //tjek input:text felt nummer
    const number = document.getElementById('number');
    if(number.value === '') {
        alert('Feltet Telefon nummer må ikke være tomt!')
        number.focus();
        return false;
    }
    
           //tjekker om den kan blive sendt eller om der er fejl
           alert('formularen blev afsendt')
        }