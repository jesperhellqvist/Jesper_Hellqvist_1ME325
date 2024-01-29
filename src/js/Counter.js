/*
Counter är en constructor funktion som skapar en counter-behållare i form av en ny instans av Ul, därefter skapas en tom Array "digits" där 5 instanser av "klassen" Digits pushas in. Detta är den grafiska representationen av räknaren. Counter tar emot 1 parameter: parent. 
*/

/*
Parametrar:
parent: är en referens till det li-element som räknaren ska läggas till i.
*/

function Counter(parent) {
    this.wrapper = parent;
    this.counterWrapper = new Ul('dice-toolbar-counter-wrapper');
    this.digits = [];

    /*
    Metoden addElements lägger till räknaren i li-elementet som finns i egenskapen this.wrapper.
    Därefter skapas 5 instanser av "klassen" Digits som pushas in i Arrayen this.digits.
    */


    this.addElements = function () {
        this.wrapper.appendChild(this.counterWrapper.ul);

        for (var i = 0; i < 5; i++) {
            this.digits.push(new Digit());
            this.counterWrapper.ul.appendChild(this.digits[i].li);
        };
    };

    this.addElements();

};


//-------------Metoder som ägs av "klassen" Counter men läggs till i Prototype-------------\\


/*
Metoden setValue tar emot ett värde (value) som sedan konverteras till en sträng. Därefter räknas längden ut och ett startindex räknas ut för att kunna fylla digitsen från höger till vänster. Metoden nollställer alla digits för tärningarna som inte finns längre och uppdaterar sedan digit-elementen från höger till vänster för de nuvarande tärningarna. SetDigit är en metod som ägs av "klassen" Digits och används för att uppdatera digit-elementen.
*/

Counter.prototype.setValue = function (value) {
    var value = value.toString(); // Konvertera till sträng för att kunna komma åt length.
    var startingIndex = 5 - value.length; 

    // Nollställ alla digits för varje gång metoden anropas.
    for (var i = 0; i < startingIndex; i++) {
        this.digits[i].setDigit(0);
    };

    // Skickar en siffra i taget till setDigit, this.digits[j] pekar på vilken digit som ska uppdateras.
    for (var j = startingIndex; j < 5; j++) {
        this.digits[j].setDigit(parseInt(value[j - startingIndex]));
    };
};

