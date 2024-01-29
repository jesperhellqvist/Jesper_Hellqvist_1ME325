/*
AddBtn är en constructor funktion som skapar en knapp som lägger till en tärning i listan.
Funktionen tar emot 4 parametrar: parent, ul, counter och audio.
*/

/*
Parametrar:
parent: är en referens till den ul-lista som knappen ska läggas till i.
ul: är en referens till den ul-lista som tärningarna ska läggas till i.
counter: är en referens till en instans av Counter för att kunna komma åt metoder som ägs av "klassen" Counter.
audio: är en referens till en instans av Audio för att kunna komma åt metoder som ägs av "klassen" Audio.
*/



function AddBtn(parent, ul, counter, audio) {
    this.wrapper = parent;
    this.addBtn = new Li('add', 'add');  // Skapar en instans av Li som ska användas som knapp.
    this.ul = ul;
    this.dices = [];  // Array som ska innehålla alla tärningar som skapas för att sedan beräkan värdet på alla tärningar.
    this.counter = counter;
    this.audio = audio;
    
    
    /*
    Metoden addElements lägger till knappen i listan och kallar på metoden click som finns i Prototype.
    */

    this.addElements = function () {
        this.wrapper.appendChild(this.addBtn.li);
        this.click();
    };


    this.addElements();
};


//-------------Metoder som ägs av "klassen" AddBtn men läggs till i Prototype-------------\\

/*
click är en metod som lägger på en händelsehanterare på knappen som sedan kollar om det finns mindre än 40 tärningar i arrayen dices. Stämmer det så skapas en ny tärning och läggs till i listan. Metoden kallar därefter på metoden checkDices och skickar med arrayen dices som argument. 
*/

AddBtn.prototype.click = function () {
    var self = this;   // Binder this till en variabel så att den kan användas i en anonym funktion.

    this.addBtn.li.addEventListener('click', function () {
        self.audio.play();

        if (self.dices.length < 40) {
            var dice = new Dice();
            dice.addDie(self.ul); // Lägger till tärningen i ul-listan.
            self.dices.push(dice); // Lägger till tärningen i arrayen.
        };
        
        self.checkDices(self.dices);
    });
};


/*
checkDices är en metod som tar emot en array som parameter. Metoden loopar igenom arrayen och lägger ihop alla tärningars värde och skickar sedan summan till Counter och metoden setValue.
*/

AddBtn.prototype.checkDices = function (dices) {
    var sum = 0;
    for (var i = 0; i < dices.length; i++) {
        sum += dices[i].value;
    };
    
    this.counter.setValue(sum);

};