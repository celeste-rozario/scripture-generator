function displayScripture(response){

    new Typewriter("#scripture", {
        strings: response.data.answer,
        autoStart: true,
        delay:1, 
        cursor: "",
      });

}



function generateScripture(event){
    event.preventDefault();

    let emotionInput = document.querySelector("#promop-input-bar");
    let apiKey = "9b5e5489a22c2ct5203a0ad09d7f3oab";
    let context = "You know the christian bible well. Generate scripture and format it so that every new sentence is a new line. Make sure to follow the user instructions ";
    let prompt  = `User Instructions: Generate one scripture from the Christian bible to encourage whatever the user put in ${emotionInput} only generate scripture and no other words. Makre sure the chapter and verse is in <strong> and displayed at the bottom of the scripture on a new line below the scripture`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(displayScripture);

}



let emotionInput = document.querySelector("#scripture-generator-form");
emotionInput.addEventListener("submit", generateScripture)