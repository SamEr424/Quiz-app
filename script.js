const quizData = [
    { 
        question: 'what year was javascript launched?',
        a: '2020',
        b: '2019',
        c: '2018',
        d: 'none of the above',
        correct: 'd'
}, {  
        question: 'how old is kenya?',
        a: '20',
        b: '30',
        c: '60',
        d: 'none of the above',
        correct: 'c'
}, {
        question: 'who is the president of the US?',
        a: 'Joe',
        b: 'FDR',
        c: 'Trump',
        d: 'Bush',
        correct: 'a'
}, {
        question: 'who is Travis Pastrana?',
        a: 'dirt biker',
        b: 'stuntman',
        c: 'racedriver',
        d: 'all of the above',
        correct: 'd'
}, {
        question: 'what year is it?',
        a: '2020',
        b: '2019',
        c: '2023',
        d: 'none of the above',
        correct: 'c'
}
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");


const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz(){
    deselectAnswer();

    const currentQuizData = quizData[currentQuiz];
    

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    
}

function getSelected(){
   

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    

    return answer;
}

function deselectAnswer() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


submitBtn.addEventListener("click", () => {
    
    const answer = getSelected();

    console.log(answer);

    if(answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                quiz.innerHTML = `<h2> You answered correctly at ${score}/${quizData.length} questions.</h2> <button onclick="location.reload()">Reload</button>`;
            }
        
    }

    //if (currentQuiz < quizData.length) {
    //    loadQuiz();
    //} else {
    //    alert("You finished! Get yourself a madafu");
    //}

    



});