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
    alert('Venligst brug en rigtig email');
    email.focus;
    return false;
    }

    //tjek input:text felt nummer
    const number = document.getElementById('number');
    var val = number.value
    if (/^\d{8}$/.test(val)) {
        // value is ok, use it
    } else {
        alert("Forkert nummer, nummeret skal være 8 tal")
        number.focus()
        return false
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

    const time = document.getElementById('time');
    if(time.value === '') {
        alert('Vælg tidspunkt')
        time.focus();
        return false;
    }

           //tjekker om den kan blive sendt eller om der er fejl
           alert('formularen blev afsendt')
}