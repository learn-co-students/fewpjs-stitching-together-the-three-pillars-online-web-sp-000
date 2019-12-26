/* This is a file inserted to keep the learn IDE browser happy */
const testVar = {}
/* This is a file inserted to keep the learn IDE browser happy */

var testVar  = {}

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
      .then(function(){
       
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
  


function mimicServerCall() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve("Pretend remote server notified of action!");
      }, 300);
    });
  }