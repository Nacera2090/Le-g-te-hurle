document.body.id = "page-top";
document.body.style = "background-color: #DCAB6B";
const root = document.getElementById("root");
root.className = "pt-4"

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
    lien.href = "./contact_page/contact.html"
    lien.innerText = "Contact"
    contact.appendChild(lien)
    const admin = document.createElement("a");
    admin.className = "link-dark text-decoration-none";
    admin.href = "../../admin/htdocs/Login.html"
    admin.innerText = "Admin page"
    contact.appendChild(admin)
}

function main() {
    const sectionTitre = document.createElement("section");
    sectionTitre.className = "py-5";
    root.appendChild(sectionTitre);
    const containerTitre = document.createElement("div");
    containerTitre.className = "container mt-5";
    sectionTitre.appendChild(containerTitre);
    const ligneTitre = document.createElement("div");
    ligneTitre.className = "row justify-content-center";
    containerTitre.appendChild(ligneTitre);
    const divTitre = document.createElement("div");
    divTitre.className = "col-lg-6 text-center";
    ligneTitre.appendChild(divTitre);
    const titre = document.createElement("h1");
    titre.innerHTML = `Vous avez des questions ?<br>On a des réponses`;
    divTitre.appendChild(titre);
    let questions = ["Y a-t-il une majoration des prix pendant certaines périodes ?", "Acceptez-vous les animaux de compagnie ?", "Quelles sont les conditions de réservation ?", "Disposez-vous d'un parking ?"];
    let reponses = ["Oui, pendant la haute saison (juin à août et décembre à mars), une majoration de 10% est appliquée sur le tarif des nuitées.", "Oui, les animaux de compagnie sont les bienvenus, mais nous vous demandons de nous prévenir à l'avance pour nous assurer que nous pouvons bien vous accueillir.", "Nous demandons un acompte de 30% pour toute réservation, le solde étant dû à l'arrivée. En cas d'annulation, merci de nous prévenir au moins 7 jours à l'avance pour un remboursement complet.", "Oui, un parking privé est disponible gratuitement pour tous nos clients. Vous n'avez pas besoin de réserver à l'avance, des places sont disponibles pour chaque hébergement."]
    for (i in questions) {
        const section = document.createElement("section");
        section.className = "py-2";
        root.appendChild(section);
        const container = document.createElement("div");
        container.className = "container my-1";
        section.appendChild(container);
        const row = document.createElement("div");
        row.className = "row justify-content-center";
        container.appendChild(row);
        const div = document.createElement("div");
        div.className = "col-lg-6";
        row.appendChild(div);
        const question = document.createElement("h2");
        question.innerText = `${questions[i]}`;
        div.appendChild(question);
        const reponse = document.createElement("p");
        reponse.className = "lead"
        reponse.innerText = `${reponses[i]}`
        div.appendChild(reponse)
    }
    const form = document.createElement("form");
    form.className = "py-2";
    root.appendChild(form);
    const rowForm = document.createElement("div");
    rowForm.className = "row justify-content-center";
    form.appendChild(rowForm);
    const widthForm = document.createElement("div");
    widthForm.className = "col-lg-8";
    rowForm.appendChild(widthForm);
    const rowInfo = document.createElement("div");
    rowInfo.className = "row justify-content-center";
    widthForm.appendChild(rowInfo);
    const label = document.createElement("h2");
    label.innerText = "Vous avez une autre question ? Ecrivez-nous :";
    rowInfo.appendChild(label);
    const rowFlex = document.createElement("div");
    rowFlex.className = "mb-3 d-inline-flex"
    rowInfo.appendChild(rowFlex);
    const colName = document.createElement("div");
    colName.className = "col-lg-4";
    rowFlex.appendChild(colName);
    const nameLabel = document.createElement("label");
    nameLabel.className = "form-label";
    nameLabel.htmlFor = "Name";
    colName.appendChild(nameLabel);
    const inputName = document.createElement("input")
    inputName.type = "text";
    inputName.className = "form-control";
    inputName.id = "Name";
    inputName.placeholder = "Votre nom";
    colName.appendChild(inputName);
    const colMail = document.createElement("div");
    colMail.className = "col-lg-7 offset-1";
    rowFlex.appendChild(colMail);
    const mailLabel = document.createElement("label");
    mailLabel.className = "form-label";
    mailLabel.htmlFor = "email";
    colMail.appendChild(mailLabel);
    const inputMail = document.createElement("input")
    inputMail.type = "text";
    inputMail.className = "form-control";
    inputMail.id = "email";
    inputMail.placeholder = "Votre mail: xyz@abc.com";
    colMail.appendChild(inputMail);
    const textRow = document.createElement("div");
    textRow.className = "row justify-content-center";
    widthForm.appendChild(textRow);
    const area = document.createElement("div");
    area.className = "mb-3 mx-6";
    textRow.appendChild(area)
    const labelArea = document.createElement("label");
    labelArea.className = "form-label";
    labelArea.htmlFor = "commentaire";
    labelArea.textContent = "Votre question :";
    area.appendChild(labelArea);
    const textArea = document.createElement("textarea");
    textArea.className = "form-control";
    textArea.id = "commentaire";
    textArea.rows = "3";
    area.appendChild(textArea);
    const button = document.createElement("button");
    button.className = "btn btn-primary";
    button.type = "submit";
    button.textContent = "Submit";
    textRow.appendChild(button)
};

navbar(root);

main();

footer(root);
