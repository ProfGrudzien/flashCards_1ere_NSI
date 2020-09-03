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
    question: "Comment afficher un nombre ou un texte ?",
    reponse: "On utilise le mot-clé <em>print</em>.",
    exemple : "print(12)",
  },
  {
    categorie: "Entrées, Sorties et Variables",
    question: "Comment afficher un nombre et un texte ?",
    reponse: "On utilise le mot-clé <em>print</em>.",
    exemple : "print(12, pomme)",
  },
  {
    categorie: "Entrées, Sorties et Variables",
    question: "Comment demander une valeur à l'utilisateur&nbsp;?",
    reponse: "On utilise le mot-clé <em>input</em>.",
    exemple: 'nom = input("Votre nom : ")',
  },
  {
    categorie: "Entrées, Sorties et Variables",
    question: "Comment convertir un texte en nombre entier&nbsp;?",
    reponse: "On utilise le mot-clé <em>int</em>.",
    exemple: 'a = int("1.2")',
  },
  {
    categorie: "Instructions conditionnelles",
    question: "Comment écrire un test <em>si</em> ?",
    reponse: "On utilise le mot-clé <em>if</em>.",
    exemple: 'if note >= 10 :<br/>&nbsp;&nbsp;print("bravo !")',
  },
  {
    categorie: "Instructions conditionnelles",
    question: "Comment écrire un test <em>si ... sinon</em> ?",
    reponse: "On utilise les mot-clés <em>if</em> et <em>else</em>.",
    exemple: 'if note >= 10 :<br/>&nbsp;&nbsp;print("bravo !")<br/>else :<br/>&nbsp;&nbsp;print("dommage...")',
  },
  {
    categorie: "Instructions conditionnelles",
    question: "Comment écrire un test <em>si ... sinon si ... sinon</em> ?",
    reponse: "On utilise les mot-clés <em>if</em>, <em>elif</em> et <em>else</em>.",
    exemple: 'if note >= 15 :<br/>&nbsp;&nbsp;print("excellent !")<br/>elif note >= 10 :<br/>&nbsp;&nbsp;print("bravo !")<br/>else :<br/>&nbsp;&nbsp;print("dommage...")',
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
  "Boucles" : "bleu",
  "Chaines de caractères" : "blanc",
  "Listes et tuples" : "blanc",
  "Dictionnaires" : "blanc",
  "Fonctions" : "blanc",
  "Fichiers" : "blanc",
}
