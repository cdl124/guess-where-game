

var guess = prompt('Where am I hiding a shoe?');

var applePic = document.getElementById('apple');
var bananaPic = document.getElementById('banana');
var strawberryPic = document.getElementById('strawberry');

//The answer is apple

if (guess === "apple") {
  applePic.innerHTML = "<img width='200' src='http://www.mrisakson.com/wp-content/uploads/2010/08/Shoe.jpg' />"
  applePic.className = 'correct';
  document.getElementById('answer').innerHTML = "There it is! (Just imagine it.)";
}

else if (guess === "banana") {
  bananaPic.innerHTML = "<img width='200' src='https://wikidownload.com/Download/yellow-frowny-face-symbol.jpg' />";
  bananaPic.className = 'incorrect';
  document.getElementById('answer').innerHTML = 'Sorry, not there!';
}

else if (guess === "strawberry") {
  strawberryPic.innerHTML = "<img width='200' src='https://wikidownload.com/Download/yellow-frowny-face-symbol.jpg' />";
  strawberryPic.className = 'incorrect';
  document.getElementById('answer').innerHTML = 'Sorry, not there!';
}

else {
  document.getElementById('answer').innerHTML = "Um, that wasn't a choice.";
}
