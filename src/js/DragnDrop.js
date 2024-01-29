/*
DragnDrop är en constructor funktion som skapar funktionalitet för att kunna flytta tärningsfönstret. DragnDrop tar emot 2 parametrar: window och menuBar.
*/

/*
Parametrar:
window: är en referens till den div som representerar tärningsfönstret.
menuBar: är en referens till den div som representerar menynbaren som är den del av tärningsfönstret som är dragbar. Alltså kan användaren endast dra i menynbaren för att flytta tärningsfönstret. 
*/

function DragnDrop(window, menuBar) {
    this.offset = new MousePosition();
    this.window = window;
    this.menuBar = menuBar;
    this.x = 0;
    this.y = 0;
    this.currentWindow = null; // Används för att hålla koll på vilket fönster som är aktivt


    /*
    Metoden add lägger till funktionalitet för att kunna flytta tärningsfönstret. Metoden lägger till en händelselyssnare för mousedown på menynbaren. När användaren klickar på menynbaren så anropas metoden mouseDown.
    */

    this.add = function () {
        var self = this;
        this.menuBar.addEventListener('mousedown', function (event) {
            self.mouseDown(event, self.window);
        });
    };

    this.add();
};


//-------------Metoder som ägs av "klassen" DragnDrop men läggs till i Prototype-------------\\


/*
mouseDown är en metod som anropas när användaren klickar på menynbaren. Metoden tar emot 2 parametrar: event och window. Metoden sparar positionen för tärningsfönstret och positionen för muspekaren. Därefter lägger metoden till händelselyssnare för mousemove och mouseup på document. 


Parametrar:
event: är en referens till händelsen som sker när användaren klickar på menynbaren.
window: är en referens till den div som representerar tärningsfönstret.

*/

DragnDrop.prototype.mouseDown = function (event, window) {
    var self = this;

    event.preventDefault();

    self.currentWindow = window; // Sparar referens till tärningsfönstret

    self.offset.x = parseInt(self.currentWindow.style.left) || 0; // Sparar positionen för tärningsfönstret
    self.offset.y = parseInt(self.currentWindow.style.top) || 0;

    self.x = event.clientX - self.offset.x;  // Sparar positionen för muspekaren
    self.y = event.clientY - self.offset.y;
    

    document.addEventListener('mousemove', function (event) {
        self.mouseMove(event);
    });
    document.addEventListener('mouseup', function (event) {
        self.mouseUp(event);
    });

};


/*
mouseMove är en metod som anropas när användaren flyttar på muspekaren. Metoden tar emot 1 parameter: event. Metoden flyttar tärningsfönstret till den position som muspekaren befinner sig på. Metoden sätter även ett z-index på tärningsfönstret i form av en tidsstämpel i sekunder, detta för lägga det fönser man drar i, högst upp i z-leden. 
*/

DragnDrop.prototype.mouseMove = function (event) {
    var self = this;

    event.preventDefault();

    if (self.currentWindow) { // Kollar om tärningsfönstret är aktivt
        self.currentWindow.style.zIndex = Math.floor(new Date().getTime() / 1000);
        self.currentWindow.style.left = (event.clientX - self.x) + 'px';
        self.currentWindow.style.top = (event.clientY - self.y) + 'px';
    };
};


/*
mouseUp är en metod som anropas när användaren släpper musknappen. Metoden tar emot 1 parameter: event. Metoden tar bort händelselyssnare för mousemove och mouseup på document. Metoden sätter även tärningsfönstret till inaktivt.
*/

DragnDrop.prototype.mouseUp = function (event) {
    var self = this;

    event.preventDefault();

    document.removeEventListener('mousemove', self.mouseMove);
    document.removeEventListener('mouseup', self.mouseUp);

    self.currentWindow = null; // Sätter tärningsfönstret till inaktivt

};
