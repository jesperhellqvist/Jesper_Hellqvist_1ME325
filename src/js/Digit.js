/*
Digit är constructor funktion som skapar en ny instans av Li och ska representera en enskilld siffra i räknaren som finns i toolBaren.
*/



function Digit() {
    this.li = document.createElement('li');
    this.li.className = 'zero';


    /*
    Metoden setDigit tar emot ett värde (value) som kan vara mellan 0-9 och som sedan sätter klassen på li-elementet beroende på vilken siffra som skickas in. Classnamnet avgör vilken siffra som visas i räknaren.
    */


    this.setDigit = function (value) {
        switch (value) {
            case 0:
                this.li.className = 'zero';
                break;
            case 1:
                this.li.className = 'one';
                break;
            case 2:
                this.li.className = 'two';
                break;
            case 3:
                this.li.className = 'three';
                break;
            case 4:
                this.li.className = 'four';
                break;
            case 5:
                this.li.className = 'five';
                break;
            case 6:
                this.li.className = 'six';
                break;
            case 7:
                this.li.className = 'seven';
                break;
            case 8:
                this.li.className = 'eight';
                break;
            case 9:
                this.li.className = 'nine';
                break;
            default:
                this.li.className = 'zero';
                break;
        };
    };

};