	
$(document).ready(function(){

			$("p").hide();
			$("p").fadeIn(1000);


	var randomTarget;
	var crystalsNum;
	var win = 0;
	var losses = 0;
	var theSum = 0;
	var audio = new Audio("../week-4-game/assets/images/Computer Mouse.wav");
	var backGround = new Audio("../week-4-game/assets/images/Soundimage.org.mp3");
	backGround.loop=true;
	backGround.play();
	
	function startOver() {

		theSum = 0;

		randomTarget = Math.floor(Math.random() * 102 )+ 19;

		$("#randomTarget").html("<h3>" + randomTarget + "</h3>");
		$("#score").html("<h3> " + theSum + "</h3>");
	}

	function newcrystalNum(){

		crystalsNum = Math.floor(Math.random() * 12 )+ 1;
	}
		
	var crystalsimgUrl =["assets/images/black.jpg", "assets/images/red.jpg", "assets/images/blue.jpg", "assets/images/green.jpg"];

	for (var i = 0; i < crystalsimgUrl.length; i++) {
		
	var crystalsImg = $("<img>");

	crystalsImg.attr("src", crystalsimgUrl[i]);

	crystalsImg.addClass("crystal-image img-circle");

	newcrystalNum();
	crystalsImg.attr("data-crystalvalue", crystalsNum);

	$("#crystals").append(crystalsImg);
}
	startOver();

	$(".crystal-image").on("click", function() {
		audio.play();

  	var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    theSum	+= crystalValue;
    console.log(theSum);
    $("#score").html("<h3> " + theSum + "</h3>");

    if (randomTarget === theSum) {
    	win++
    	$("#wins").html("<h3> Wins: " + win + "</h3>");
    	startOver();
    }

    if ( randomTarget < theSum){
    	
    	losses++
    	$("#losses").html("<h3> Losses: " + losses + "</h3>");
    	startOver();
    }
	});

});