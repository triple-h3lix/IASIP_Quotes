// Array of quotes from Its Always Sunny in Philadelphia

const quotes = [
  {
    quote: "I eat stickers all the time, dude!",
    character: "Charlie Kelly",
  },{
    quote: "*Bird Noises*",
    character: "Dee Reynolds",
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
    quote: "Cat in the wall! Now you're talking my language.",
    character: "Charlie Kelly",
  },
  {
    quote: "Well, first of all, through God all things are possible, so jot THAT down.",
    character: "Mac",
  },
  {
    quote: "I don't know how many years I got left on this planet, so I'm going to get REAL weird with it.",
    character: "Frank Reynolds",
  },
  {
    quote: "I am untethered and my rage knows no bound!",
    character: "Dennis Reynolds"
  },
  {
    quote: "There's poison in those jars?! I thought I was allergic to pickles!",
    character: "Frank Reynolds",
  },
  {
    quote: "Bird law in this country is not governed by reason!",
    character: "Charlie Kelly",
  },
  {
    quote: "So... you saw me eat that Hot Pocket out of the trash?...",
    character: "Charlie Kelly",
  },
  {
    quote: "Oooh shit. You see that door over there marked 'Pirate'? You think a pirate lives in there?",
    character: "Charlie Kelly",
  },{
    quote: "Cream always rises to the top, and you're about to see the white hot cream of an eigth grade boy.",
    character: "Charlie Kelly",
  },{
    quote: "I hate listening to people's dreams. It is like flipping through a stack of photographs. If I'm not in any of them and nobody is having sex, I just don't care.",
    character: "Dennis Reynolds",
  },{
    quote: "I'm a... full on rapist.",
    character: "Charlie Kelly",
  },{
    quote: "That doesn't sound right, but I don't know enough about stars to dispute it.",
    character: "Mac",
  },{
    quote: "How about I take your wife upstairs and show her what it's like to be inside a REALLY big house!?",
    character: "Mac"
  },{
    quote: "S you in your A's. Don't wear a C. J all over your B's!",
    character: "Charlie Kelly",
  }
]; 

function changeBG(name) {

  if (name == "Charlie Kelly") {
    document.getElementsByTagName("body")[0].style.backgroundImage = "url(charlie.jpg)";
  }
  else if (name == "Mac") {
    document.getElementsByTagName("body")[0].style.backgroundImage = "url(mac.jpg)";
  }
  else if (name == "Frank Reynolds") {
    document.getElementsByTagName("body")[0].style.backgroundImage = "url(frank.jpg)";
  }
  else if (name == "Dee Reynolds") {
    document.getElementsByTagName("body")[0].style.backgroundImage = "url(dee.jpg)";
  }
  else if (name == "Dennis Reynolds") {
    document.getElementsByTagName("body")[0].style.backgroundImage = "url(dennis.jpg)";
  }
}

function newQuote() {
  let newQuote = quotes[Math.floor(Math.random() * quotes.length)];

  document.getElementById("quote").innerHTML = '"' + newQuote.quote + '"';
  document.getElementById("name").innerHTML = '<br> - ' + newQuote.character;

  changeBG(newQuote.character);

}