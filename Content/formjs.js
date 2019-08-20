const button = document.getElementById('send');


//tjek input:text felt firstname
button.onclick = function() {
    const firstname = document.getElementById('firstname');
    if(firstname.value === '') {
        alert('Feltet fornavn må ikke være tomt!')
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
    const antal = document.getElementById('antal');
    if(antal.value === '') {
        alert('Feltet Antal personer må ikke være tomt!')
        antal.focus();
        return false;
    }

    const bane = document.getElementById('bane');
    if(bane.value === '') {
        alert('Vælg bane')
        bane.focus();
        return false;
    }

    const antalbaner = document.getElementById('antalbaner');
    if(antalbaner.value === '') {
        alert('Vælg Antal Baner')
        antalbaner.focus();
        return false;
    }

    const date = document.getElementById('date');
    if(date.value === '') {
        alert('Vælg Dato')
        date.focus();
        return false;
    }

    //tjekker om den kan blive sendt eller om der er fejl
    alert('formularen blev afsendt')
}