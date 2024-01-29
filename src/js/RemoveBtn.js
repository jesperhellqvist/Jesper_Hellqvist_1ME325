/*
RemoveBtn är en constructor funktion som skapar en knapp som tar bort den senast tillagda tärningen i listan.
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


function RemoveBtn(parent, ul, counter, addBtn, audio) {
    this.wrapper = parent;
    this.ul = ul;
    this.counter = counter;
    this.addBtn = addBtn;
    this.audio = audio;
    this.removeBtn = new Li('remove', 'remove');

    /*
    Metoden addElements lägger till knappen i listan och kallar på metoden click som finns i Prototype.
    */

    this.addElements = function () {
        this.wrapper.appendChild(this.removeBtn.li);
        this.click();
    };

    this.addElements();
};


//-------------Metoder som ägs av "klassen" RemoveBtn men läggs till i Prototype-------------\\

/*
click är en metod som lägger på en händelselyssnare på knappen som sedan kollar om det finns tärningar i listan. Stämmer det så tas den sista tärningen bort från listan och från arrayen dices. Metoden kallar därefter på metoden checkDices och skickar med arrayen newListValue som argument. 
*/


RemoveBtn.prototype.click = function () {
    var self = this;
    

    this.removeBtn.li.addEventListener('click', function () {
        self.audio.play();
        var listDices = self.ul.getElementsByClassName('dice');
        var newListValue = self.addBtn.dices;
        
        if (newListValue.length > 0) {
            self.ul.removeChild(listDices[listDices.length - 1]); // Tar bort den sista tärningen i ul- listan.
            newListValue.pop();   // Tar bort den sista tärningen i arrayen newListValue.
            self.addBtn.checkDices(newListValue);
        };

    });
};