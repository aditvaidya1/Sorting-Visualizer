function Bubble_algo() {
  document.getElementById("Worst").innerText = "O(N^2)";
  document.getElementById("Worst").style.color = "rgb(127, 43, 43)";
  document.getElementById("Average").innerText = "Θ(N^2)";
  document.getElementById("Average").style.color = "rgb(127, 43, 43)";
  document.getElementById("Best").innerText = "Ω(N)";
  document.getElementById("Best").style.color = "rgb(127, 43, 43)";

  document.getElementById("S_Worst").innerText = "O(1)";
  document.getElementById("S_Worst").style.color = "rgb(127, 43, 43)";

  delay_change = 0;

  for (var i = 0; i < array_size - 1; i++) {
    for (var j = 0; j < array_size - i - 1; j++) {
      update(divs[j], div_sizes[j], "black"); 

      if (div_sizes[j] > div_sizes[j + 1]) {
        update(divs[j], div_sizes[j], "red");  
        update(divs[j + 1], div_sizes[j + 1], "red"); 

        var temp = div_sizes[j];
        div_sizes[j] = div_sizes[j + 1];
        div_sizes[j + 1] = temp;

        update(divs[j], div_sizes[j], "red"); //Height update
        update(divs[j + 1], div_sizes[j + 1], "red"); //Height update
      }
      update(divs[j], div_sizes[j], "blue"); 
    }
    update(divs[j], div_sizes[j], "green"); 
  }
  update(divs[0], div_sizes[0], "green"); 

  enable_btns();
}
