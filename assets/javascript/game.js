//Variables:
//Computer's Generated number
var computerNum = Math.floor(Math.random() * 120) + 19;
console.log(computerNum);
//Crystal numbers
var userTotal = '';
counter = 0;
var addOne = '';
var addTwo = '';
var addThree = '';
var addFour = '';
// console.log(userTotal);
var crystalOne = Math.floor(Math.random() * 12);
var crystalTwo = Math.floor(Math.random() * 12);
var crystalThree = Math.floor(Math.random() * 12);
var crystalFour = Math.floor(Math.random() * 12);
//User Input/A way to store collective points

//Win/Loss variable
var win = 0;
var loss = 0;
//-------------------------------------
//Functions 
//Random Generator for computer number
function computerGenNum() {
	$("#computer-number").html(computerNum);
}
computerGenNum();

function winLossDisplay() {

	$("#wins").html(win);
	$("#losses").html(loss);
};

winLossDisplay();


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

})

//on-click event that adds up the points of crystals
//Win/loss determinant function, switch case statement maybe


//Additional logic