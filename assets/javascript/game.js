//Variables:
//Computer's Generated number
var computerNum = '';
console.log(computerNum);
//User Input/A way to store collective points
var userTotal = '';
counter = 0;
//Crystal numbers
var addOne = '';
var addTwo = '';
var addThree = '';
var addFour = '';
var crystalOne = '';
var crystalTwo = '';
var crystalThree = '';
var crystalFour = '';

//Win/Loss variable
win = '';
loss = '';
var winCounter = 0;
var lossCounter = 0;

var audioElement = document.createElement("audio");
 	audioElement.setAttribute("src", "assets/sounds/400603__newagesoup__bright-triple-sweep-quick.wav");
//-------------------------------------
//Functions 
//Starts the Game by radomly selecting the number of crystals needed to be collected and the number for the crystals (once per round)
$( document ).ready(function() {

function gameStart() {
computerNum = Math.floor(Math.random() * 101) + 19;	
crystalOne = Math.floor(Math.random() * 12 + 1);
crystalTwo = Math.floor(Math.random() * 12 + 1);
crystalThree = Math.floor(Math.random() * 12 + 1);
crystalFour = Math.floor(Math.random() * 12 + 1);


return computerNum;
return crystalOne;
return crystalTwo;
return crystalThree; 
return crystalFour;
}

gameStart();

//Displays number of crystals needed
function computerGenNum() {
$("#computer-number").html(computerNum);
}
computerGenNum();



//Generator for Crystal points - Stores numbers of crystals collected per click

$("#crystal-one").on("click", function(event){
	audioElement.play();
	 userTotal = crystalOne;
	console.log(userTotal);
	return userTotal;
});

$("#crystal-two").on("click", function(event){
	 audioElement.play();
	 userTotal = crystalTwo;
	console.log(userTotal);
	return userTotal;
});

$("#crystal-three").on("click", function(event){
	audioElement.play();
	 userTotal = crystalThree;
	console.log(userTotal);
	return userTotal;
});

$("#crystal-four").on("click", function(event){
	audioElement.play();
	 userTotal = crystalFour;
	console.log(userTotal);
	return userTotal;
});

// Adds total number of crystals collected and displays on the screen

// Also has the determinant of wins/losses

// Also has the win/loss counter logic
$("#crystal-one, #crystal-two, #crystal-three, #crystal-four").on("click", function(event){
	
	counter += userTotal
	$("#points").html(counter);

	if (counter === computerNum) {
		alert("You Win!");
		 winCounter = winCounter + 1;
		 console.log(winCounter);
		 $("#wins").html(winCounter);
		return winCounter;
		
	}
	else if(counter > computerNum) {

		alert("You Lose!");
		 lossCounter = lossCounter + 1;
		 console.log(lossCounter);
		 $("#losses").html(lossCounter);
		return lossCounter;
		
	}

})

//Resets the game
//Generates new numbers - Crystals needed and Crystal worth
$(".reset").on("click", function(){
gameStart();
computerGenNum();
userTotal = 0;
counter = 0;
// userTotal = counter;
	$("#points").html(userTotal);
});

});
