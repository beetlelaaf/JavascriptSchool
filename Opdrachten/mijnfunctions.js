function begroeting() {
    today = new Date();
    hours = today.getHours();
    if(hours >= 0 && hours < 12) {
        document.write('<br>Goedemorgen!');
    } else if(hours >= 12 && hours < 18) {
        document.write('<br>Goedemiddag!');
    } else {
        document.write('<br>Goedenavond!');
    }
}

function afmelden() {
    var antwoord = confirm('Wilt u zich afmelden?');
    if(antwoord == true) {
        alert('U word afgemeld!!!');
    }
}

function dollarkoers() {
    return(1.36);
}

function eurokoers() {
    return(0.74);
}

function dollar_naar_euro(dollars) {
    return(dollars * eurokoers());
}

function wissel(bedrag, valuta) {
    if(valuta == 'euro') {
        return(bedrag * dollarkoers());
    } else if(valuta == 'dollar') {
        return(bedrag * eurokoers());
    }
}