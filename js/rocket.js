var timer = null;
var countdownNumber =  10;




var changeState = function (state) {
    document.body.className = 'body-state' + state;
    
    clearInterval(timer);
    countdownNumber = 10;
    document.getElementById('countdown').innerHTML = countdownNumber;
    //Contdown
    if(state == 2) {
        timer = setInterval(function() {
            countdownNumber = countdownNumber-1;
            document.getElementById('countdown').innerHTML = countdownNumber;
            if (countdownNumber <= 0) {
                changeState(3);
            }

        }, 500);
    }
    //Succes or Faliure
    else if(state == 3) {
        var success = setTimeout(function () {
            var randomNumber = Math.round(Math.random()*10);

            //Success
            if(randomNumber > 5) {
                changeState(4);
            }
            else {
                changeState(5); //WTF !!!
            }
        }, 2000);
        
    }
    else if(state == 4) {

    }
    else if(state == 5) {

    }
    else {

    }
}