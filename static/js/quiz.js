function getMaterials() {
    const materials = [];
    for (let type in data) {
        let materialsType = data[type].materials;
        
        for(let cat in materialsType) {
            let materialsCat = materialsType[cat];
    
            for(let i in materialsCat) {
                if(i==0) continue;
                materials.push(materialsCat[i]);
            }
        }
    }
    return materials;
};
const materials = getMaterials();


function loadQuiz() {
    hideItems()
    title.innerText = username.value + " - Score: " + score + "/"+nbQuestions
    QUIZ.style.display = "block"
    selectBtnResponse()
    return quiz()
}

function hideItems() {
    quizMenu.style.display = "none";
    classment.style.display = "none";
}

function quiz() {
    let idx = Math.floor(Math.random()*materials.length);
    const material = materials[idx];

    // Picture
    img.setAttribute("src", material.picture)
    img.setAttribute("alt", material.alt)

    // Buttons Choice
    // - Right
    let idxCorrectButton = Math.floor( Math.random()*btnResponse.length );
    btnResponse[idxCorrectButton].value = material["title"];

    // - Wrongs
    for(let i=0; i<btnResponse.length; i++) {
        if(i==idxCorrectButton) continue

        let wrongMatIdx = Math.floor( Math.random()*(materials.length) );
        while(wrongMatIdx === idx) {
            wrongMatIdx = Math.floor( Math.random()*(materials.length) ); 
        }

        btnResponse[i].value = materials[wrongMatIdx]["title"];
    }

    saveQuiz();

    return material.title;
}

function isGoodAnswer(btnSelected, goodAnswer) {
    if(btnSelected==goodAnswer) {
        score ++      
    }
    nbQuestions++

    rightMaterial = loadQuiz()
}

function saveQuiz() {
    localStorage.setItem("username", username.value)
    localStorage.setItem("score", score)
    localStorage.setItem("nbQuestions", nbQuestions)
}

function selectBtnResponse(btn=null) {
    btnResponse.forEach(btns =>{
        btns.style.background = "var(--bg)";
        btns.style.color = "black";
        btns.style.border = "0";
        btns.setAttribute("active", false)
    })

    if(btn !== null) {
        btn.style.background = "transparent";
        btn.style.color = "var(--bg)";
        btn.style.border = "1px solid var(--bg)";
        btn.setAttribute("active", true)
    }

}



function getItem(id) {
    return document.getElementById(id)
}
/* [ [name, id], [name, id] ] */
function getItems(list/*: [name, id] */) {
    let l = {}

    for(el of list)
        l[el[0]] = getItem(el[1])
    return l
}

const section = document.getElementById("section");
const title = document.getElementById("title")
const classment = document.getElementById("classment");
const quizMenu = document.getElementById("quizMenu");
const username = document.getElementById("username");
const QUIZ = document.getElementById("quizLoaded");
const questionContainer = document.getElementById("question");

// Get Items function
let ids = getItems([
    ["imgContainer", "imgContainer"],
    ["formBtnChosen", "response"],
    ["btnResponse", "btnResponse"]
]);
// In function
const img = ids.imgContainer.children[0]
const formBtnChosen = ids.formBtnChosen;
const btnResponse = [...ids.btnResponse.children];

// Correct MAterial
let rightMaterial;

// score
let score = 0;
let nbQuestions = 0;


// IF there is an instance, launch the quiz with the username
if(localStorage.getItem("username")) {
    username.value = localStorage.getItem("username");
    score = localStorage.getItem("score");
    nbQuestions = localStorage.getItem("nbQuestions");
    rightMaterial = loadQuiz();
};

// Lauching the quiz 
quizMenu.addEventListener("submit", ev =>{
    ev.preventDefault();

    if(!username.value) {
        username.style.borderColor = "red";
    } else {
        rightMaterial = loadQuiz();
    }
})

// Selection button effect
btnResponse.forEach(btn => {
    btn.addEventListener("click", ev =>{
        selectBtnResponse(btn)
    })
})

// Validation of the form
formBtnChosen.addEventListener("submit", ev =>{
    ev.preventDefault();
    for(btn of btnResponse) {
        if(btn.getAttribute("active") == "true") {
            isGoodAnswer(btn.value, rightMaterial);
        }
    }
})