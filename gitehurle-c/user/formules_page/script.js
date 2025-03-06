document.body.id = "page-top";
document.body.style = "background-color: #DCAB6B";
const root = document.getElementById("root");
root.className = "pt-4";

const section = document.createElement("section");
section.className = "py-5";
root.appendChild(section);

const divCont = document.createElement("div");
divCont.className = "container";
section.appendChild(divCont);

const divR = document.createElement("div");
divR.className = "row justify-content-center text-center mt-5 mb-lg-4";
divCont.appendChild(divR);

const divCol = document.createElement("div");
divCol.className = "col-12 col-lg-8 col-xxl-7 text-center mx-auto";
divR.appendChild(divCol);

const hCol = document.createElement("h2");
hCol.className = "display-5 fw-bold mt-2";
hCol.innerText = "Nos Formules";
divCol.appendChild(hCol);

const pCol = document.createElement("p");
pCol.className = "lead";
pCol.innerText =
  "Découvrez nos formules ci-dessous, adaptées à tous vos besoins pour un séjour sur mesure dans notre gîte.";
divCol.appendChild(pCol);

const row = document.createElement("div");
row.className = "row";
divCont.appendChild(row);

///navbar
function navbar(parent) {
  const nav = document.createElement("nav");
  nav.className = "navbar navbar-expand-md navbar-light fixed-top navbar-shrink";
  nav.id = "mainNav";
  nav.style = "background-color: #DCAB6B;"
  parent.insertAdjacentElement("afterbegin", nav);
  const container = document.createElement("div");
  container.className = "container";
  nav.appendChild(container);
  const logo = document.createElement("a");
  logo.href = "../landing_page/home.html";
  logo.className = "navbar-brand";
  container.appendChild(logo);
  logo.innerHTML = `<img src="../../assets/img/Logo-header.png" class="w-25" alt="logo du gite"/>`;
  const home = document.createElement("button");
  home.className = "navbar-toggler collapsed";
  home.type = "button";
  home.dataset.bsToggle = "collapse";
  home.dataset.bsTarget = "#navbarResponsive";
  home.ariaControls = "navbarResponsive";
  home.ariaExpanded = "false";
  home.ariaLabel = "Toggle navigation";
  container.appendChild(home);
  home.innerText = "Menu";
  const icone = document.createElement("i");
  icone.className = "fa-solid fa-bar ms-1";
  home.appendChild(icone);
  const responsive = document.createElement("div");
  responsive.className = "navbar-collapse collapse";
  responsive.id = "navbarResponsive";
  responsive.style = "";
  container.appendChild(responsive);
  const unordlist = document.createElement("ul");
  responsive.appendChild(unordlist);
  unordlist.className = "navbar-nav text-uppercase ms-auto py-4 py-lg-0";
  let contents = ["Nos chambres", "Nos formules", "Contact", "Reserver"];
  for (i in contents) {
      let address = ["../room_page/room.html", "../formules_page/formule.html", "../contact_page/contact.html", "../Formulaire.html"];
      let list = document.createElement("li");
      unordlist.appendChild(list);
      list.className = "nav-item";
      let anchor = document.createElement("a");
      list.appendChild(anchor);
      anchor.className = "nav-link";
      anchor.href = address[i];
      anchor.innerText = contents[i]
  }
};
navbar(root);

let formule = [
  `Formule "Weekend d'Amour"`,
  `Formule "Nature et Découverte"`,
  `Formule "Travail Saisonnier"`,
];

let info = [
  "Valable uniquement pour les chambres duo",
  "Valable pour tous les types d'espaces",
  "Valable pour tous les types d'espaces avec une réservation d'1 mois minimum",
];

let reduc = ["-10%", "-5%", "-20%"];

let total = [
  "Sur le nombre total de nuitées",
  "Sur le total du séjour",
  "Sur le total du séjour (non majoré)",
];

let info2 = [
  "Inclut un petit déjeuner « lover » servi au lit",
  [
    `Appliquée pour un séjour de plus de 5 nuits (week-end inclus)"<br/>   "Inclut une escapade « Rahan » en terre du Gévaudan (avec prêt d'un coutelas)`,
  ],
  "Appliquée pour un séjour de plus de 5 nuits (week-end inclus)",
];

let images = [
  [
    "./image_formule1/chambre_appartement_double.jpeg",
    "./image_formule1/image_formule_love.jpeg",
    "./image_formule1/image_petit_dej.jpeg",
  ],
  [
    "./image_formule2/chambre_familiale_2.jpeg",
    "./image_formule2/image_Gevaudan1.jpg",
    "./image_formule2/image_Gevaudan2.jpg",
    "./image_formule2/image_Gevaudan3.jpg",
  ],
  [
    "./image_formule3/chambre_appartement_cuisine.jpeg",
    "./image_formule3/chambre_duo_1.jpeg",
    "./image_formule3/chambre_familiale_2.jpeg",
  ]
];

let id = ["carouselExampleAutoplaying", "carouselExample", "carouselRide"];

function createElementRow(images, id, formule, info, reduc, total, info2) {
  const col = document.createElement("div");
  row.appendChild(col);
  col.className = "col-md-4";

  const divCard1 = document.createElement("div");
  divCard1.className = "card text-center border-0 mb-3 mb-md-0";
  col.appendChild(divCard1);

  const div1 = document.createElement("div");
  div1.className = "carousel slide";
  div1.id = id;
  div1.setAttribute("data-bs-touch", "false"); // Désactiver le balayage tactile
  div1.setAttribute("data-bs-interval", "false"); // Désactiver le défilement automatique
  divCard1.appendChild(div1);

  const div2 = document.createElement("div");
  div2.className = "carousel-inner";
  div1.appendChild(div2);

  images.forEach((imageSrc, index) => {
    const divItem = document.createElement("div");
    if (index === 0) {
      divItem.className = "carousel-item active";
    } else {
      divItem.className = "carousel-item";
    }
    div2.appendChild(divItem);
    divItem.style.position = "relative";
    divItem.style.height = "300px";

    const image = document.createElement("img");
    image.className = "d-block w-100";
    image.src = imageSrc;
    image.alt = `Slide ${index + 1}`;
    image.style.position = "absolute"; // Positionner l'image absolument par rapport au parent
    image.style.top = "0";
    image.style.left = "0";
    image.style.width = "100%";
    image.style.height = "100%";
    image.style.objectFit = "cover";

    divItem.appendChild(image);
  });

  const btn1 = document.createElement("button");
  btn1.className = "carousel-control-prev";
  btn1.type = "button";
  btn1.setAttribute("data-bs-target", `#${id}`);
  btn1.setAttribute("data-bs-slide", "prev");
  div1.appendChild(btn1);

  const span1 = document.createElement("span");
  span1.className = "carousel-control-prev-icon";
  span1.setAttribute("aria-hidden", "true");
  btn1.appendChild(span1);

  const span2 = document.createElement("span");
  span2.className = "visually-hidden";
  span2.innerText = "Previous";
  btn1.appendChild(span2);

  const btn2 = document.createElement("button");
  btn2.className = "carousel-control-next";
  btn2.type = "button";
  btn2.setAttribute("data-bs-target", `#${id}`);
  btn2.setAttribute("data-bs-slide", "next");
  div1.appendChild(btn2);

  const span3 = document.createElement("span");
  span3.className = "carousel-control-next-icon";
  span3.setAttribute("aria-hidden", "true");
  btn2.appendChild(span3);

  const span4 = document.createElement("span");
  span4.className = "visually-hidden";
  span4.innerText = "Next";
  btn2.appendChild(span4);

  const divCard2 = document.createElement("div");
  divCard2.className = "card-body bg-light py-5";
  divCard1.appendChild(divCard2);

    const hCard = document.createElement("h5");
    hCard.className = "fw-bold";
    hCard.innerText = formule;
    divCard2.appendChild(hCard);

    const nakedDiv = document.createElement("div");
    divCard2.appendChild(nakedDiv);
    nakedDiv.innerText = info;

    const div4 = document.createElement("div");
    div4.className = "display-4 fw-bold mt-4 text-secondary";
    div4.innerText = reduc;
    divCard2.appendChild(div4);

    const div5 = document.createElement("div");
    div5.className = "fw-bold";
    div5.innerText = total;
    divCard2.appendChild(div5);

    const unordList = document.createElement("ul");
    unordList.className = "list-unstyled mt-4";
    divCard2.appendChild(unordList);

    
    const list = document.createElement("li");
    list.className = "mb-3";
    unordList.appendChild(list);
    list.innerHTML = info2;

    const lien = document.createElement("a");
    lien.className = "btn btn-primary btn-lg mt-4";
    divCard2.appendChild(lien);
    lien.innerText = "Reserver";
    lien.href="../Formulaire.html";
  
}
for(i in images){
createElementRow(images[i], id[i], formule[i], info[i], reduc[i], total[i], info2[i]);
}

function footer(parent) {
  const footer = document.createElement("footer");
  footer.className = "footer py-4 mt-4";
  footer.style = "background-color:#774E24";
  parent.insertAdjacentElement("beforeend", footer);
  const container = document.createElement("div");
  container.className = "container";
  footer.appendChild(container);
  const row = document.createElement("div");
  row.className = "row align-items-center";
  container.appendChild(row);

  const mentions = document.createElement("div");
  mentions.className = "col-lg-2 text-lg-start";
  row.appendChild(mentions);
  const para = document.createElement("p");
  mentions.appendChild(para);
  para.innerHTML = "Powered by &copy;HurleC 2024";

  const social = document.createElement("div");
  social.className = "col-lg-2";
  row.appendChild(social);
  let brand = ["Twitter", "Facebook", "Linkedin"];
  for (b in brand) {
    let anchor = document.createElement("a");
    anchor.className = "btn btn-social px-0";
    anchor.href = "#!";
    anchor.ariaLabel = brand[b];
    social.appendChild(anchor);
    let icone = document.createElement("i");
    icone.className = `fa-brands fa-${brand[b].toLowerCase()}`;
    anchor.appendChild(icone);
  }

  const location = document.createElement("div");
  location.className = "col-lg-4 text-center my-3 my-lg-0";
  row.appendChild(location);
  const address = document.createElement("p");
  address.className = "py-0 my-0";
  address.innerHTML = "Gite Hurle<br/>123 Rue de la bête<br/>43170 Saugues";
  location.appendChild(address);
  const telephone = document.createElement("a");
  telephone.className = "py-0 my-0 text-decoration-none --bs-dark";
  telephone.href = "tel:+33666666666";
  telephone.innerText = "06 66 66 66 66";
  location.appendChild(telephone);

  const contact = document.createElement("div");
  contact.className = "col-lg-2 text-lg-end d-flex flex-column";
  row.appendChild(contact);
  const lien = document.createElement("a");
  lien.className = "link-dark text-decoration-none";
  lien.href = "../contact_page/contact.html"
  lien.innerText = "Contact"
  contact.appendChild(lien)
  const admin = document.createElement("a");
  admin.className = "link-dark text-decoration-none";
  admin.href = "../../admin/htdocs/Login.html"
  admin.innerText = "Admin page"
  contact.appendChild(admin)
}
footer(root);
