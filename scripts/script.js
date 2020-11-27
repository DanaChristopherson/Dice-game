function rollTheDice() { 
    setTimeout(function () { 
        let randomNumber1 = Math.floor(Math.random() * 6) + 1; 
        let randomNumber2 = Math.floor(Math.random() * 6) + 1; 

        document.querySelector(".userscore").innerHTML = "";
        document.querySelector(".computerscore").innerHTML = "";

        document.querySelector(".img1").setAttribute("src", 
            "images/dice-six-face-" + randomNumber1 + ".png"); 

        document.querySelector(".img2").setAttribute("src", 
            "images/dice-six-face-" + randomNumber2 + ".png"); 

        if (randomNumber1 === randomNumber2) { 
            document.querySelector("h1").innerHTML = "Draw!"; 
        } 

        else if (randomNumber1 < randomNumber2) { 
            document.querySelector("h1").innerHTML = ("Computer Wins!"); 
        } 

        else { 
            document.querySelector("h1").innerHTML = (" User Wins!"); 
        } 

        document.querySelector(".userscore").innerHTML += randomNumber1;
        document.querySelector(".computerscore").innerHTML += randomNumber2;
    }, 1000); 
} 

// function scoreboard() {



// }