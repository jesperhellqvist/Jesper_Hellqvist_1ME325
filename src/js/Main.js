/*
Main är en objekt literal som innehåller en metod init som körs när sidan laddas. Metoden init lägger till en eventlyssnare på ikonen för tärningarna. När ikonen klickas på körs metoden newWindow. 
*/

var Main = {

    init: function () {
        var diceIcon = document.getElementById('icon-dice');
        diceIcon.addEventListener('click', Main.newWindow);
    },

    /*
    Metoden newWindow skapar ett nytt fönster med hjälp av konstruktorn Window. 
    */

    newWindow: function () {
        var diceWindow = new DiceWindow();
    }

};
window.addEventListener('load', Main.init);
