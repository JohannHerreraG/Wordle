const secretWord = "AYLEEN";
let attempts = 6;

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const feedbackDiv = document.getElementById("feedback");

guessButton.addEventListener("click", () => {
  const guess = guessInput.value.toUpperCase();
  if (guess.length !== 6) {
    feedbackDiv.textContent = "Please enter a 6-letter word.";
    return;
  }

  let greenCount = 0;
  let yellowCount = 0;
  let correctLetters = [];

  for (let i = 0; i < 6; i++) {
    if (guess[i] === secretWord[i]) {
      greenCount++;
      correctLetters.push(guess[i]);
    } else if (secretWord.includes(guess[i])) {
      yellowCount++;
    }
  }

  if (greenCount === 6) {
    feedbackDiv.textContent = `Congratulations! You guessed the word: ${secretWord}`;
  } else {
    const formattedFeedback = ` Words Correct: ${greenCount} , Words Incorrecty: ${yellowCount} , ${formatCorrectLetters(correctLetters)}`;
    feedbackDiv.textContent = formattedFeedback;
    attempts--;
    if (attempts === 0) {
      feedbackDiv.textContent = `Sorry, you're out of attempts. The word was ${secretWord}`;
      guessButton.disabled = true;
    }
  }
});

function formatCorrectLetters(correctLetters) {
  return correctLetters.length > 0 ? `Correct letters: ${correctLetters.join(", ")}` : "No correct letters.";
}
