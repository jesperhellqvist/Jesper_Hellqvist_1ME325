/*
ToolBar är en constructor funktion som skapar en div som innehåller en ul-lista som i sin tur innehåller 3 knappar. ToolBar tar emot 2 parametrar: parent och ul.
*/

/*
Parametrar:
parent: är en referens till den div som toolbaren ska läggas till i.
ul: är en referens till den ul-lista som tärningarna ska läggas till i, den referensen skickas endast vidare till knapparna AddBtn, RemoveBtn och RollBtn då det är där tärningarna skapas och manipuleras beroende på vilken knapps som användaren klickar på.
*/

function ToolBar(parent , ul){
    this.wrapper = parent;
    this.diceUl = ul;
    this.toolBarDiv = new Div('dice-toolbar-wrapper');
    this.UlWrapper = new Ul();
    this.LiWrapper = new Li();
    this.audio = new Audio('src/wav/add.wav');
    this.Counter = new Counter(this.LiWrapper.li);
    this.LiAdd = new AddBtn(this.UlWrapper.ul, this.diceUl, this.Counter, this.audio);
    this.LiRemove = new RemoveBtn(this.UlWrapper.ul, this.diceUl, this.Counter, this.LiAdd, this.audio);
    this.LiRoll = new RollBtn(this.UlWrapper.ul, this.diceUl, this.Counter, this.LiAdd, this.audio);


    /*
    Metoden addElements lägger till ToolBaren till diven som representerar tärningsfönstret, därefter läggs ul-listan till i toolbaren som ska innehålla AddBtn, RemoveBtn, RollBtn och ett li element som wrappar runt en ny ul-lista som ska innehålla "Counter" med tillhörande digits.
    */

    this.addElements = function(){
        this.wrapper.appendChild(this.toolBarDiv.div);
        this.toolBarDiv.div.appendChild(this.UlWrapper.ul);
        this.UlWrapper.ul.appendChild(this.LiWrapper.li);
    };

    this.addElements();

};