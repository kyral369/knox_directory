var numSquares = 6;
var colors = []; //generateRandomColors(6)
var pickedColor; //pickColor()
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

 function init() {
 		//mode buttons event listeners
	 	setupModeButtons();
	 	setupSquares();
		reset();
}	

 function setupModeButtons(){
 	for(var i=0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
				modeButtons[0].classList.remove("selected");
				modeButtons[1].classList.remove("selected");
				this.classList.add("selected");
				this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
					// if(this.textContent === "Easy"){
					// 	numSquares = 3;
					// } else {
					// 	numSquares = 6;
					// }
				reset();
		});
     }
}

 function setupSquares() {
 	for(var i = 0; i < squares.length; i++){
		// //add initial colors tp square
		// squares[i].style.background = colors[i];

		//add click listeners to square
		squares[i].addEventListener("click",function(){
				//grab color of clicked square
				var clickedColor = this.style.backgroundColor;
				//compare color to pickedColor
				if(clickedColor === pickedColor){
					    messageDisplay.textContent = "Correct!";
						resetButton.textContent = "Play Again?";
						for(var i=0; i < squares.length; i++){
						squares[i].style.backgroundColor = pickedColor;
					}
					h1.style.backgroundColor = clickedColor;
				} else {
					this.style.backgroundColor = "#232323";
					messageDisplay.textContent = "Try Again"
					   }
		});
	}
 }

function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from an array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	  }
	h1.style.backgroundColor = "steelblue";
}

// colorDisplay.textContent = pickedColor;



function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random]
}

function generateRandomColors(num){
	// make array
	var arr = [];
	// repeat num times
	for(var i = 0; i< num; i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	// return that array
	return arr;
}

function randomColor(){
	//pick red from 0 to 255
	var r = Math.floor(Math.random() * 256); 
	//pick green from 0 to 255
	var g = Math.floor(Math.random() * 256); 
	//pick blue from 0 to 255
	var b = Math.floor(Math.random() * 256); 
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

resetButton.addEventListener("click",function(){
		reset();
	// //generate all new colors
	// colors = generateRandomColors(numSquares);
	// //pick a new random color from an array
	// pickedColor = pickColor();
	// //change colorDisplay to match picked color
	// colorDisplay.textContent = pickedColor;
	// this.textContent = "New Colors";
	// messageDisplay.textContent = "";
	// //change colors of squares
	// for(var i = 0; i < squares.length; i++){
	// squares[i].style.background = colors[i];
	// }
	// h1.style.background = "steelblue";
})

// easyBtn.addEventListener("click",function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;  
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// 	});

// hardBtn.addEventListener("click",function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;  
// 	for(var i = 0; i < squares.length; i++){
// 			squares[i].style.background = colors[i];
// 			squares[i].style.display = "block";
// 	}
// });

