const projects = [
  {
    name: "Fabrice",
    promo: "DWWM3",
    website: "https://fabolous38.github.io/brief-2-jeu/",
    image: "./images/dwwm3/fabrice.png",
  },
  {
    name: "Timothée",
    promo: "DWWM3",
    website: "https://basox4k.github.io/projet-jeu/",
    image: "./images/dwwm3/timothee.png",
  },
  {
    name: "Melissa",
    promo: "DWWM3",
    website: "https://melsrs.github.io/jeu-video/",
    image: "./images/dwwm3/melissa.png",
  },
  {
    name: "Herivola",
    promo: "DWWM3",
    website: "https://christinella.github.io/Jeu-Vid-o/",
    image: "./images/dwwm3/herivola.png",
  },
  {
    name: "Laura",
    promo: "DWWM3",
    website: "https://lauracarraro.github.io/Memory/",
    image: './images/dwwm3/laura.png',
  },
  {
    name: "Sonia",
    promo: "DWWM3",
    website: "https://blankenmeister.github.io/Jeu-Miam-/",
    image: './images/dwwm3/sonia.png',
  },
  {
    name: "Élodie",
    promo: "DWWM3",
    website: "https://elodielo.github.io/BazarBizarre/",
    image: "./images/dwwm3/elodie.png",
  },
  {
    name: "Justine",
    promo: "DWWM3",
    website: "https://justineleq.github.io/Brief2-Game/",
    image: "./images/dwwm3/justine.png",
  },
  {
    name: "Olivier",
    promo: "DWWM3",
    website: "https://oliviermaignan.github.io/jeu_simplon/",
    image: "./images/dwwm3/olivier.png",
  },
  {
    name: "Allan",
    promo: "DWWM3",
    website: 'https://allanbraham.github.io/jeu/',
    image: "./images/dwwm3/allan.png",
  },
  {
    name: "Romain",
    promo: "DWWM3",
    website: "https://zadig2b.github.io/BasketBall-Game/",
    image: "./images/dwwm3/romain.png",
  },
  {
    name: "Clément",
    promo: "DWWM3",
    website: "https://clementterme.github.io/Jeu/",
    image: "./images/dwwm3/clement.png",
  },
  {
    name: "Tom",
    promo: "DWWM3",
    website: "https://basiledm.github.io/Physics-engine-simulation-game/",
    image: "./images/dwwm3/tom.jpg",
  },
  {
    name: "Arthur",
    promo: "DWWM3",
    website: "https://artchibo7.github.io/GameCode/",
    image: "./images/dwwm3/arthur.png",
  },
  {
    name: "Feras",
    promo: "DWWM3",
    website: 'https://altalebferas.github.io/New-game/',
    image: "./images/dwwm3/feras.png",
  },
  {
    name: "Salomé",
    promo: "DWWM2",
    website: 'https://fancy-marzipan-b9b0be.netlify.app/',
    image: "./images/dwwm2/salome.png",
  },
  {
    name: "Yoan",
    promo: "DWWM2",
    website: 'https://demineur-simplon-yoan.netlify.app/',
    image: "./images/dwwm2/yoan.png",
  },
  {
    name: "Sara",
    promo: "DWWM2",
    website: 'https://jewels-travel-sara.netlify.app/',
    image: "./images/dwwm2/sara.png",
  },
  {
    name: "Clément",
    promo: "DWWM2",
    website: "https://bucolic-cactus-5db705.netlify.app/",
    image: "./images/dwwm2/clement.jpg",
  },
  {
    name: "Rodrigo",
    promo: "DWWM2",
    website: "https://brief2-puissance4-en-js.netlify.app/",
    image: './images/dwwm2/rodrigo.jpg',
  },
  {
    name: "Bruno",
    promo: "DWWM2",
    website: 'https://brunovss38.github.io/Duck-Hunt-Js/',
    image: './images/dwwm2/bruno.jpg',
  },
  {
    name: "Killian",
    promo: "DWWM2",
    website: 'https://main--puissancequatre2ouf.netlify.app/html/',
    image: './images/dwwm2/killian.png',
  },
  {
    name: "Aubin",
    promo: "DWWM2",
    website: 'https://jeu-pendu-simplon.netlify.app/html/',
    image: './images/dwwm2/aubin.png',
  },
  {
    name: "Dimitri",
    promo: "DWWM2",
    website: 'https://jeuxquizffvl.netlify.app/jeux/',
    image: './images/dwwm2/dimitri.png',
  },
  {
    name: "Laurent",
    promo: "DWWM2",
    website: 'https://rocheslaurent-kage-game.netlify.app/',
    image: './images/dwwm2/laurent.png',
  },
  {
    name: "Amal",
    promo: "DWWM2",
    website: 'https://projet-jeu-pendu.netlify.app/',
    image: './images/dwwm2/amal.png',
  },
  {
    name: "Sanaa",
    promo: "DWWM2",
    website: 'https://exquisite-banoffee-94d0f0.netlify.app/',
    image: "./images/dwwm2/sanaa.jpg",
  },
  {
    name: "Raphaël",
    promo: "DWWM2",
    website: 'https://soft-youtiao-97d35b.netlify.app',
    image: "./images/dwwm2/raphael.jpg",
  },
  {
    name: "Élodie",
    promo: "DWWM2",
    website: 'https://snake130613.netlify.app/',
    image: './images/dwwm2/elodie.png',
  },
  {
    name: "Tonie",
    promo: "DWWM2",
    website: 'https://tamakemon.netlify.app/',
    image: './images/dwwm2/tonie.png',
  },
];

const htmlProjectList = document.querySelector(".project_list");

function displayProjects() {
  console.log(htmlProjectList);

  projects.forEach((project) => {
    const projectCard = createProjectCard(project);
    htmlProjectList.appendChild(projectCard);
  });
}

function createProjectCard(project) {
  const listItem = document.createElement("li");

  const projectLink = document.createElement("a");
  projectLink.href = project.website ? project.website : "https://google.com";
  projectLink.target = "_blank";

  const projectCard = document.createElement("div");
  projectCard.classList.add("game_card");

  const projectImage = document.createElement("img");
  projectImage.src = project.image ? project.image : "./images/default.png";

  const projectOwner = document.createElement("p");
  projectOwner.textContent = `${project.promo} - ${project.name}`;

  listItem.appendChild(projectLink);
  projectLink.appendChild(projectCard);
  projectCard.appendChild(projectImage);
  projectCard.appendChild(projectOwner);

  return listItem;
}

displayProjects();
