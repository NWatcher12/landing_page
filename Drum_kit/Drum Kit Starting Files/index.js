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
    window.location.href = "../../index.html#work";
}
// function handleClick(){
//     var buttonInnerHTML = this.innerHTML;

//     switch (buttonInnerHTML){
//         case "w": 
//             var tom1 = new Audio("./sounds/tom-1.mp3")
//             tom1.play();
//             break;
//         case "a": 
//             var tom2 = new Audio("./sounds/tom-2.mp3")
//             tom2.play();
//             break;
//         case "s": 
//             var tom3 = new Audio("./sounds/tom-3.mp3")
//             tom3.play();
//             break;
//         case "d": 
//             var tom4 = new Audio("./sounds/tom-4.mp3")
//             tom4.play();
//             break;
//         case "j": 
//             var crash = new Audio("./sounds/crash.mp3")
//             crash.play();
//             break;
//         case "k": 
//             var kick = new Audio("./sounds/kick-bass.mp3")
//             kick.play();
//             break;
//         case "l": 
//             var snare = new Audio("./sounds/snare.mp3")
//             snare.play();
//             break;
//     }
//     // alert("I got clicked!");
// }

function handleKeyPress(key){

    switch (key){
        case "w": 
            var tom1 = new Audio("./sounds/tom-1.mp3")
            tom1.play();
            break;
        case "a": 
            var tom2 = new Audio("./sounds/tom-2.mp3")
            tom2.play();
            break;
        case "s": 
            var tom3 = new Audio("./sounds/tom-3.mp3")
            tom3.play();
            break;
        case "d": 
            var tom4 = new Audio("./sounds/tom-4.mp3")
            tom4.play();
            break;
        case "j": 
            var crash = new Audio("./sounds/crash.mp3")
            crash.play();
            break;
        case "k": 
            var kick = new Audio("./sounds/kick-bass.mp3")
            kick.play();
            break;
        case "l": 
            var snare = new Audio("./sounds/snare.mp3")
            snare.play();
            break;
        // case "Return":
        //     window.location.href = "../../index.html";
        //     break;
    }
    // alert("I got clicked!");
}

document.addEventListener("keydown", function(event){
    handleKeyPress(event.key);
    buttonAnimation(event.key);
    // console.log(event);
    // alert("Key was pressed!");
});

//  var audio = new Audio('./sounds/tom-1.mp3');
//     audio.play();

function buttonAnimation(currentKey){
    
    var activeButtone = document.querySelector("." + currentKey);

    activeButtone.classList.add("pressed");

    setTimeout(function(){
        activeButtone.classList.remove("pressed");
    }, 100)
}
