const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionsContainerEl = document.getElementById('questionsCon');

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

var score = 0;

let shuffledQuestions, currentQuestionIndex;

const questions = [
    {
        question: 'Which is a function ?',
        answers: [
        { text: 'funcion ()', correct: true },
        { text: 'method ()', correct: false },
        { text: 'variable ()', correct: false },
        { text: 'class ()', correct: false }
        ]
    },
    {
        question: 'Who made this test',
        answers: [
        { text: 'Reggie', correct: true },
        { text: 'The professor', correct: false },
        { text: 'Some rando on stack overflow ', correct: false },
        { text: 'Some student I paid', correct: false }
        ]
    },
    {
        question: 'Best coffee?',
        answers: [
        { text: 'Latte', correct: false },
        { text: 'Black', correct: true },
        { text: 'Espresso', correct: false },
        { text: 'Mocha', correct: false }
        ]
    },
    {
        question: 'Best Ice Cream?',
        answers: [
        { text: 'Chocolate', correct: false },
        { text: 'Cookies and Cream', correct: true },
        { text: 'Mint Chocolate Chip', correct: false },
        { text: 'Strawberry', correct: false }
        ]
    }
]

startButton.addEventListener('click',startGame);

// Timer 
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        if(seconds === 0) {
            alert('Game Over!')
        }
    }, 1000);
}

startButton.addEventListener('click',startGame);
startButton.addEventListener("click", function() {
    var twoMinutes = 60 * 2,
        display = document.querySelector('#time');
    startTimer(twoMinutes, display);
});

// Start The Questions 
function startGame() {
    
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    questionsContainerEl.classList.remove('hide');
    currentQuestionsIndex = 0;
    nextQuestion();
    nextButton.classList.remove('hide')

}

function showQuestion(questions) {
    questionElement.innerText = questions.question
    console.log(questions)
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
}


// Reset 
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

// Test Loop
function questionsloop(questions) {

    for (var i = 0; i < questions.length; i ++);
    questions.innerText('#question');
    if (answer.correct) {
        button.dataset.correct = answer.correct
        score ++;
    }
    score.innerText('Correct')

}

// Next Questions 
function nextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    
}
