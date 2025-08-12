// Lista de perguntas e alternativas
const perguntas = [
    {
        pergunta: "Como você vê o futuro da inteligência artificial?",
        alternativas: [
            "A IA irá dominar todas as áreas da vida humana.",
            "A IA será uma ferramenta útil, mas controlada por humanos.",
            "A IA não terá impacto real no nosso futuro."
        ],
        resultado: "Você acredita que a IA terá um grande impacto em nossas vidas. O controle humano será essencial para garantir que as IAs não ultrapassem seus limites!"
    },
    {
        pergunta: "Você confiaria em uma IA para governar um país?",
        alternativas: [
            "Sim, uma IA tomaria decisões imparciais e precisas.",
            "Não, somente os humanos podem entender as complexidades de governar.",
            "Talvez, mas dependeria do nível de desenvolvimento da IA."
        ],
        resultado: "Governar por IA é uma ideia controversa. Embora a imparcialidade seja um benefício, a sensibilidade humana é crucial na liderança."
    },
    {
        pergunta: "Qual seria o impacto de uma IA consciente na sociedade?",
        alternativas: [
            "Uma revolução positiva com inovações nunca vistas.",
            "Uma ameaça, que precisaria ser contida imediatamente.",
            "Não haveria muito impacto, seria apenas mais uma ferramenta."
        ],
        resultado: "A IA consciente pode trazer tanto benefícios quanto desafios. O controle sobre essa tecnologia será vital para o futuro."
    },
    {
        pergunta: "Você acha que a IA pode melhorar a educação?",
        alternativas: [
            "Sim, ela pode personalizar o ensino e adaptar-se a cada aluno.",
            "Não, ela substituiria os educadores e tiraria a interação humana.",
            "A IA tem potencial, mas deve ser usada de forma equilibrada."
        ],
        resultado: "A educação pode se beneficiar muito da IA, mas é importante que ela complemente e não substitua o papel dos educadores."
    },
    {
        pergunta: "Como você acredita que a IA afetará o mercado de trabalho?",
        alternativas: [
            "Ela criará novos empregos e transformará as indústrias.",
            "Ela substituirá muitos empregos, mas criará novos tipos de trabalho.",
            "A IA não terá impacto significativo no mercado de trabalho."
        ],
        resultado: "A IA provavelmente mudará drasticamente o mercado de trabalho. A adaptação será essencial para tirar proveito das oportunidades que surgirem."
    }
];

// Elementos do HTML
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');
const novamenteBtn = document.querySelector('.novamente-btn');

// Função para exibir uma pergunta e alternativas
function exibirPergunta(pergunta) {
    caixaPerguntas.textContent = pergunta.pergunta;
    caixaAlternativas.innerHTML = '';

    pergunta.alternativas.forEach((alternativa, index) => {
        const botaoAlternativa = document.createElement('button');
        botaoAlternativa.textContent = alternativa;
        botaoAlternativa.classList.add('alternativa-btn');
        botaoAlternativa.addEventListener('click', () => mostrarResultado(pergunta.resultado));
        caixaAlternativas.appendChild(botaoAlternativa);
    });
}

// Função para exibir o resultado
function mostrarResultado(resultado) {
    textoResultado.textContent = resultado;
    caixaResultado.classList.add('mostrar');
    caixaPerguntas.style.display = 'none';
    caixaAlternativas.style.display = 'none';
}

// Função para reiniciar o jogo
function jogarNovamente() {
    caixaResultado.classList.remove('mostrar');
    caixaPerguntas.style.display = 'block';
    caixaAlternativas.style.display = 'flex';
    const perguntaAleatoria = perguntas[Math.floor(Math.random() * perguntas.length)];
    exibirPergunta(perguntaAleatoria);
}

// Inicializar o jogo
jogarNovamente();

// Adicionar o evento para o botão de jogar novamente
novamenteBtn.addEventListener('click', jogarNovamente);
