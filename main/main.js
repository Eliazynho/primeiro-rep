let timer;
let seconds = 30;

function startTimer() {
  //Timer 30 sec
  clearInterval(timer);
  seconds = 30;
  document.getElementById("timer").textContent = seconds;
  document.getElementById("result").style.display = "block"; // Garantir que o botão está visível

  timer = setInterval(function () {
    seconds--;
    document.getElementById("timer").textContent = seconds;

    if (seconds <= 0) {
      clearInterval(timer);
      document.getElementById("timer").textContent = "Tempo Esgotado!";
      document.getElementById("result").style.display = "none"; // Ocultar o botão
    }
  }, 1000);
}

const questions = [
  {
    // coloque aqui as questões matendo o mesmo padrão
    pergunta: "Qual a capital da frança?",
    alternativas: ["Paris", "Cubatão", "Berlim"],
    correta: "Paris",
  },
  {
    pergunta: "Qual a capital da portugal?",
    alternativas: ["Portugal", "Cubatão", "Berlim"],
    correta: "Portugal",
  },
  {
    pergunta: "Qual a capital da argentina?",
    alternativas: ["Paris", "Buenos aires", "Berlim"],
    correta: "Buenos aires",
  },
];

function questionText() {
  // aqui deixa as perguntas aleatorias
  const indexAleat = Math.floor(Math.random() * questions.length);
  let question = questions[indexAleat];

  document.getElementById("question").textContent = question.pergunta;

  const formText = document.getElementById("formulario"); // e aqui bota no html
  formText.innerHTML = "";
  question.alternativas.forEach((alternativa, index) => {
    formText.innerHTML += `<input type="radio" name="alternativa" value="${alternativa}" id="alternativa${index}" /> <label for="alternativa${index}">${alternativa}</label>`;
  });
}

function gifMario() {
  // O GIF DA VITORIA
  const div = document.getElementById("gifMario");

  const imgGif = new Image();
  imgGif.src = "/assets/star-spinning.gif";

  div.appendChild(imgGif);
}

function confirmQuestion() {
  // conferir se ta certo
  const altSelect = document.querySelector('input[name="alternativa"]:checked');
  const result = document.getElementById("resultado");
  const resultTry = document.getElementById('resultado-errado')
  const resultGif = document.getElementById("resultadoGif");

  if (altSelect) {
    const quest = questions.find(
      (p) => p.pergunta === document.getElementById("question").textContent
    );
    if (altSelect.value === quest.correta) {
      result.textContent = "Cuida em pegar seu cupom!";
      gifMario();
    } else {
      resultTry.textContent = "Tente Novamente";
    }
    document.querySelector("button").disabled = true;
  } else {
    alert("MARCA UMA MIZERA");
  }
}

function start() {
  //Coloque aqui tudo que inicia com a pagina
  startTimer();
  questionText();
}

// Iniciar tudo ao carregar a página
window.onload = start;
