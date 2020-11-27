let userTotal = 0;
let compTotal = 0;

let count = 0;


function rollTheDice() { 
    setTimeout(function () { 
        let randomNumber1 = Math.floor(Math.random() * 6) + 1; 
        let randomNumber2 = Math.floor(Math.random() * 6) + 1; 
        let randomNumber3 = Math.floor(Math.random() * 6) + 1; 
        let randomNumber4 = Math.floor(Math.random() * 6) + 1; 

        let userScore = randomNumber1 + randomNumber2;
        let compScore = randomNumber3 + randomNumber4;

        userTotal += userScore;
        compTotal += compScore;


        document.querySelector(".img1").setAttribute("src", 
            "images/dice-six-face-" + randomNumber1 + ".png"); 

        document.querySelector(".img2").setAttribute("src", 
            "images/dice-six-face-" + randomNumber2 + ".png"); 

        document.querySelector(".img3").setAttribute("src", 
            "images/dice-six-face-" + randomNumber3 + ".png"); 

        document.querySelector(".img4").setAttribute("src", 
            "images/dice-six-face-" + randomNumber4 + ".png"); 

        document.querySelector(".userScore").innerHTML = userScore;
        document.querySelector(".compScore").innerHTML = compScore;
        document.querySelector(".userTotal").innerHTML = userTotal;
        document.querySelector(".compTotal").innerHTML = compTotal;

        $(".newGame").show();
    }, 1000); 

} 


function counter() {
    setTimeout(function () {
        count++;
        if (count === 3){
            if (userTotal === compTotal) { 
                document.querySelector("h1").innerHTML = "Draw!"; 
            } 
        
            else if (userTotal < compTotal) { 
                document.querySelector("h1").innerHTML = ("Computer Wins!"); 
            } 
        
            else { 
                document.querySelector("h1").innerHTML = (" User Wins!"); 
            } 
            $(".rollDice").hide();
        } 
    }, 1000);
}
