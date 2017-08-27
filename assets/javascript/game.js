//Variables:
//Computer's Generated number
var computerNum = Math.floor(Math.random() * 101) + 19;
console.log(computerNum);
//Crystal numbers
var userTotal = '';
counter = 0;
win = '';
loss = '';
var addOne = '';
var addTwo = '';
var addThree = '';
var addFour = '';
// console.log(userTotal);
var crystalOne = Math.floor(Math.random() * 12 + 1);
var crystalTwo = Math.floor(Math.random() * 12 + 1);
var crystalThree = Math.floor(Math.random() * 12 + 1);
var crystalFour = Math.floor(Math.random() * 12 + 1);
//User Input/A way to store collective points

//Win/Loss variable
var winCounter = 0;
var lossCounter = 0;
//-------------------------------------
//Functions 
//Random Generator for computer number
$( document ).ready(function() {

function gametart() {
return computerNum;
return crystalOne;
return crystalTwo;
return crystalThree; 
return crystalFour;
}



function computerGenNum() {

	$("#computer-number").html(computerNum);
}
computerGenNum();


//Generator for Crystal points

$("#crystal-one").on("click", function(event){
	 // addOne = crystalOne;
	 userTotal = crystalOne;
	console.log(userTotal);
	return userTotal;
});

$("#crystal-two").on("click", function(event){
	 // addTwo = crystalTwo;
	 userTotal = crystalTwo;
	console.log(userTotal);
	return userTotal;
});

$("#crystal-three").on("click", function(event){
	 userTotal = crystalThree;
	console.log(userTotal);
	return userTotal;
});

$("#crystal-four").on("click", function(event){
	 userTotal = crystalFour;
	console.log(userTotal);
	return userTotal;
});

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

$(".reset").on("click", function(){
counter = 0;
});

});



// function winLossDisplay() {
// 	// winCounter += win;
// 	// lossCounter += loss;
	
	

	
// };

// winLossDisplay();

//on-click event that adds up the points of crystals
//Win/loss determinant function, switch case statement maybe


//Additional logic