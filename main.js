var inp_arr_size = document.getElementById("a_size"),
  array_size = inp_arr_size.value;
var inp_generate = document.getElementById("a_generate");
var inp_arr_speed = document.getElementById("a_speed");

var algo_btn = document.querySelectorAll(".algos button");

var div_sizes = [];
var divs = [];
var margin_size;
var cont = document.getElementById("array_container");
cont.style = "flex-direction:row";


inp_generate.addEventListener("click", generate_array);
inp_arr_size.addEventListener("input", update_array_size);

function generate_array() {
  cont.innerHTML = "";

  for (var i = 0; i < array_size; i++) {
    div_sizes[i] =
      Math.floor(Math.random() * 0.5 * (inp_arr_size.max - inp_arr_size.min)) +
      10;
    divs[i] = document.createElement("div");
    cont.appendChild(divs[i]);
    margin_size = 0.1;
    divs[i].style =
      " margin:0% " +
      margin_size +
      "%; background-color:purple; width:" +
      (100 / array_size - 2 * margin_size) +
      "%; height:" +
      div_sizes[i] +
      "%;";
  }
}

function update_array_size() {
  array_size = inp_arr_size.value;
  generate_array();
}

window.onload = update_array_size();

for (var i = 0; i < algo_btn.length; i++) {
  algo_btn[i].addEventListener("click", runalgo);
}

function disable_buttons() {
  for (var i = 0; i < algo_btn.length; i++) {
    algo_btn[i].classList = [];
    algo_btn[i].classList.add("lock_btn");

    algo_btn[i].disabled = true;
    inp_arr_size.disabled = true;
    inp_generate.disabled = true;
    inp_arr_speed.disabled = true;
  }
}

function runalgo() {
  disable_buttons();

  this.classList.add("butt_selected");
  switch (this.innerHTML) {
    case "Bubble":
      Bubble_algo();
      break;
    case "Selection":
      Selection_algo();
      break;
    case "Insertion":
      Insertion_algo();
      break;
    case "Merge":
      Merge_algo();
      break;
    case "Quick":
      Quick_algo();
      break;
    case "Heap":
      Heap_algo();
      break;
  }
}
