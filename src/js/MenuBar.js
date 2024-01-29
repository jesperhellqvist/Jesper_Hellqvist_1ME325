/*
MenuBar är en constructor funktion som skapar en menyBar i form av en ny instans av Div, därefter skapas en instans av CloseBtn som läggs till i menybaren. MenyBar tar emot 1 parametrar: parent. 
*/

/*
Parametrar:
parent: är en referens till den div som menybaren ska läggas till i.
*/


function MenuBar(parent) {
    this.wrapper = parent;
    this.menuBar = new Div("dice-menubar-wrapper");
    this.closeBtn = new CloseBtn(this.menuBar.div, this.wrapper);


    /*
    Metoden addElements lägger till menybaren i div:en som finns i egenskapen this.wrapper.
    */

    this.addElements = function () {
        this.wrapper.appendChild(this.menuBar.div);
    };

    this.addElements();

};