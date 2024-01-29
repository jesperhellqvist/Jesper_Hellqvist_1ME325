/*
Dice är en constructor funktion som kan ses som en "klass" som representerar en tärning. Dice skapar en tärning med ett slumpat klassnamn tilldelas ett värde baserat på vilket klassnamn.  
*/


function Dice() {
    this.dice = document.createElement('li');
    this.value = 0;
    this.classNames = ['dice dice-side-one', 'dice dice-side-two', 'dice dice-side-three', 'dice dice-side-four', 'dice dice-side-five', 'dice dice-side-six'];


    /*
    Metoden addDie tar emot en parameter iform av en ul-lista där tärningarna ska placeras i. addDie lägger till tärningen i ul-listan och tilldelar tärningen ett slumpat klassnamn och ett värde baserat på klassnamnet.
    */


    this.addDie = function (ul) {


        var randomClassName = Math.floor(Math.random() * this.classNames.length); // Slumpar ett klassnamn

        this.dice.className = this.classNames[randomClassName]; // Tilldela slumpat klassnamn


        ul.appendChild(this.dice);

        switch (this.dice.className) {  // Tilldela slumpat värde beroende på classnamn
            case 'dice dice-side-one':
                this.value = 1;
                break;
            case 'dice dice-side-two':
                this.value = 2;
                break;
            case 'dice dice-side-three':
                this.value = 3;
                break;
            case 'dice dice-side-four':
                this.value = 4;
                break;
            case 'dice dice-side-five':
                this.value = 5;
                break;
            case 'dice dice-side-six':
                this.value = 6;
                break;
            default:
                this.value = 0;
                break;

        };
    };
};