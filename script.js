let questions = [
    {
      "question": "Was ist die Hauptstadt von Deutschland?",
      "answer_1": "Berlin",
      "answer_2": "München",
      "answer_3": "Hamburg",
      "answer_4": "Köln",
      "result": "Berlin"
    },
    {
      "question": "Wie viele Tage hat ein Jahr?",
      "answer_1": "365",
      "answer_2": "366",
      "answer_3": "364",
      "answer_4": "360",
      "result": "365"
    },
    {
      "question": "Was ist die größte planetarische Anhäufung von Sand in der Welt?",
      "answer_1": "Sahara-Wüste",
      "answer_2": "Gobi-Wüste",
      "answer_3": "Atacama-Wüste",
      "answer_4": "Kalahari-Wüste",
      "result": "Sahara-Wüste"
    },
    {
      "question": "Wer schrieb 'Romeo und Julia'?",
      "answer_1": "Charles Dickens",
      "answer_2": "William Shakespeare",
      "answer_3": "Mark Twain",
      "answer_4": "Jane Austen",
      "result": "William Shakespeare"
    },
    {
      "question": "Welches Gas atmen Pflanzen ein und welches geben sie aus?",
      "answer_1": "Sauerstoff ein, Kohlendioxid aus",
      "answer_2": "Kohlendioxid ein, Sauerstoff aus",
      "answer_3": "Stickstoff ein, Sauerstoff aus",
      "answer_4": "Wasserstoff ein, Sauerstoff aus",
      "result": "Kohlendioxid ein, Sauerstoff aus"
    },
    {
      "question": "Was ist die Hauptkomponente der Erdatmosphäre?",
      "answer_1": "Stickstoff",
      "answer_2": "Sauerstoff",
      "answer_3": "Kohlendioxid",
      "answer_4": "Wasserstoff",
      "result": "Stickstoff"
    },
    {
      "question": "Was ist die größte Insel der Welt?",
      "answer_1": "Hawaii",
      "answer_2": "Madagaskar",
      "answer_3": "Australien",
      "answer_4": "Grönland",
      "result": "Grönland"
    },
    {
      "question": "Wie viele Millimeter sind in einem Zentimeter?",
      "answer_1": "10",
      "answer_2": "100",
      "answer_3": "1.000",
      "answer_4": "100.000",
      "result": "10"
    },
    {
      "question": "Welches Element hat die chemische Bezeichnung 'Fe'?",
      "answer_1": "Fluor",
      "answer_2": "Eisen",
      "answer_3": "Kalium",
      "answer_4": "Natrium",
      "result": "Eisen"
    },
    {
      "question": "Wie viele Kontinente gibt es auf der Erde?",
      "answer_1": "5",
      "answer_2": "6",
      "answer_3": "7",
      "answer_4": "8",
      "result": "7"
    }
  ];

let currentQuestion = 0;

  function init(){
   
    document.getElementById('allQuestions').innerHTML = questions.length;
    showSite();
  }

  function showSite(){
    let question = questions[currentQuestion];
    
    document.getElementById('Questions').innerHTML = question["question"];
    document.getElementById('answer_1').innerHTML = question["answer_1"];
    document.getElementById('answer_2').innerHTML = question["answer_2"];
    document.getElementById('answer_3').innerHTML = question["answer_3"];
    document.getElementById('answer_4').innerHTML = question["answer_4"];
  }