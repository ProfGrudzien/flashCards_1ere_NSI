const questions=[
  {
    categorie: "Entrées, Sorties et Variables",
    question: "Comment affecter une valeur à une variable ?",
    reponse: "On utilise le symbole = entre le nom de la variable et sa valeur.",
    exemple: "a = 12"
  },
  {
    categorie: "Entrées, Sorties et Variables",
    question: "Comment afficher la valeur d'une variable ?",
    reponse: "On utilise le mot-clé <em>print</em>.",
    exemple : "print(a)",
  },
  {
    categorie: "Entrées, Sorties et Variables",
    question: "Comment demander une valeur à l'utilisateur ?",
    reponse: "On utilise le mot-clé <em>input</em>.",
    exemple: 'nom = input("Votre nom : ")',
  },
  {
    categorie: "Instructions conditionnelles",
    question: "Comment écrire un test <em>si</em> ?",
    reponse: "On utilise le mot-clé <em>if</em>.",
    exemple: 'if note>=10 :<br/>&nbsp;&nbsp;print("bravo !")',
  },
  {
    categorie: "Instructions conditionnelles",
    question: "Comment écrire un test <em>si ... sinon</em> ?",
    reponse: "On utilise les mot-clés <em>if</em> et <em>else</em>.",
    exemple: 'if note>=10 :<br/>&nbsp;&nbsp;print("bravo !")<br/>else :<br/>&nbsp;&nbsp;print("dommage...")',
  },
  {
    categorie: "Instructions conditionnelles",
    question: "Comment écrire un test <em>si ... sinon si ... sinon</em> ?",
    reponse: "On utilise les mot-clés <em>if</em>, <em>elif</em> et <em>else</em>.",
    exemple: 'if note>=15 :<br/>&nbsp;&nbsp;print("excellent !")<br/>elif note>=10 :<br/>&nbsp;&nbsp;print("bravo !")<br/>else :<br/>&nbsp;&nbsp;print("dommage...")',
  },
  {
    categorie: "Boucles",
    question: "Comment répéter 10 fois une instruction ?",
    reponse: "On utilise une boucle <em>pour</em> et le mot-clé <em>range</em>.",
    exemple: 'for i in range(10) :<br/>&nbsp;&nbsp;print("coucou")',
  },
]

const couleurs = {
  "Entrées, Sorties et Variables" : "vert",
  "Instructions conditionnelles" : "rouge",
  Boucles : "bleu",
  "Chaines de caractères" : "blanc",
  "Listes et tuples" : "blanc",
  "Dictionnaires" : "blanc",
  "Fonctions" : "blanc",
  "Fichiers" : "blanc",
}

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

const body = document.querySelector("body")
questions.forEach(question => body.appendChild(createCard(question)))
