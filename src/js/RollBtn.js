/*
RollBtn är en constructor funktion som skapar en knapp som kastar om tärningarna som finns presenterade och ger dem nya slumpade värden.
Funktionen tar emot 5 parametrar: parent, ul, counter, addBtn och audio.
*/

/*
Parametrar:
parent: är en referens till den ul-lista som knappen ska läggas till i.
ul: är en referens till den ul-lista som tärningarna ska läggas till i.
counter: är en referens till en instans av Counter för att kunna komma åt metoder som ägs av "klassen" Counter.
addBtn: är en referens till en instans av AddBtn för att kunna komma åt metoder som ägs av "klassen" AddBtn.
audio: är en referens till en instans av Audio för att kunna komma åt metoder som ägs av "klassen" Audio.
*/

function RollBtn(parent, ul, counter, addBtn, audio) {
    this.wrapper = parent;
    this.ul = ul;
    this.counter = counter;
    this.addBtn = addBtn;
    this.audio = audio;
    this.rollBtn = new Li('roll', 'roll');

    /*
    Metoden addElements lägger till knappen i listan och kallar på metoden click som finns i Prototype.
    */

    this.addElements = function () {
        this.wrapper.appendChild(this.rollBtn.li);
        this.click();
    };

    this.addElements();
};


//-------------Metoder som ägs av "klassen" RollBtn men läggs till i Prototype-------------\\

/*
click är en metod som lägger på en händelselyssnare på knappen som sedan hämtar alla tärningar som finns i ul-listan och ger dem nya slumpade värden. Metoden kallar därefter på metoden checkDices och skickar med arrayen newListValue som argument.
*/


RollBtn.prototype.click = function () {
    var self = this;

    this.rollBtn.li.addEventListener('click', function () {
        self.audio.play();
        var listDices = self.ul.getElementsByClassName('dice');
        var classNames = ['dice dice-side-one', 'dice dice-side-two', 'dice dice-side-three', 'dice dice-side-four', 'dice dice-side-five', 'dice dice-side-six'];

        var newListValue = self.addBtn.dices;

        for (var i = 0; i < listDices.length; i++) {
            var randomClassName = Math.floor(Math.random() * classNames.length);
            listDices[i].className = classNames[randomClassName];
            newListValue[i].value = randomClassName + 1; // Tilldela slumpat värde beroende på classnamn
        };

        self.addBtn.checkDices(newListValue);
    });
};