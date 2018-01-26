//global variables for game; randomTotal tracks num between 19-120.

var randomTotal;
var wins = 0;
var losses = 0;
var previousNum = 0;



var startOfGame = function() {
	//emptying out of crystal area for recreation
	$(".crystalArea").empty();

	var crystalImages = ["assets/images/1.jpg",
						 "assets/images/2.jpg",
						 "assets/images/3.jpg", 
						 "assets/images/4.jpg"]
	//Generate a number between 19 and 120
	randomTotal = Math.floor(Math.random()* 103) + 18;

	//ammending html to put randomTotal on the dom
	$("#result").html('Random Total Generated: ' + randomTotal);

//creation of a for loop to creat four random numbers for the crystal
	for (var i = 0; i < 4; i++){
	// creation of the random number
		var randomCrystal = Math.floor(Math.random() * 12) + 1;
	// creation of the div in html
		var crystal = $("<div>");
		// giving the div attributes of crystal and the random number
			crystal.attr({
				"class": "crystal",
				"data-generated": randomCrystal,

			});
			crystal.css({
				"background-image": "url('" + crystalImages[i] + "')",
				"background-size": "cover"

			})

	//this is appending the created divs as children to the crystalArea div in html
		$(".crystalArea").append(crystal);
	

	}
	$("#runningTotal").html("Your Total Score Is: " + previousNum);

}


startOfGame();


//creation of a click event....and test the random number in cosole
$(document).on('click', ".crystal", function() {
	console.log($(this).attr("data-generated"));

	var numberAsInt = parseInt($(this).attr("data-generated"));

	previousNum += numberAsInt;
	$("#runningTotal").html("Your Total Score Is: " + previousNum);


	

	if (previousNum > randomTotal) {
		losses++;
		$("#lose").html("Total Losses: " + losses);

		previousNum = 0;

		
		startOfGame();
		console.log("NOT A WINNER!!!");
	}

	else if(previousNum === randomTotal) {
		wins++;
		$("#win").html("Total Wins: " + wins);
		previousNum = 0;

		
		startOfGame();
		console.log("you win");
	}

	console.log(previousNum);
});

	

