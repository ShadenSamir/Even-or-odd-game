let Attempts = 0;
let Score = 0;

function guess(userGuess) {
  Attempts++;
  document.getElementById("Attemp").innerHTML = Attempts;

  const RandomNumber = Math.floor(Math.random() * 100) + 1;

  const CorrectAnswer = RandomNumber % 2 == 0 ? "even" : "odd";

  function PlaySound(isCorrect) {
    const sound = isCorrect
      ? document.getElementById("correctSFX")
      : document.getElementById("wrongSFX");
    sound.pause();
    sound.currentTime = 0;
    sound.play();
  }

  if (userGuess == CorrectAnswer) {
    Score++;
    document.getElementById("userScore").innerHTML = Score;
    document.getElementById(
      "heading"
    ).innerText = `Correct! The number was ${RandomNumber} `;
    PlaySound(true);
  } else {
    document.getElementById(
      "heading"
    ).innerText = `Wrong! The number was ${RandomNumber} `;
    PlaySound(false);
  }
}
