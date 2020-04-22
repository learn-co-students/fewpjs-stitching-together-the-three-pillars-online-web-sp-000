// We use this code, known as Objects, to control toggling like / unlike status

let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red" : "",
  "": "red"
};


let articleHearts = document.querySelectorAll(".like-glyph");

function likeCallback(e) {
  let heart = e.target;
  mimicServerCall()
    .then(function(serverMessage){


      alert("You notified the server!");
      alert(serverMessage);
       heart.innerText = glyphStates[heart.innerText];
       heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error) {
      alert("Something went wrong!");
    });
}

for (let glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}

// STEP 4:

// When all the STEPs' code changes have been complete, you'll be able to see a
// working demonstration of our reference example. Sure, it's maybe not as
// pretty as a professional site, but they're only different from our site in
// style, not substance.

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Pretend remote server notified of action!");
    }, 300);
  });
}
