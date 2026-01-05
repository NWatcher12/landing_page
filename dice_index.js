
randomize();

function randomize(){
    var randomNumber1 = Math.random();
    randomNumber1 = randomNumber1 * 6;
    randomNumber1 = Math.floor(randomNumber1) + 1;

    document.querySelector(".img1").setAttribute("src", "./dice_images/dice"+randomNumber1+".png");

    var randomNumber2 = Math.random();
    randomNumber2 = randomNumber2 * 6;
    randomNumber2 = Math.floor(randomNumber2) + 1;

    document.querySelector(".img2").setAttribute("src", "./dice_images/dice"+randomNumber2+".png");
   
    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    }else if (randomNumber2 > randomNumber1){
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    }else{
        document.querySelector("h1").innerHTML = "Draw!";
    }
}

document.querySelectorAll("button").forEach(function (button) {
    button.addEventListener("click", handleClick);
});

function handleClick(){
     var buttonInnerHTML = this.textContent.trim();

     console.log(buttonInnerHTML)

     if (buttonInnerHTML === "Reroll"){
        randomize();
     }else if (buttonInnerHTML === "Return"){
        window.location.href = "index.html#work";
     }
}