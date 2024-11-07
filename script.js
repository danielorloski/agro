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

// Evento para iniciar o quiz
document.getElementById('start-button').addEventListener('click', startQuiz);

// Evento para passar para a próxima pergunta
document.getElementById('next-button').addEventListener('click', showNextQuestion);

function startQuiz() {
    // Esconde o botão de início e mostra a seção de perguntas
    document.getElementById('start-button').classList.add('hidden');
    document.getElementById('qa-section').classList.remove('hidden');
    
    // Exibe a primeira pergunta
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];

    // Exibe a pergunta atual
    document.getElementById('question').innerText = question.question;

    // Preenche as opções de resposta
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';  // Limpa as opções anteriores

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        
        // Adiciona evento de clique para verificar a resposta
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });

    // Esconde a mensagem de resposta e o botão "Próxima"
    document.getElementById('next-button').classList.add('hidden');
    document.getElementById('response').classList.add('hidden');
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    const responseDiv = document.getElementById('response');
    
    // Verifica se a resposta está correta
    if (selectedOption === question.answer) {
        responseDiv.innerText = "Correto!";
    } else {
        responseDiv.innerText = `Incorreto! A resposta correta é: ${question.answer}`;
    }

    // Exibe a resposta e o botão "Próxima"
    responseDiv.classList.remove('hidden');
    document.getElementById('next-button').classList.remove('hidden');
}

function showNextQuestion() {
    currentQuestionIndex++;

    // Se houver mais perguntas, mostra a próxima
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        // Caso contrário, exibe uma mensagem de fim de quiz
        document.getElementById('qa-section').innerHTML = "<h2>Fim do Quiz! Obrigado por participar!</h2>";
    }
}
