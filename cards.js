const questions=[
  {
    categorie: "Entrées, Sorties et Variables",
    question: "Comment affecter une valeur à une variable ?",
    reponse: "On utilise le symbole = entre le nom de la variable et sa valeur.",
    exemple: 'n = 12<br/>prenom = "Anna"'
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
    exemple : 'print(12, "pommes")',
  },
  {
    categorie: "Entrées, Sorties et Variables",
    question: "Comment convertir un texte en nombre entier&nbsp;?",
    reponse: "On utilise le mot-clé <em>int</em>.",
    exemple: 'a = int("12")',
  },
  {
    categorie: "Entrées, Sorties et Variables",
    question: 'Comment convertir un texte en nombre "décimal"&nbsp;?',
    reponse: "On utilise le mot-clé <em>float</em>.",
    exemple: 'a = float("1.2")',
  },
  {
    categorie: "Entrées, Sorties et Variables",
    question: 'Comment convertir un nombre en un texte&nbsp;?',
    reponse: "On utilise le mot-clé <em>str</em>.",
    exemple: 'a = str(125)<br/>b = str(1.25)',
  },
  {
    categorie: "Entrées, Sorties et Variables",
    question: "Comment demander un texte à l'utilisateur&nbsp;?",
    reponse: "On utilise le mot-clé <em>input</em>.",
    exemple: 'nom = input("Votre nom : ")',
  },
  {
    categorie: "Entrées, Sorties et Variables",
    question: "Comment demander un nombre à l'utilisateur&nbsp;?",
    reponse: "On utilise un des mots-clés <em>int</em> ou <em>float</em> couplé avec <em>input</em>.",
    exemple: 'n = int(input("Votre nombre entier : "))<br/>d = float(input("Votre nombre : "))',
  },
  {
    categorie: "Entrées, Sorties et Variables",
    question: "Comment concaténer deux textes&nbsp;?",
    reponse: "On utilise l'opérateur <em>+</em> entre les deux textes.",
    exemple: 'prenom = "Anna"<br/>txt = "Bonjour "+prenom+" !"',
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
  {
    categorie: "Boucles",
    question: "Comment écrire une boucle tant que ?",
    reponse: "On utilise le mot-clé <em>while</em>.",
    exemple: 'i = 0<br/>while i**2 < 125 :<br/>&nbsp;&nbsp;i=i+1',
  },
  {
    categorie: "Chaînes de caractères",
    question: "Comment déterminer le nombre de caractères d'une chaîne de caractères ?",
    reponse: "On utilise la fonction <em>len</em>.",
    exemple: 'txt = "Bonjour à tous !"<br/>print(len(txt))',
  },
  {
    categorie: "Chaînes de caractères",
    question: "Comment accéder à un caratère d'une chaîne de caractères par sa position ?",
    reponse: "On utilise des crochets encadrant la position",
    exemple: 'txt = "Bonjour à tous !"<br/>print(txt[0])<br/>print(txt[6])',
  },
]

const couleurs = {
  "Entrées, Sorties et Variables" : "vert",
  "Instructions conditionnelles" : "rouge",
  "Boucles" : "bleu",
  "Chaînes de caractères" : "marron",
  "Listes et tuples" : "orange",
  "Dictionnaires" : "rose",
  "Fonctions" : "violet",
  "Fichiers" : "gris",
}
