document.body.id = "page-top";
document.body.style = "background-color: #DCAB6B"
const root = document.getElementById("root");
root.className = "pt-4";

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

const divHero = document.createElement("div");
divHero.className = "hero bg-light text-center py-5";
root.appendChild(divHero);
divHero.style = "background-image: url(background.png); background-size: contain; background-position: center; height: 100%; width: 100%";

const hHero = document.createElement("h1");
hHero.className = "display-4 text-white";
divHero.appendChild(hHero);
hHero.innerText = "Nos Chambres";
hHero.style.marginTop = "10vh";

const mMain = document.createElement("main");
mMain.className = "container my-5";
divHero.insertAdjacentElement("afterend", mMain);

const hMain = document.createElement("h2");
hMain.className = "text-center mb-4";
mMain.appendChild(hMain);
hMain.innerText = "Nos Chambres d'hôtes avec vue sur les terres du Mont Lozère";
hMain.style = "color: #ffffb3";

const divRow = document.createElement("div");
divRow.className = "row";
mMain.appendChild(divRow);

// Permet de créer tous les blocs avec les images, les titres et les textes
function createCol(id, title, images, paragraph) {
  const divCol = document.createElement("div");
  divCol.className = "col-md-4";
  divRow.appendChild(divCol);

  const h3Main = document.createElement("h3");
  h3Main.className = "text-center";
  h3Main.innerText = title;
  divCol.appendChild(h3Main);

  const div1 = document.createElement("div");
  div1.className = "carousel slide";
  div1.id = id;
  div1.setAttribute("data-bs-touch", "false");
  div1.setAttribute("data-bs-interval", "false");
  divCol.appendChild(div1);

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
    image.style.position = "absolute";
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

  const pMain = document.createElement("p");
  pMain.className = "mt-2 w-100";
  pMain.style = "text-align: justify;"
  pMain.innerText = paragraph;
  divCol.appendChild(pMain);
}
createCol(
  "carouselExampleAutoplaying",
  "Chambres Duo",
  [
    "chambre duo/chambre Duo1.jpeg",
    "chambre duo/chambre Duo2.jpeg",
    "chambre duo/chambre salle de bain.jpeg",
  ],
  "Intimistes et idéales pour séjourner à deux, nos chambres duo tiennent la promesse d’un séjour appaisant et inoubliable. Nous vous proposons 5 chambres duo, disposant toutes d’une salle de bain(douche) et d’un wc. Ces chambres vous sont proposées au tarif de 35€/nuit."
);

createCol(
  "carouselRide",
  "Chambres Familiales",
  [
    "chambre familiale/chambre familiale.jpeg",
    "chambre familiale/chambre familiale 2.jpeg",
    "chambre familiale/chambre familiale lit sup.jpeg",
    "chambre familiale/salle de bain familliale.jpeg",
  ],
  "Nos chambres familiales arborent le confort idéales pour découvrir en familles les terres du mont Lozère. Nous vous proposons 3 chambres familliales composées d’un lit double, un lit simple et d’un lit superposé, ainsi que d’une salle de bain (douche) et d’un WC. Pour un tarif de 55€/nuits."
);

createCol(
  "carouselAutoplaying",
  "Chambres “Appartements”",
  [
    "chambre appartement/chambre appartement lit.jpeg",
    "chambre appartement/chambre appartement double.jpeg",
    "chambre appartement/chambre appartement cuisine.jpeg",
    "chambre appartement/chambre salle de bain.jpeg",
  ],
  "Intimistes et idéales pour séjourner à deux, nos chambres duo tiennent la promesse d’un séjour appaisant et inoubliable. Nous vous proposons 5 chambres duo, disposant toutes d’une salle de bain(douche) et d’un wc. Ces chambres vous sont proposées au tarif de 35€/nuit."
);


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
  para.innerHTML = "Powered by &copy;HurleC 2024"

  const social = document.createElement("div");
  social.className = "col-lg-2";
  row.appendChild(social);
  let brand = ["Twitter", "Facebook", "Linkedin"];
  for (b in brand) {
    let anchor = document.createElement("a");
    anchor.className = "btn btn-social px-0";
    anchor.href = "#!";
    anchor.ariaLabel = brand[b];
    social.appendChild(anchor)
    let icone = document.createElement("i");
    icone.className = `fa-brands fa-${brand[b].toLowerCase()}`;
    anchor.appendChild(icone)
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
  location.appendChild(telephone)

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
};
footer(root);
