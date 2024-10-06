const quizData = [
    {
        question: "What are asteroids primarily made of?",
        a: "Ice and dust", 
        b: "Gas and plasma", 
        c: "Rock and metal", 
        d: "Hydrogen and helium",
        correct: "c"
    },
    {
        question: "Where do most asteroids orbit the Sun?",
        a: "The Oort Cloud", 
        b: "The Kuiper Belt", 
        c: "The Asteroid Belt between Mars and Jupiter", 
        d: "Beyond Neptune's orbit",
        correct: "c"
    },
    {
        question: "What is the name of the largest asteroid in our solar system?",
        a: "Eros", 
        b: "Ceres", 
        c: "Vesta", 
        d: "Pallas",
        correct: "b"
    },
    {
        question: "What is the most common element in the universe?",
        a: "Oxygen", 
        b: "Hydrogen", 
        c: "Helium", 
        d: "Carbon",
        correct: "b"
    },
    {
        question: "Which planet is tilted on its side?",
        a: "Neptune", 
        b: "Saturn", 
        c: "Uranus", 
        d: "Pluto",
        correct: "c"
    },
    {
        question: "What is the hottest planet in the solar system?",
        a: "Mercury", 
        b: "Venus", 
        c: "Earth", 
        d: "Mars",
        correct: "b"
    },
    {
        question: "What is the name of NASA's most famous space telescope?",
        a: "Chandra", 
        b: "Kepler", 
        c: "Hubble", 
        d: "James Webb",
        correct: "c"
    },
    {
        question: "What is the smallest planet in our solar system?",
        a: "Mercury", 
        b: "Mars", 
        c: "Venus", 
        d: "Pluto",
        correct: "a"
    },
    {
        question: "What are comets primarily made of?",
        a: "Ice and dust", 
        b: "Rock and metal", 
        c: "Plasma and gas", 
        d: "Molten lava",
        correct: "a"
    },
    {
        question: "What part of a comet becomes visible when it's near the Sun?",
        a: "Its core", 
        b: "Its nucleus", 
        c: "Its tail", 
        d: "Its mantle",
        correct: "c"
    },
    {
        question: "What part of a comet becomes visible when it's near the Sun?",
        a: "Its core", 
        b: "Its nucleus", 
        c: "Its tail", 
        d: "Its mantle",
        correct: "c"
    },
    {
        question: "Which space mission was the first to land on an asteroid?",
        a: "Rosetta", 
        b: "Voyager 1", 
        c: "OSIRIS-REx", 
        d: "NEAR Shoemaker",
        correct: "d"
    },
    {
        question: "Where do short-period comets typically originate?",
        a: "The Kuiper Belt", 
        b: "The Oort Cloud", 
        c: "The asteroid belt", 
        d: "The Solar Wind",
        correct: "a"
    },
    {
        question: "Which of these best describes an asteroid?",
        a: "A small, rocky object orbiting the Sun", 
        b: "A cloud of gas and dust", 
        c: "A bright streak in the sky", 
        d: "A frozen body from the outer solar system",
        correct: "a"
    },
    {
        question: "Which of the following has a highly elliptical orbit?",
        a: "Asteroids", 
        b: "Comets", 
        c: "Planets", 
        d: "Satellites",
        correct: "b"
    },
    {
        question: "Which of these is believed to have caused the extinction of the dinosaurs?",
        a: "A volcanic eruption", 
        b: "An asteroid impact", 
        c: "A comet impact", 
        d: "A supernova explosion",
        correct: "b"
    },
    {
        question: "Which of these objects is known to produce meteor showers?",
        a: "Asteroids", 
        b: "Planets", 
        c: "Comets", 
        d: "Moons",
        correct: "c"
    },
    {
        question: "What is the primary source of long-period comets?",
        a: "The Kuiper Belt", 
        b: "The Oort Cloud", 
        c: "The Asteroid Belt", 
        d: "The Solar Wind",
        correct: "b"
    },
    {
        question: "Which comet is famous for being visible from Earth every 76 years?",
        a: "Comet Hale-Bopp", 
        b: "Comet Encke", 
        c: "Halley's Comet", 
        d: "Comet Tempel",
        correct: "c"
    },
    {
        question: "What is a meteoroid?",
        a: "A fragment of an asteroid or comet traveling in space", 
        b: "A meteor that burns up in Earth's atmosphere", 
        c: "A meteorite that has landed on Earth's surface", 
        d: "A space rock that impacts the Sun",
        correct: "a"
    },
    {
        question: "What is the name of the first spacecraft to return samples from an asteroid?",
        a: "Rosetta", 
        b: "Hayabusa", 
        c: "Cassini", 
        d: "Voyager",
        correct: "b"
    },
    
];

const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const resultBox = document.getElementById('result');
const scoreText = document.getElementById('score');
const reloadBtn = document.getElementById('reload');
const feedback = document.getElementById('feedback');

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    deselectAnswers();
    feedback.innerText = '';  
    submitBtn.style.backgroundColor = '';  

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
            feedback.innerText = "Correct!";
            feedback.style.color = "green";
            submitBtn.style.backgroundColor = "green";  
        } else {
            feedback.innerText = `Wrong! Correct answer is "${quizData[currentQuiz][quizData[currentQuiz].correct]}"`;
            feedback.style.color = "red";
            submitBtn.style.backgroundColor = "red";  
        }

        currentQuiz++;

        setTimeout(() => {
            if (currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                quiz.style.display = 'none';
                resultBox.style.display = 'block';
                scoreText.innerText = `You answered ${score}/${quizData.length} questions correctly.`;
            }
        }, 2000); 
}});

reloadBtn.addEventListener('click', () => {
    currentQuiz = 0;
    score = 0;
    resultBox.style.display = 'none';
    quiz.style.display = 'block';
    loadQuiz();
});

loadQuiz();