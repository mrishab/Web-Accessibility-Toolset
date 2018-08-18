var focusButton = document.getElementById('focusButton');
var upper = document.getElementById('upper');
var lower = document.getElementById('lower');
var focus = document.getElementById('focus');
var outerFocus = document.getElementById('focus_read');
var focusKeys = document.getElementById('focus_keys');
var winHeight = window.innerHeight;
var focus_size = 5;

focusButton.addEventListener('click', toggle);
document.addEventListener('mousemove', mvFocus);
document.addEventListener('keypress', chFocus);

function mvFocus(e){

  var upHeight = ((e.clientY/winHeight)*100) - focus_size;
  var loHeight = ((1 - (e.clientY/winHeight))*100) - focus_size;

  upper.style = "height:" + upHeight + "vh;"
  lower.style = "height:" + loHeight + "vh;"
}

function chFocus(e){
  var key = e.charCode || e.keyCode;
  key = String.fromCharCode(key);

  if (key == 'w' && focus_size < 15){
    focus_size++;

  }
  else if (key == 'e' && focus_size > 2) {
    focus_size--;
  }
  else if (key == 'q') {
    outerFocus.style.display = "none";
    focusKeys.style.display = "none";
  }

  focus.style.height = focus_size*2 + "vh";
}

function toggle(){
    outerFocus.style.display = "block";
    focusKeys.style.display = "flex";
}
