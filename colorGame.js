var numSquares = 9;
var colors = [];
var pickedColor;

var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var resetButton = document.getElementById("reset");
var bannerWrap = document.getElementById("bannerWrap")

var modeButtons = document.querySelectorAll(".menu__btn--mode");
var squares = document.querySelectorAll(".square");


init();

	function init() {
		setUpModeButtons();
		setUpSquares();		
		reset();
	}

	function setUpModeButtons() {
		for(var i = 0; i < modeButtons.length; i++) {
			modeButtons[i].addEventListener("click", function(){
				modeButtons[0].classList.remove("menu__btn--selected");
				modeButtons[1].classList.remove("menu__btn--selected");
				modeButtons[2].classList.remove("menu__btn--selected");
				this.classList.add("menu__btn--selected");

				console.dir(this);
				numSquares = this.dataset.difficulty;

				// if(this.textContent === "Easy")	{
				// 	numSquares = 3;
				// } else if(this.textContent === "Medium") {
				// 	numSquares = 6;
				// } else if(this.textContent === "Hard") {
				// 	numSquares = 9;
				// } else {
				// 	alert("numSquares not defined!!!");
				// }

								
				reset();
			});
		}
	}

	function setUpSquares() {
		for(var i = 0; i < squares.length; i++) {
			// add click listeners to squares
			squares[i].addEventListener("click", function(){		
				// grab color of clicked square
				var clickedColor = this.style.backgroundColor;		
					// compare color to picked color
					if(clickedColor === pickedColor) {
						messageDisplay.textContent = "Correct!";
						resetButton.textContent = "Play Again?";
						changeColors(clickedColor);
						bannerWrap.style.backgroundColor = clickedColor;
					} else {
						this.style.backgroundColor = "#232323";
						messageDisplay.textContent = "Try Again";
					}					
			});
		}
	}

	function reset() {
		colors = generateRandomColors(numSquares);
		// pick a new random color from array
		pickedColor = pickColor();
		// change colorDisplay to match picked color
		colorDisplay.textContent = pickedColor;
		// resets play again button to new colors button
		resetButton.textContent = "New Colors";
		// change span back to blank after reset
		messageDisplay.textContent = "";
		// change colors of squares
		for(var i = 0; i < squares.length; i++) {
			if(colors[i]) {
				squares[i].style.display = "block";
				squares[i].style.backgroundColor = colors[i];
			} else {
				squares[i].style.display = "none";
			}
		}
			
		bannerWrap.style.backgroundColor = "steelblue";
	}

	resetButton.addEventListener("click", function(){
		reset();
	});

	function changeColors(color) {
		// loop through all the squares
		for(var i = 0; i < squares.length; i++){
		// change each color to match given color
		squares[i].style.backgroundColor = color;
		}
	}

	function pickColor() {
		var random = Math.floor(Math.random() * colors.length)
		return colors[random];
	}

	function generateRandomColors(num) {
		// make an array
		var arr = []
		// add num random colors to array
		for(i = 0; i < num; i++) {
			// get random color and push into arr
			arr.push(randomColor())
		}
		// return that array
		return arr;
	}

	function randomColor() {
		// pick a "red" from 0 - 255
		var r = Math.floor(Math.random() * 256);
		// pick a "green" from 0 - 255
		var g = Math.floor(Math.random() * 256);
		// pick a "blue" from 0 - 255
		var b = Math.floor(Math.random() * 256);
	
		 return "rgb(" + r + ", " + g + ", " + b + ")";
	}
