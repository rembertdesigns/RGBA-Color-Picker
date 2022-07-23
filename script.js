let output = document.querySelector("#output");
let blockColor = document.querySelector(".block_color");
let input = document.querySelectorAll("input");
for(i=0; i<input.length; i++){
    input[i].oninput = function() {
        let red = document.querySelector("#red").value;
        let green = document.querySelector("#green").value;
        let blue = document.querySelector("#blue").value; 
        let alpha = document.querySelector("#alpha").value;
        if (green > 150 || red > 150 ) {
            output.style.color = "black";
        } else {
            output.style.color = "white"; 
        };
        if (alpha > 1){
            alpha /= 100;
        };
        output.style.backgroundColor = 'rgba('+ red + ',' + green + ',' + blue + ',' + alpha + ')';
        blockColor.style.backgroundColor = 'rgba('+ red + ',' + green + ',' + blue + ',' + alpha + ')'; 
        output.innerHTML = 'rgba('+ red + ',' + green + ',' + blue + ',' + alpha + ')';
    }
}