var secondPlayer;
//GET RANDOM VALUES OF DICE
var firstPlayerNumber = Math.floor((Math.random() * 6) + 1);
var secondPlayerNumber = Math.floor((Math.random() * 6) + 1);

//LOADING FUNCTION
window.onload = function checkFirstLoad() {
    var retrieveFromStorage = sessionStorage.getItem("firstLoad");

    if (retrieveFromStorage === null) {
        sessionStorage.setItem("firstLoad", "yes");
    } else {
        //USER ENTERS THEIR NAME
        secondPlayer = prompt("Hey There! Tell us your name: ");

        checkIfNameIsValid();
        //FORMAT THE NAME PROPERLY
        secondPlayer = secondPlayer.slice(0, 1).toUpperCase() + secondPlayer.slice(1).toLowerCase();

        document.querySelector(".player-1").textContent = "Joseph";
        document.querySelector(".player-2").textContent = secondPlayer.toString();
        displayWinner();
        sessionStorage.setItem("firstLoad", "no");
    }
}

function checkIfNameIsValid() {

    while (secondPlayer.trim().toLowerCase().includes("joseph")) {
        alert("There will never be another me lol 🖕. Enter a different Name")
        secondPlayer = prompt("Enter a valid name so you can play: ");

        if (secondPlayer.trim().toLowerCase().includes("joseph")) {
            secondPlayer = prompt("Are you gay 🖕? Enter a valid name so you can play: ");
        }
    }

    //IF NO INPUT IS ENTERED WE PROMPT AGAIN
    while (secondPlayer.trim() === "" || secondPlayer === null || secondPlayer.length >= 20) {
        secondPlayer = prompt("Are you gay 🖕? Enter a valid name so you can play: ");

        if (secondPlayer.trim() === "") {
            alert("KILL YOURSELF OR ENTER A NAME 🖕");
        }

    }
}

//LOAD THE IMAGES WHEN THE FUNCTION IS CALLED
function loadImages() {
    document.querySelector(".img-1").setAttribute("src", "images/dice" + firstPlayerNumber + ".png");
    document.querySelector(".img-2").setAttribute("src", "images/dice" + secondPlayerNumber + ".png");
}

//FUNCTION FOR DISPLAYING THE WINNER
function displayWinner() {

    loadImages();

    if (firstPlayerNumber > secondPlayerNumber) {
        document.querySelector("#main-text").textContent = "Joseph Wins";
    } else if (secondPlayerNumber > firstPlayerNumber) {
        document.querySelector("#main-text").textContent = secondPlayer + " is gay";
    } else {
        document.querySelector("#main-text").textContent = "FUCKKKK Its a Draw, Kill Yourself";
    }
}