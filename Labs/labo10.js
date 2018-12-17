function exchange(bedrag, valuta) {
    valuta = document.getElementById("valuta").selectedIndex;
    if(valuta == 0) {
        bedrag * euro_dollarkoers();        
    } else if(valuta == 1) {
        bedrag * dollar_eurokoers();
    } else if(valuta == 2) {
        bedrag * euro_roebelkoers();
    } else {
        bedrag * roebel_eurokoers();
    }

}

function euro_dollarkoers() {
    return(1.36);
}

function dollar_eurokoers() {
    return(0.74);
}

function euro_roebelkoers() {
    return(48.40);
}

function roebel_eurokoers() {
    return(0.02);
}