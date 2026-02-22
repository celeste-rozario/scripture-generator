
function generateScripture(event){
    event.preventDefault();

    new Typewriter("#scripture", {
        strings: ["Scripture will go here"],
        autoStart: true,
        delay:1, 
        cursor: "",
      });

}


let emotionInput = document.querySelector("#scripture-generator-form");
emotionInput.addEventListener("submit", generateScripture)