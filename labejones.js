class Questions {
    constructor(question,correctAnswer,answerA,answerB,answerC,answerD) {
        this.answerA = answerA;
        this.answerB = answerB;
        this.answerC = answerC;
        this.correctAnswer = correctAnswer;
        this.question = question;
    }
}

let quiz = [];

quiz = quiz.push(new Questions('How many hearts does an octopus have?', 8, 4, 5, 3, 8));
quiz = quiz.push(new Questions('which club has won champions league the highest number of times?', 'Real Madrid', 'FC Barcelona', 'AC Milan', 'FC Bayern', 'Real Madrid'));
quiz = quiz.push(new Questions('How many bits makes 1 byte?', 8, 4, 2, 8, 3));
quiz = quiz.push(new Questions('What is the highest version of windows?', 11, 10, 11, 8, 7));
quiz = quiz.push(new Questions('Who is the richest man in the world?', 'Elon Musk', 'Dangote', 'Doh Landrine', 'Elon Musk', 'Talla Jones'));