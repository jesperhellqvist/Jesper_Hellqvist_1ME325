/*
CloseBtn är en constructor funktion som skapar en instans av Div som ska fungera som stängknapp till tärningsfönstret. CloseBtn tar emot 2 parametrar: parent och divWindow.
*/

/*
Parametrar:
parent: är en referens till den div som stängknappen ska läggas till i.
divWindow: är en referens till den div som representerar tärningsfönstret.
*/


function CloseBtn(parent, divWindow) {
    this.menuWrapper = parent;
    this.divWindow = divWindow;
    this.contentWrapper = document.getElementById('page-content-wrapper');
    this.closeBtn = new Div('close');
    
    /*
    Metoden addElements lägger till stängknappen i menuWrapper och kallar sedan på metoden click som finns i Prototype.
    */

    this.addElements = function () {
        this.menuWrapper.appendChild(this.closeBtn.div);
        this.click();
    };

    this.addElements();

};


//-------------Metoder som ägs av "klassen" CloseBtn men läggs till i Prototype-------------\\

/*
Metoden click lägger på en händelselyssnare "click" på stängknappen och med hjälp av en anonym funktion som tar bort tärningsfönstret från contentWrapper.
*/


CloseBtn.prototype.click = function () {
    var self = this;

    this.closeBtn.div.addEventListener('click', function () {
        self.contentWrapper.removeChild(self.divWindow);
    }
    );
};
