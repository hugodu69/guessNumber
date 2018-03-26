/*si la div globale est un form le innerHTML ne marche pas, mais
s'il n'est pas un form c'est le reset button qui ne marche pas...*/
/*creation de la variable a deviner*/
var number = Math.floor((Math.random() * 100) + 1);
/*on place le curseur automatiquement dans l'input*/
document.getElementById("guess").focus();
/*pour que la touche entree valide le nombre*/
document.getElementById("guess").addEventListener("keypress", enter);
function enter(event) {
	if (event.keyCode === 13) {guessNumber()}
}
/*on verifie si quelque chose a ete ecrit dans le champ de texte*/
document.getElementById("guess").addEventListener("input", isEmpty);
function isEmpty() {
	var checkGuess = document.getElementById("guess").value;
	if (checkGuess === '') {document.getElementById("clear").disabled = true;}
	else {document.getElementById("clear").disabled = false;}
}
/*la fonction qui vide le Guess*/
function guessClear() {
	document.getElementById("guess").value = '';
	document.getElementById("clear").disabled = true;
}
/*la fonction appelee au clic du bouton Guess*/
function guessNumber() {
	console.log(number);
	/*on recupere la valeur du champ de texte*/
	var guess = parseInt(document.getElementById("guess").value);
	/*on lance la fonction qui réinitialize le champs de recherche*/
	guessClear();
	/*on débloque le deuxieme bouton reset*/
	document.getElementById("reset").disabled = false;
	/*si la valeur n'est pas un nombre -> message d'erreur*/
	if (isNaN(guess)) {
		document.getElementById("result").innerHTML = "concentre toiiii !!! c'est un nombre ça peut-être ??";
		document.getElementById("feedback").innerHTML = '';
	}
	/*si la valeur n'est pas comprise entre 1 et 100 -> message d'erreur*/
	else if (guess > 100 || guess < 1) {
		document.getElementById("result").innerHTML = 'ok... reprenons. tu dois deviner un nombre compris entre ZERO ET CENT !!';
		document.getElementById("feedback").innerHTML = '';
	}
	/*si la valeur est un nombre entre 1 et 100*/
	else {
		document.getElementById("result").innerHTML = guess;
		if (guess === number) {
			document.getElementById("feedback").innerHTML = 'BOOM!';
		}
		if (guess > number) {
			document.getElementById("feedback").innerHTML = 'That is too high';
		}
		if (guess < number) {
			document.getElementById("feedback").innerHTML = 'That is too low';
		}
	}
}
/*la fonction qui reset tout le jeu*/
function guessReset() {
	document.getElementById("guess").value = '';
	document.getElementById("feedback").innerHTML = '';
	document.getElementById("result").innerHTML = '';
	document.getElementById("reset").disabled = true;
	number = Math.floor((Math.random() * 100) + 1);
}
