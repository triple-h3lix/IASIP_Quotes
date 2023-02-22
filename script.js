// TODO: create .json file that contains quotes and character name, get random quote from .json file, display inside div, and based on character name, change background of the page to an image of the source character

const quotes = [
  {
    quote:
      "Roxy, God Bless you. You were a good whore, you serviced me like no other whore ever did; not only my crank, but my heart; and I`m gonna miss you. AMEN.",
    character: "Frank Reynolds",
  },

  {
    quote: "Block the wind while I roast this bone.",
    character: "Frank Reynolds",
  },

  {
    quote:
      "I don’t know how many years I got left on this planet, I’m going to get real weird with it.",
    character: "Frank Reynolds",
  },

  {
    quote: "I eat stickers all the time, dude!",
    character: "Charlie Kelly",
  },

  {
    quote:
      "What is this word 'spa'? I feel like you're starting to say a word and you're not finishing it. Are you trying to say 'Spagetti'? Are you taking me for a spaghetti day?",
    character: "Charlie Kelly",
  },

  {
    quote:
      "Alright well I'm gonna check it out anyway, there could be something delicious in here that wasps do make and I want that.",
    character: "Charlie Kelly",
  },

  {
    quote:
      "Look at the door, dude. See that door there? The one marked 'Pirate'? You think a pirate lives in there?",
    character: "Charlie Kelly",
  },
];

function randInt(max) {
  let n = Math.floor(Math.random() * quotes.length);
  return n;
}

function fadeOut(element) {
  var op = 1;
  var timer = setInterval(function () {
    if (op <= 0.1) {
      clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op -= op * 0.1;
  }, 20);
}

function fadeIn(element) {
  var op = 0.1;
  var timer = setInterval(function () {
    if (op >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op += op * 0.1;
  }, 20);
}

function changeText() {
  let random = quotes[randInt()];

  document.getElementById("quote").innerText = random.quote;
  document.getElementById("name").innerHTML =
    "<h3> - <em>" + random.character + "<em><h3>";
}

function changeBG() {
  let random = quotes[randInt()];

  if (random.character == "Frank Reynolds") {
    document.body.style.backgroundImage = "url('frank.jpg')";
  } else if (random.character == "Charlie Kelly") {
    document.body.style.backgroundImage = "url('charlie.jpg')";
  }
}

// function that fades out the current quote and fades in the new quote
function changeQuote() {
  let quote = document.getElementById("quote");
  let name = document.getElementById("name");

  changeText();

  changeBG();
}
