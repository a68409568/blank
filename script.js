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
    
    // Clear previous message and styles
    messageDiv.className = 'message';
    messageDiv.style.color = 'black';
    messageDiv.style.backgroundColor = 'white';
    
    if (answer === '') {
        messageDiv.textContent = 'Please enter Y or N';
        messageDiv.classList.add('error');
        messageDiv.style.color = 'white';
        messageDiv.style.backgroundColor = 'black';
        return;
    }
    
    if (answer === 'Y') {
        handleAttending();
    } else if (answer === 'N') {
        handleNotAttending();
    } else {
        messageDiv.textContent = 'Not valid input, please try again.';
        messageDiv.classList.add('error');
        messageDiv.style.color = 'white';
        messageDiv.style.backgroundColor = 'black';
    }
    
    userInput.value = '';
}

function handleAttending() {
    attendanceCount++;
    messageDiv.textContent = 'SUCCESS! +1 to meet attendance tally!';
    messageDiv.classList.add('success');
    messageDiv.style.color = 'black';
    messageDiv.style.backgroundColor = 'white';
    formSubmitted = true;
    hideForm();
}

function handleNotAttending() {
    messageDiv.textContent = 'Maybe next time! 👋';
    messageDiv.classList.add('not-attending');
    messageDiv.style.color = 'black';
    messageDiv.style.backgroundColor = 'white';
    
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