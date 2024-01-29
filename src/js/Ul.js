/*
Ul är en constructor funktion som skapar ett ul-element och tar emot en parameter i form av ett klassnamn som tilldelas ul-elementet.
 */


function Ul(className) {
    this.ul = document.createElement('ul');
    this.ul.className = className || '';
};