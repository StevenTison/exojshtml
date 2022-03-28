const listeArticles = [
    {
        "titre": "Titre de l'article 1",
        "datePubli": "28/03/2022",
        "contenu": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quam architecto adipisci neque molestiae quis quod non repellendus officia, debitis eum fugiat atque sunt cumque eaque illo porro odio soluta.",
        "lienArticle": ""
    },
    {
        "titre": "Titre de l'article 2",
        "datePubli": "26/03/2022",
        "contenu": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quam architecto adipisci neque molestiae quis quod non repellendus officia, debitis eum fugiat atque sunt cumque eaque illo porro odio soluta."
    },
    {
        "titre": "Titre de l'article 3",
        "datePubli": "21/03/2022",
        "contenu": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quam architecto adipisci neque molestiae quis quod non repellendus officia, debitis eum fugiat atque sunt cumque eaque illo porro odio soluta."
    },
    {
        "titre": "Titre de l'article 4",
        "datePubli": "19/03/2022",
        "contenu": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quam architecto adipisci neque molestiae quis quod non repellendus officia, debitis eum fugiat atque sunt cumque eaque illo porro odio soluta.",
        "lienArticle": ""
    },
    {
        "titre": "Titre de l'article 5",
        "datePubli": "18/03/2022",
        "contenu": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quam architecto adipisci neque molestiae quis quod non repellendus officia, debitis eum fugiat atque sunt cumque eaque illo porro odio soluta."
    },
    {
        "titre": "Titre de l'article 6",
        "datePubli": "12/03/2022",
        "contenu": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quam architecto adipisci neque molestiae quis quod non repellendus officia, debitis eum fugiat atque sunt cumque eaque illo porro odio soluta."
    }
];

let body = document.querySelector('body');

const nav = document.createElement('nav');

body.appendChild(nav);

const ul = document.createElement('ul');

nav.appendChild(ul);
ul.innerHTML = "<li>Test de la liste</li><li>Test de la liste</li><li>Test de la liste</li>"

const newImg = document.createElement('img');

body.appendChild(newImg);

newImg.src = "illustration.png";

for (let element of listeArticles) {

    const article = document.createElement('article');

    body.appendChild(article);

    const h1 = document.createElement('h1');

    article.appendChild(h1);
    h1.innerText = element.titre;

    const date = document.createElement('h2');

    article.appendChild(date);
    date.innerText = element.datePubli;

    const paragraphe = document.createElement('p');

    article.appendChild(paragraphe);
    paragraphe.innerText = element.contenu;

}