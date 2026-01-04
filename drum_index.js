var totalDrum = document.querySelectorAll(".drum").length;

for (var i = 0; i < totalDrum; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        handleKeyPress(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });
}

document.querySelector(".return").addEventListener("click", handleClick);

function handleClick(){
    window.location.href = "index.html#work";
}

function handleKeyPress(key){

    switch (key){
        case "w": 
            var tom1 = new Audio("./drum_sounds/tom-1.mp3")
            tom1.play();
            break;
        case "a": 
            var tom2 = new Audio("./drum_sounds/tom-2.mp3")
            tom2.play();
            break;
        case "s": 
            var tom3 = new Audio("./drum_sounds/tom-3.mp3")
            tom3.play();
            break;
        case "d": 
            var tom4 = new Audio("./drum_sounds/tom-4.mp3")
            tom4.play();
            break;
        case "j": 
            var crash = new Audio("./drum_sounds/crash.mp3")
            crash.play();
            break;
        case "k": 
            var kick = new Audio("./drum_sounds/kick-bass.mp3")
            kick.play();
            break;
        case "l": 
            var snare = new Audio("./drum_sounds/snare.mp3")
            snare.play();
            break;
    }
}

document.addEventListener("keydown", function(event){
    handleKeyPress(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(currentKey){
    
    var activeButtone = document.querySelector("." + currentKey);

    activeButtone.classList.add("pressed");

    setTimeout(function(){
        activeButtone.classList.remove("pressed");
    }, 100)
}
