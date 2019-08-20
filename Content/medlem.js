const button = document.getElementById('send');



button.onclick = function() {
const firstname = document.getElementById('firstname');
if(firstname.value === '') {
    alert('Feltet Fulde navn må ikke være tomt!')
    firstname.focus();
    return false;
}
//tjek input:text felt email
const email = document.getElementById('email');
if(email.value === '') {
    alert('Feltet email må ikke være tomt!')
    email.focus();
    return false;
}

//tjek input:text felt nummer
const number = document.getElementById('number');
if(number.value === '') {
    alert('Feltet Telefon nummer må ikke være tomt!')
    number.focus();
    return false;
}

const adresse = document.getElementById('adresse');
if(adresse.value === '') {
    alert('Feltet adresse må ikke være tomt!')
    adresse.focus();
    return false;
}

const by = document.getElementById('by');
if(by.value === '') {
    alert('Feltet Postnummer og by må ikke være tomt!')
    by.focus();
    return false;
}

const medlemskab = document.getElementById('medlemskab');
if(medlemskab.value === '') {
    alert('Vælg Medlemskab')
    medlemskab.focus();
    return false;
}

//tjekker om den kan blive sendt eller om der er fejl
    alert('formularen blev afsendt')
}