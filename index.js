// document.querySelector("button").addEventListener("click",handleClick);

// function handleClick() {
//     alert("I got clicked!");
// }
var allButtonsArray = document.querySelectorAll("button");
for (var i = 0; i < allButtonsArray.length; i++) {
  allButtonsArray[i].addEventListener("click", function () {
    playMusic(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}
document.addEventListener("keydown", function (event) {
  playMusic(event.key);
  buttonAnimation(event.key);
});

function playMusic(key) {
  switch (key) {
    case "w":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "s":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
  }
}

function buttonAnimation(currentkey) {
  var activeButton=document.querySelector("."+currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function (){
    activeButton.classList.remove("pressed")
  },100);
}
