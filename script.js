// Array of quotes from Its Always Sunny in Philadelphia

const quotes = [
  {
    quote: "I eat stickers all the time, dude!",
    character: "Charlie Kelly",
  },
  {
    quote: "Why don't I strap on my job helmet and squeeze down into a job cannon and fire off into job land, where jobs grow on jobbies?",
    character: "Charlie Kelly",
  },
  {
    quote: "Bro, I can handle my sedatives.",
    character: "Charlie Kelly",
  },
  {
    quote: "I do backflips every single day of my life.",
    character: "Mac",
  },
  {
    quote: "I'm not fat. I'm cultivating mass.",
    character: "Mac",
  },
  {
    quote: "Let me tell you something. I haven't even BEGUN to peak. And when I do peak... you'll know it.",
    character: "Dennis Reynolds",
  },
  {
    quote: "I am the Golden God!",
    character: "Dennis Reynolds",
  },
  {
    quote: "Groban likes his ladies to pop.",
    character: "Dee Reynolds",
  },
  {
    quote: "I'll burn you alive like the last bitch who crossed me!",
    character: "Dee Reynolds",
  },
  {
    quote: "Its like when I'm doing good in the game, I'm doing good in real life",
    character: "Dee Reynolds"
  }
]


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
  document.getElementById("character").innerHTML =
    "<h3> - <em>" + random.character + "<em><h3>";
}

function changeBG(name) {

  if (name == "Charlie Kelly") {
    document.body.style.backgroundImage = "url('images/charlie.jpg')";
  } else if (name == "Mac") {
    document.body.style.backgroundImage = "url('images/mac.jpg')";
  }
  else if (name == "Dennis Reynolds") {
    document.body.style.backgroundImage = "url('images/dennis.jpg')";
  }
  else if (name == "Dee Reynolds") {
    document.body.style.backgroundImage = "url('images/dee.jpg')";
  }
  else if (name == "Frank Reynolds") {
    document.body.style.backgroundImage = "url('images/frank.jpg')";
  }
}

// function that fades out the current quote and fades in the new quote
function changeQuote() {
  let quote = document.getElementById("quote");
  let name = document.getElementById("character");

  changeText();

  changeBG(document.getElementById("character").innerText);

}
