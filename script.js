let attendanceCount = 0;
let formSubmitted = false;

const userInput = document.getElementById('userInput');
const submitBtn = document.getElementById('submitBtn');
const messageDiv = document.getElementById('message');
const resetBtn = document.getElementById('resetBtn');

// Submit on button click
submitBtn.addEventListener('click', processInput);

// Submit on Enter key press
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        processInput();
    }
});

function processInput() {
    const answer = userInput.value.toUpperCase().trim();
    
    // Clear previous message
    messageDiv.className = 'message';
    
    if (answer === '') {
        messageDiv.textContent = 'Please enter Y or N';
        messageDiv.classList.add('error');
        return;
    }
    
    if (answer === 'Y') {
        handleAttending();
    } else if (answer === 'N') {
        handleNotAttending();
    } else {
        messageDiv.textContent = 'Not valid input, please try again.';
        messageDiv.classList.add('error');
    }
    
    userInput.value = '';
}

function handleAttending() {
    attendanceCount++;
    messageDiv.textContent = 'SUCCESS! +1 to meet attendance tally!';
    messageDiv.classList.add('success');
    formSubmitted = true;
    showResetButton();
}

function handleNotAttending() {
    messageDiv.textContent = 'Maybe next time! 👋';
    messageDiv.classList.add('not-attending');
    
    setTimeout(() => {
        playRickRoll();
    }, 500);
    
    formSubmitted = true;
    showResetButton();
}

function showResetButton() {
    submitBtn.style.display = 'none';
    userInput.style.display = 'none';
    resetBtn.style.display = 'inline-block';
}

function playRickRoll() {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
}

resetBtn.addEventListener('click', () => {
    // Reset form
    userInput.value = '';
    messageDiv.textContent = '';
    messageDiv.className = 'message';
    formSubmitted = false;
    
    // Show input and button again
    userInput.style.display = 'block';
    submitBtn.style.display = 'inline-block';
    resetBtn.style.display = 'none';
    
    // Focus on input
    userInput.focus();
});

// Set initial focus
userInput.focus();
