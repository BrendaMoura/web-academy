const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const storyText =
  "Enquato assistia :insertx:, :inserty: notou algo :insertz:, acontece que alguém estava ouvindo a abertura de :insertx: em cima de um prédio azul e carregando uma televisão de 300 libras, mesmo que hoje a temperatura esteja 94 fahrenheit. Bob está em dúvida se deve chamar a Liga da Justiça!";

const insertX = [
  "Strange Things",
  "Kin's Convenience",
  "Doctor Who",
  "Good Girls",
  "Mandaloriano",
  "Big Brother Brasil",
  "The Big Bang Theory",
  "House",
  "9-1-1",
  "The Untamed",
];

const insertY = [
  "Tio Patinhas",
  "Minnie",
  "Moana",
  "Santa Klaus",
  "Cinderela",
  "Branca de Neve",
  "José Bezerra",
  "Mulan",
  "Lady Gaga",
  "Pateta",
];

const insertZ = [
  "divertido",
  "engraçado",
  "estranho",
  "assustador",
  "bonito",
  "interessante",
  "horrível",
  "emocionante",
  "decadente",
  "perigoso",
];

randomize.addEventListener("click", result);

function result() {
  const xItem = randomValueFromArray(insertX),
    yItem = randomValueFromArray(insertY),
    zItem = randomValueFromArray(insertZ);

  var newStory = storyText
    .replace(":insertx:", xItem)
    .replace(":insertx:", xItem)
    .replace(":inserty:", yItem)
    .replace(":insertz:", zItem);

  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14) + " stone";
    const temperature = Math.round(((94 - 32) * 5) / 9) + " centigrade";

    newStory = newStory
      .replace("300 libras", weight)
      .replace("94 fahrenheit", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}
