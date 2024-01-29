/*
Här skapas en constructor funktion som ska skapa ett nytt Div-element. Den tar en parameter className.
*/

/*  
Parametrar:
className: är en sträng som innehåller ett klassnamn.
*/

function Div(className) {
    this.div = document.createElement('div');
    this.div.className = className || '';
};