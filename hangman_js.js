// variables ----------->

var words = [
  "HEMINGWAY",
  "HOSSEINI",
  "BRONTE",
  "DOSTOYEVSKI",
  "TWAIN",
  "BORGES",
  "CORTAZAR",
  "MELVILLE",
  "LOVECRAFT",
  "KING",
  "HARARI",
  "HESSE",
  "PLATH",
  "WILDE",
  "WOOLF",
  "ASIMOV",
  "HUXLEY",
  "RAND"
];
console.log(words.length);
console.log(words[0]);

// funciones ----------->

const getRandomWord = words[Math.floor(Math.random() * words.length)];
let randomWord = getRandomWord.split("");

/* buscar y declarar random en el arreglo 'words',
buscar letra dentro de la palabra,
si esta, se imprime
definir lugar de la letra,
si no, alert "intenta de nuevo" y dibujar parte del mono
depues de 'equis' intentos, game over
si se complete la palabra, alert 'felicidades' */