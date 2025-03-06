document.body.id = "page-top";
document.body.style = "background-color: #DCAB6B"
const root = document.getElementById("root");
root.className = "pt-4";
root.style = "background-image: url(../../assets/img/background.png); background-position-x: center; background-position-y: 0 ; background-repeat: no-repeat";

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
    logo.href = "#page-top";
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
    let brand = ["Twitter", "Facebook", "Instagram"];
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

function header() {
    const header = document.createElement("header");
    header.className = "mt-5 vh-100";
    root.appendChild(header);
    const container = document.createElement("div");
    container.className = "container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center my-3";
    header.appendChild(container);
    const flex = document.createElement("div");
    flex.className = "d-flex justify-content-center";
    container.appendChild(flex);
    const center = document.createElement("div");
    center.className = "text-center my-3";
    flex.appendChild(center);
    const titre = document.createElement("h1");
    titre.className = "mx-auto mt-5";
    titre.style = "color: #ffffb3";
    titre.innerHTML = "Bienvenue au<br> Gite Hurle";
    center.appendChild(titre);
    const button = document.createElement("a");
    button.className = "btn btn-primary my-2";
    button.href = "../Formulaire.html";
    button.innerText = "Reservez dès maintenant";
    center.appendChild(button)
};

function bodHistory() {
    const section = document.createElement("section");
    section.className = "row d-flex align-items-center text-center"
    root.appendChild(section);
    const divLogo = document.createElement("div");
    divLogo.className = "col-3 d-none d-sm-block";
    section.appendChild(divLogo);
    const imgLogo = document.createElement("img");
    imgLogo.src = "../../assets/img/Logo-header.png";
    imgLogo.className = "img-fluid";
    imgLogo.alt = "Logo";
    divLogo.appendChild(imgLogo);
    const divStory = document.createElement("div");
    divStory.className = "col-12 col-md-5";
    section.appendChild(divStory);
    const text = document.createElement("p");
    text.innerHTML = `Le Gite Hurle est une ancienne ferme, datant du 19ème siècle, qui appartenait à une famille de bergers de Florac. En 1925, elle a été transformée en auberge par un couple d'aventuriers, Émile et Marguerite, qui voulaient partager la beauté de la région avec des voyageurs du monde entier.<br> Ils ont rénové la bâtisse, en conservant son charme rustique et en y ajoutant des touches d'élégance. Chaque chambre est décorée avec des meubles anciens et offre une vue imprenable sur le parc national des Cévennes. La rumeur dit même qu'Émile a sculpté lui-même les poutres apparentes, avec l'aide des gens du village, pour ajouter une touche personnelle à chaque pièce.<br> Aujourd'hui, "Le gite hurle" est connue pour son hospitalité chaleureuse, ses repas gourmands préparés avec des produits locaux et ses histoires au coin du feu, partagées avec des hôtes du monde entier. Un véritable havre de paix où le temps semble s'arrêter pour laisser place à la rêverie.`
    divStory.appendChild(text)
    const divImg = document.createElement("div");
    divImg.className = "col-4 d-none d-lg-block";
    section.appendChild(divImg);
    const img = document.createElement("img");
    img.src = "../../assets/img/photo.png";
    img.className = "img-fluid";
    img.alt = "Photo";
    divImg.appendChild(img);

};

function cards() {
    const section = document.createElement("section");
    section.className = "container mt-5";
    root.appendChild(section);
    const block = document.createElement("div");
    block.className = "row justify-content-center";
    section.appendChild(block);
    let imgTab = ["chambres.png", "arrangement.png", "contact.png"];
    let linkTab = ["../room_page/room.html", "../formules_page/formule.html", "../contact_page/contact.html"];
    let cardTitres = ["Nos chambres", "Nos formules", "Des questions ?"];
    let contents = ["Découvrez nos chambres spacieuses, et luxueuse. Cocon amoureux ou appartement autonome, nous vous proposons une grande variété d'espace disponible.", "Vous venez en amoureux ? Pour deux nuits ? Pour la vie ? Nous avons des offres que vous ne pourrez pas refuser.", "N'hésitez pas à visiter notre page de contact pouvant répondre à des questions courantes et si un doute persiste contactez-nous."];
    for (i in linkTab) {
        const globCard = document.createElement("div");
        globCard.className = "col-md-4 mb-4 d-flex align-items-stretch";
        block.appendChild(globCard);
        const conteneur = document.createElement("div");
        conteneur.className = "card h-100";
        globCard.appendChild(conteneur);
        const img = document.createElement("img");
        img.src = `../../assets/img/${imgTab[i]}`;
        img.className = "card-img-top";
        img.alt = `${cardTitres[i]}`;
        conteneur.appendChild(img);
        const botCard = document.createElement("div");
        botCard.className = "card-body d-flex flex-column justify-content-end";
        conteneur.appendChild(botCard);
        const titre = document.createElement("h5");
        titre.className = "card-title";
        titre.innerText = `${cardTitres[i]}`;
        botCard.appendChild(titre);
        const paragraph = document.createElement("p");
        paragraph.className = "card-text";
        paragraph.innerText = `${contents[i]}`;
        botCard.appendChild(paragraph);
        const anchor = document.createElement("a");
        anchor.href = `${linkTab[i]}`;
        anchor.className = "btn btn-primary mt-auto";
        anchor.innerText = "En savoir plus";
        botCard.appendChild(anchor);

    }
};

navbar(root);
header();
bodHistory();
cards();
footer(root);
