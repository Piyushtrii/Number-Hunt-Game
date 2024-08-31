let randomNumber = Math.floor(Math.random() * 100) + 1;
let chancesLeft = 5;

document.getElementById('submit-btn').addEventListener('click', function() {
    const userGuess = parseInt(document.getElementById('guess-input').value);
    const feedback = document.getElementById('feedback');
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = 'Please enter a valid number between 1 and 100.';
    } else if (userGuess > randomNumber) {
        feedback.textContent = 'Your number is high';
        chancesLeft--;
    } else if (userGuess < randomNumber) {
        feedback.textContent = 'Your number is low';
        chancesLeft--;
    } else {
        feedback.textContent = `Correct! The number was ${randomNumber}. You guessed it with ${chancesLeft} chances left.`;
        document.getElementById('restart-btn').style.display = 'block';
        document.getElementById('submit-btn').disabled = true;
    }

    document.getElementById('chances-left').textContent = chancesLeft;

    if (chancesLeft <= 0 && userGuess !== randomNumber) {
        feedback.textContent = `Better luck next time! The correct number was ${randomNumber}.`;
        document.getElementById('restart-btn').style.display = 'block';
        document.getElementById('submit-btn').disabled = true;
    }
});

document.getElementById('restart-btn').addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    chancesLeft = 5;
    document.getElementById('feedback').textContent = '';
    document.getElementById('chances-left').textContent = chancesLeft;
    document.getElementById('guess-input').value = '';
    document.getElementById('submit-btn').disabled = false;
    document.getElementById('restart-btn').style.display = 'none';
});