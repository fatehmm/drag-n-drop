let divs = document.querySelectorAll("div");
divs.forEach((div) =>{
   let red = div.getAttribute('red');
   let green = div.getAttribute('green');
   let blue = div.getAttribute('blue');
   let color = `rgb(${red}, ${green}, ${blue})`;
   div.style.background = `${color}`;
});
let red, green, blue;
divs.forEach((div) => {
    div.addEventListener("dragstart", function(e){
      red = div.getAttribute("red");
      green = div.getAttribute("green");
      blue = div.getAttribute("blue");
      let color = `rgb(${red}, ${green}, ${blue})`;
      console.log(color);
    })
})
let dropzone = document.querySelector(".dropped-zone");
dropzone.addEventListener("dragover", function(e){
    e.preventDefault();
})
dropzone.addEventListener("drop", function(e){
    let color = `rgb(${red}, ${green}, ${blue})`;
    dropzone.style.backgroundColor = color;
})
let custom_div = document.querySelector(".custom-div");

custom_div.addEventListener("dragstart", function(e){
    red = custom_div.getAttribute("red");
    green = custom_div.getAttribute("green");
    blue = custom_div.getAttribute("blue");
    let color = `rgb(${red}, ${green}, ${blue})`;
    console.log(color);
});

let red_input = document.getElementById("red");
let green_input = document.getElementById("green");
let blue_input = document.getElementById("blue");
let button = document.getElementById("submit-button");
button.addEventListener("click", function(e){
    let red = red_input.value;
    let green = green_input.value;
    let blue = blue_input.value;
   custom_div.setAttribute("red", red);
   custom_div.setAttribute("green", green);
   custom_div.setAttribute("blue", blue);

        let color = `rgb(${red}, ${green}, ${blue})`;
       
    custom_div.style.backgroundColor = color;
})