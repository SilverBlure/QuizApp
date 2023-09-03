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
function init() {

    document.getElementById('allQuestions').innerHTML = questions.length;
    showSite();
}

function showSite() {
    if (currentQuestion >= questions.length) {
        document.getElementById('picture').classList.add('d-none');
        document.getElementById('endScreen').style = '';
        document.getElementById('quizQuestionBody').style = 'display: none;'
        document.getElementById('rightAnswers').innerHTML = rightAnswers;
        document.getElementById('possibleQuestions').innerHTML = questions.length;
    } else {
        let question = questions[currentQuestion];

        let percent = currentQuestion / questions.length;
        console.log('Fortschritt', percent);
        percent = percent * 100;
        console.log('Fortschritt', percent);
        document.getElementById('progress-bar').innerHTML = `${percent}%`;
        document.getElementById('progress-bar').style = `width: ${percent}%`;


        document.getElementById('questionNumber').innerHTML = currentQuestion + 1;
        document.getElementById('questions').innerHTML = question["question"];
        document.getElementById('answer_1').innerHTML = question["answer_1"];
        document.getElementById('answer_2').innerHTML = question["answer_2"];
        document.getElementById('answer_3').innerHTML = question["answer_3"];
        document.getElementById('answer_4').innerHTML = question["answer_4"];
    }
}
function answer(selection) {

    let question = questions[currentQuestion];
    console.log('Selectet answer is ', selection);
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selectedQuestionNumber is ', selectedQuestionNumber);
    console.log('current question is', question['result']);

    let idOfRightAnwer = `answer_${question['result']}`;


    if (selectedQuestionNumber == question['result']) {
        console.log('Deine Antwort ist Richtig!');
        rightAnswers++;
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        console.log('Deine Antwort ist Falsch!!');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnwer).parentNode.classList.add('bg-success');

    }
    document.getElementById('next').disabled = false;
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