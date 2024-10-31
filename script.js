const questions = [
    {
        question: "Quem é o atual ministro da Agricultura e Pecuária?",
        options: ["Luis Inácio", "Carlos Fávaro", "Ricardo Nunes"],
        answer: "Carlos Fávaro"
    },
    {
        question: "Qual é a principal cultura agrícola do Brasil?",
        options: ["Café", "Soja", "Milho"],
        answer: "Soja"
    },
    {
        question: "O que é a Embrapa?",
        options: ["Uma escola", "Uma empresa de pesquisa agropecuária", "Um sindicato"],
        answer: "Uma empresa de pesquisa agropecuária"
    },
    {
        question: "Qual estado é o maior produtor de milho no Brasil?",
        options: ["Minas Gerais", "Paraná", "São Paulo"],
        answer: "Paraná"
    },
    {
        question: "Qual a importância do agronegócio para a economia brasileira?",
        options: ["Nenhuma", "Fundamental", "Secundária"],
        answer: "Fundamental"
    }
];

let currentQuestionIndex = 0;

document.getElementById('start-button').addEventListener('click', startQuiz);
document.getElementById('next-button').addEventListener('click', showNextQuestion);

function startQuiz() {
    document.getElementById('start-button').classList.add('hidden');
    document.getElementById('qa-section').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });

    document.getElementById('next-button').classList.add('hidden');
    document.getElementById('response').classList.add('hidden');
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    const responseDiv = document.getElementById('response');
    
    if (selectedOption === question.answer) {
        responseDiv.innerText = "Correto!";
    } else {
        responseDiv.innerText = `Incorreto! A resposta correta é: ${question.answer}`;
    }

    responseDiv.classList.remove('hidden');
    document.getElementById('next-button').classList.remove('hidden');
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        document.getElementById('qa-section').innerHTML = "<h2>Fim do Quiz! Obrigado por participar!</h2>";
    }
}
