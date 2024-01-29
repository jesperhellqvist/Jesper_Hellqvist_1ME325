/*
DiceWindow är en constructor funktion som skapar en instans av Div som ska fungera som tärningsfönstret. Därefter skapas en instans av MenuBar, ToolBar och Ul som ska fungera som en lista för tärningarna. Dessa läggs sedan till i tärningsfönstret och bildar en grundstruktur för tärningsfönstrets grafiska gränssnitt. Efter detta skapas en instans av DragnDrop som lägger till funktionalitet för att kunna flytta tärningsfönstret.
*/


function DiceWindow() {
    this.contentWrapper = document.getElementById('page-content-wrapper');
    this.divWindow = new Div('dice-window-wrapper');
    this.menuBar = new MenuBar(this.divWindow.div);
    this.diceContent = new Div('dice-content-wrapper');
    this.UlDiceWrapper = new Ul('dice-wrapper');
    this.toolBar = new ToolBar(this.divWindow.div, this.UlDiceWrapper.ul);
    this.drag = new DragnDrop(this.divWindow.div, this.menuBar.menuBar.div); // Skickar med referens till tärningsfönstret och menynBar för att kunna flytta tärningsfönstret.


    /*
    Metoden addElements lägger till alla element i tärningsfönstret.
    */


    this.addElements = function () {
        this.contentWrapper.appendChild(this.divWindow.div);
        this.divWindow.div.appendChild(this.diceContent.div);
        this.diceContent.div.appendChild(this.UlDiceWrapper.ul);
    };

    this.addElements();

};