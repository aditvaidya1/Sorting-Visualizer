function Selection_algo() {
  document.getElementById("Worst").innerText = "O(N^2)";
  document.getElementById("Average").innerText = "Θ(N^2)";
  document.getElementById("Best").innerText = "Ω(N^2)";

  document.getElementById("S_Worst").innerText = "O(1)";

  delay_change = 0;

  for (var i = 0; i < array_size - 1; i++) {
    update(divs[i], div_sizes[i], "red"); 

    index_min = i;

    for (var j = i + 1; j < array_size; j++) {
      update(divs[j], div_sizes[j], "yellow"); 

      if (div_sizes[j] < div_sizes[index_min]) {
        if (index_min != i) {
          update(divs[index_min], div_sizes[index_min], "blue"); 
        }
        index_min = j;
        update(divs[index_min], div_sizes[index_min], "red"); 
      } else {
        update(divs[j], div_sizes[j], "blue"); 
      }
    }

    if (index_min != i) {
      var temp = div_sizes[index_min];
      div_sizes[index_min] = div_sizes[i];
      div_sizes[i] = temp;

      update(divs[index_min], div_sizes[index_min], "red"); //Height update
      update(divs[i], div_sizes[i], "red"); //Height update
      update(divs[index_min], div_sizes[index_min], "blue"); 
    }
    update(divs[i], div_sizes[i], "green"); 
  }
  update(divs[i], div_sizes[i], "green"); 

  enable_btns();
}
