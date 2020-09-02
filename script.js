function createCard(question) {
  const card = document.createElement("div")
  card.className = "flip-card"
  card.innerHTML = `<div class="flip-card-inner ${couleurs[question.categorie]}">
      <div class="flip-card-front">
        <p class="categorie">${question.categorie}</p>
        <p class="question">${question.question}</p>
      </div>
      <div class="flip-card-back">
        <p class="reponse">${question.reponse}</p>
        <p class=label>Exemple :</p>
        <p class=exemple>${question.exemple}</p>
      </div>
    </div>`
  return card
}

function showCards(categorie) {
    const container = document.querySelector(".container")
    container.innerHTML = ""
    if (categorie == "Toutes les cartes") {
        questions.forEach(question => container.appendChild(createCard(question)))
    }
    else {
        questions.filter(question => question.categorie == categorie)
                 .forEach(question => container.appendChild(createCard(question)))
    }
}

function handleClick(event) {
    if (event.target.className == "menu") {
        Array.from(document.querySelectorAll(".menu"))
             .forEach(div => div.className = "menu")
        event.target.className = "menu selected"
        showCards(event.target.textContent)
    }
}

showCards("Toutes les cartes")
document.getElementById("toutes").className = "menu selected"
document.querySelector(".menu-container").addEventListener("click", handleClick)
