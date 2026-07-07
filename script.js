let attendanceCount = 0;
let formSubmitted = false;

const userInput = document.getElementById('userInput');
const submitBtn = document.getElementById('submitBtn');
const messageDiv = document.getElementById('message');
const gifContainer = document.getElementById('gifContainer');
const gifPlayer = document.getElementById('gifPlayer');

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
    hideForm();
}

function handleNotAttending() {
    messageDiv.textContent = 'Maybe next time! 👋';
    messageDiv.classList.add('not-attending');
    
    setTimeout(() => {
        playGif();
    }, 500);
    
    formSubmitted = true;
    hideForm();
}

function hideForm() {
    submitBtn.style.display = 'none';
    userInput.style.display = 'none';
}

function playGif() {
    gifPlayer.src = 'https://media.giphy.com/media/Vuw9m5wXviFIQ/giphy.gif';
    gifContainer.style.display = 'block';
}

// Set initial focus
userInput.focus();