class Questions {
    constructor(question, correctAnswer, answers) {
        this.question = question;
        this.correctAnswer = correctAnswer;
        this.answers = answers; // Array of answers
    }
}

let quiz = [];

quiz.push(new Questions('How many hearts does an octopus have?', 3, [4, 5, 3, 8]));
quiz.push(new Questions('Which club has won the Champions League the highest number of times?', 'Real Madrid', ['FC Barcelona', 'AC Milan', 'FC Bayern', 'Real Madrid']));
quiz.push(new Questions('How many bits make 1 byte?', 8, [4, 2, 8, 3]));
quiz.push(new Questions('What is the highest version of Windows?', 11, [10, 11, 8, 7]));
quiz.push(new Questions('Who is the richest man in the world?', 'Elon Musk', ['Dangote', 'Doh Landrine', 'Elon Musk', 'Talla Jones']));
quiz.push(new Questions('What is the capital of Nigeria?', 'Abuja', ['Lagos', 'Kano', 'Abuja', 'Enugu']));

let currentQuestionIndex = 0;

function displayQuestion(question) {
    // Update the question text
    document.querySelector('.question-div').innerText = question.question;

    // Update the answer buttons
    const buttons = document.querySelectorAll('.answer-div button');
    buttons.forEach((button, index) => {
        button.innerText = question.answers[index];
        button.onclick = () => handleAnswer(button, question.answers[index], question.correctAnswer);
    });
}

function handleAnswer(button, selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        button.style.backgroundColor = 'green';
    } else {
        button.style.backgroundColor = 'red';
    }

    setTimeout(() => {
        button.style.backgroundColor = ''; // Reset button color
        currentQuestionIndex = (currentQuestionIndex + 1) % quiz.length; // Move to the next question
        displayQuestion(quiz[currentQuestionIndex]);
    }, 1000); // Wait for 1 second before showing the next question
}

document.addEventListener('DOMContentLoaded', () => {
    // Display the first question from the quiz array
    displayQuestion(quiz[currentQuestionIndex]);
});

