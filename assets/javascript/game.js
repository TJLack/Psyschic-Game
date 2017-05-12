





		var computerRandom = ["m","n","b","v","c","x","z","l","k","j","h","g","f","d","s","a","p","o","i","u","y","t","r","e","e","w","q"];
		var wins=0;
		var losses=0;
		var guesses=9;
		var guessesLeft=9;
		var guessedLetters =[];


		var computer = computerRandom[Math.floor(Math.random() * computerRandom.length)];
		console.log("computer random:" + computer);


		document.onkeyup = function(event){

		 var guessed = String.fromCharCode(event.keyCode).toLowerCase();
		 console.log("guess:" + guessed);

		 if(guessedLetters.indexOf(guessed) == -1){
	 		console.log("not guessed");

	  	  guessesLeft--;
	  	  document.getElementById("guessesLeft").innerHTML = guessesLeft.toString();
	  	  console.log(guessesLeft);

	guessedLetters.push(guessed);

	document.getElementById("guessedLetters").innerHTML = guessedLetters.toString();


		if (guessesLeft > 0){
			console.log("guesses left");
			      if (guessed == computer){
			          wins++;
			          document.querySelector('#wins').innerHTML = wins;
			             
			           reset();
			         }
			   else{guesses--;}
	}

				else if(guessesLeft == 0){
					console.log("no guesses left");
 
			  	  losses++;
			   	    document.querySelector('#losses').innerHTML = losses;
			            
	
			   	    reset();}
		}
	 	else{
	 		console.log("guessed");
			 }
		}

	function reset() {

  		guessesLeft = 9;
 		 guessedLetters = [];

		document.getElementById("guessesLeft").innerHTML = guessesLeft.toString();
		document.getElementById("guessedLetters").innerHTML = guessedLetters.toString();
		}

