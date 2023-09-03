let questions = [
    {
        "question": "Was ist die Hauptstadt von Deutschland?",
        "answer_1": "Berlin",
        "answer_2": "München",
        "answer_3": "Hamburg",
        "answer_4": "Köln",
        "result": "1"
    },
    {
        "question": "Wie viele Tage hat ein Jahr?",
        "answer_1": "365",
        "answer_2": "366",
        "answer_3": "364",
        "answer_4": "360",
        "result": "1"
    },
    {
        "question": "Was ist die größte planetarische Anhäufung von Sand in der Welt?",
        "answer_1": "Sahara-Wüste",
        "answer_2": "Gobi-Wüste",
        "answer_3": "Atacama-Wüste",
        "answer_4": "Kalahari-Wüste",
        "result": "1"
    },
    {
        "question": "Wer schrieb 'Romeo und Julia'?",
        "answer_1": "Charles Dickens",
        "answer_2": "William Shakespeare",
        "answer_3": "Mark Twain",
        "answer_4": "Jane Austen",
        "result": "2"
    },
    {
        "question": "Welches Gas atmen Pflanzen ein und welches geben sie aus?",
        "answer_1": "Sauerstoff ein, Kohlendioxid aus",
        "answer_2": "Kohlendioxid ein, Sauerstoff aus",
        "answer_3": "Stickstoff ein, Sauerstoff aus",
        "answer_4": "Wasserstoff ein, Sauerstoff aus",
        "result": "2"
    },
    {
        "question": "Was ist die Hauptkomponente der Erdatmosphäre?",
        "answer_1": "Stickstoff",
        "answer_2": "Sauerstoff",
        "answer_3": "Kohlendioxid",
        "answer_4": "Wasserstoff",
        "result": "1"
    },
    {
        "question": "Was ist die größte Insel der Welt?",
        "answer_1": "Hawaii",
        "answer_2": "Madagaskar",
        "answer_3": "Australien",
        "answer_4": "Grönland",
        "result": "4"
    },
    {
        "question": "Wie viele Millimeter sind in einem Zentimeter?",
        "answer_1": "10",
        "answer_2": "100",
        "answer_3": "1.000",
        "answer_4": "100.000",
        "result": "1"
    },
    {
        "question": "Welches Element hat die chemische Bezeichnung 'Fe'?",
        "answer_1": "Fluor",
        "answer_2": "Eisen",
        "answer_3": "Kalium",
        "answer_4": "Natrium",
        "result": "2"
    },
    {
        "question": "Wie viele Kontinente gibt es auf der Erde?",
        "answer_1": "5",
        "answer_2": "6",
        "answer_3": "7",
        "answer_4": "8",
        "result": "3"
    }
];

let currentQuestion = 0;
let rightAnswers = 0;
let fail = new Audio('audio/wrong.mp3');
let success = new Audio('audio/success.mp3');

function init() {
    document.getElementById('allQuestions').innerHTML = questions.length;
    showSite();
}

function showSite() {
    if (gameIsOver()) {
        showEndScreen();
    } else {
        updateProgressBar();
        updateToNextQuestion();
    }
}
function gameIsOver(){
    return currentQuestion >= questions.length;
}
function answer(selection) {

    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnwer = `answer_${question['result']}`;


    if (answerSelection(selectedQuestionNumber, question)) {
        console.log('Deine Antwort ist Richtig!');
        rightAnswers++;
        document.getElementById(selection).parentNode.classList.add('bg-success');
        success.play();
    } else {
        console.log('Deine Antwort ist Falsch!!');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnwer).parentNode.classList.add('bg-success');
        fail.play();

    }
    document.getElementById('next').disabled = false;
}
function answerSelection(selectedQuestionNumber, question){
    return selectedQuestionNumber == question['result'];
}
function nextQuestion() {
    currentQuestion++;
    resetButtons()
    showSite();

}
function resetButtons() {
    document.getElementById('next').disabled = true;
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}
function playAgain(){
    currentQuestion = 0;
    rightAnswers = 0;
    document.getElementById('picture').src= 'img/bulb.jpg';
    document.getElementById('quizQuestionBody').style = '';
    document.getElementById('endScreen').style = 'display: none';
    init();
}
function showEndScreen(){
    document.getElementById('picture').src="img/trophy.png"
    document.getElementById('endScreen').style = '';
    document.getElementById('quizQuestionBody').style = 'display: none;'
    document.getElementById('rightAnswers').innerHTML = rightAnswers;
    document.getElementById('possibleQuestions').innerHTML = questions.length;
}

function updateToNextQuestion(){
    let question = questions[currentQuestion];
        document.getElementById('questionNumber').innerHTML = currentQuestion + 1;
        document.getElementById('questions').innerHTML = question["question"];
        document.getElementById('answer_1').innerHTML = question["answer_1"];
        document.getElementById('answer_2').innerHTML = question["answer_2"];
        document.getElementById('answer_3').innerHTML = question["answer_3"];
        document.getElementById('answer_4').innerHTML = question["answer_4"];
}
function updateProgressBar(){
    let percent = currentQuestion / questions.length;
    percent = percent * 100;
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%`;
}