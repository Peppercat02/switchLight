var state = true;

var timeLeft = 5;
function toggleLight(){
  var image = document.getElementById("image");
  state = !state;
  image.src=state?"img/on.jpg" : "img/off.jpg";


}

function setTimer() {
    var form = document.getElementById("myForm").action;
    console.log(form);
    // if(state && timeLeft>=1) countDownTimer()
}
function countDownTimer(){
    console.log(timeLeft);
  // console.log(image); //<img src="img/on.jpg" alt="on" id="image">
    if (timeLeft <= 0){
        image.src = "img/off.jpg";
        clearInterval(setting);
    } else {
        timeLeft -= 1;
    }
  document.getElementById("timer").innerHTML = timeLeft;
  var setting = setInterval(countDownTimer,1000);
}
