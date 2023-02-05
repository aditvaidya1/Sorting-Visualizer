var speed = 1000;

inp_arr_speed.addEventListener("input", v_speed);

function v_speed() {
  var array_speed = inp_arr_speed.value;
  switch (parseInt(array_speed)) {
    case 1:
      speed = 1;
      break;
    case 2:
      speed = 10;
      break;
    case 3:
      speed = 100;
      break;
    case 4:
      speed = 1000;
      break;
    case 5:
      speed = 10000;
      break;
  }

  delay_time = 10000 / (Math.floor(array_size / 10) * speed);
}

var delay_time = 10000 / (Math.floor(array_size / 10) * speed);
var delay_change = 0;
function enable_btns() {
  window.setTimeout(function () {
    for (var i = 0; i < algo_btn.length; i++) {
      algo_btn[i].classList = [];
      algo_btn[i].classList.add("butt_unselected");

      algo_btn[i].disabled = false;
      inp_arr_size.disabled = false;
      inp_generate.disabled = false;
      inp_arr_speed.disabled = false;
    }
  }, (delay_change += delay_time));
}

function update(cont, height, color) {
  window.setTimeout(function () {
    cont.style =
      " margin:0% " +
      margin_size +
      "%; width:" +
      (100 / array_size - 2 * margin_size) +
      "%; height:" +
      height +
      "%; background-color:" +
      color +
      ";";
  }, (delay_change += delay_time));
}
