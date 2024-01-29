/*
Li är en constructor funktion som skapar ett nytt li-element. Den tar en parameter className.
*/

/*
Parametrar:
className: är en sträng som innehåller ett klassnamn.
*/

function Li(className) {
    this.li = document.createElement('li');
    this.li.className = className || '';
};