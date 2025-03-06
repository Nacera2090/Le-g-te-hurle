const divRoot = document.getElementById("root");
document.body.style = "background-color : #dcab6b";



function navbar(parent) {
    const nav = document.createElement("nav");
    nav.className = "navbar navbar-expand-md navbar-light navbar-shrink";
    nav.id = "mainNav";
    nav.style = "background-color: #DCAB6B;"
    parent.insertAdjacentElement("afterbegin", nav);
    const container = document.createElement("div");
    container.className = "container";
    nav.appendChild(container);
    const logo = document.createElement("a");
    logo.href = "./landing_page/home.html";
    logo.className = "navbar-brand";
    container.appendChild(logo);
    logo.innerHTML = `<img src="../assets/img/Logo-header.png" class="w-25" alt="logo du gite"/>`;
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
        let address = ["./room_page/room.html", "./formules_page/formule.html", "./contact_page/contact.html", "./Formulaire.html"];
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

navbar(divRoot);


const titre = document.createElement("h1");
titre.innerText = "Formulaire de réservation";
titre.className = "text-center border border-dark border-2 mx-auto p-2 rounded  m-5 col-8 offset-2 fw-bold";
divRoot.appendChild(titre);

const form = document.createElement("div"); // Crée un élément div // à rajouter (action)
form.className = "form border border-dark border-2 mx-auto p-3 rounded m-5 col-8";
divRoot.appendChild(form); // Ajoute l'élément à divRoot


const formrow1 = document.createElement("div"); // Crée un élément div 
form.appendChild(formrow1);
formrow1.className = "form-row mx-auto py-3 d-flex flex-md-row  flex-column";

const nom = document.createElement("div"); // row-1
nom.className = "form-group col-md-5";
const nomLabel = document.createElement("label");
nomLabel.textContent = "Nom:";
nom.appendChild(nomLabel);
const nomInput = document.createElement("input");
nomInput.className = "form-control";
nomInput.placeholder = "DUPONT";
nom.appendChild(nomInput);
formrow1.appendChild(nom);


const prenom = document.createElement("div");// row-1
prenom.className = "form-group col-md-5 offset-md-1";
const prenomLabel = document.createElement("label");
prenomLabel.textContent = "Prénom:";
prenom.appendChild(prenomLabel);
const prenomInput = document.createElement("input");
prenomInput.className = "form-control";
prenomInput.placeholder = "Marc";
prenom.appendChild(prenomInput);
formrow1.appendChild(prenom);


const formrow2 = document.createElement("div"); // Crée un élément div 
formrow2.className = "form-row mx-auto py-3 d-flex flex-md-row  flex-column"
form.appendChild(formrow2);

const tel = document.createElement("div");
tel.className = "form-group col-md-5";
const telLabel = document.createElement("label");
telLabel.textContent = "Téléphone:";
tel.appendChild(telLabel);
const telInput = document.createElement("input");
telInput.className = "form-control";
telInput.type = "tel";
telInput.placeholder = "+33XXXXXXXXX";
tel.appendChild(telInput);
formrow2.appendChild(tel);


const emailGroup = document.createElement("div");
emailGroup.className = "form-group-2 col-md-5 offset-md-1";
const emailLabel = document.createElement("label");
emailLabel.textContent = "Adresse e-mail:";
emailGroup.appendChild(emailLabel);
const emailInput = document.createElement("input");
emailInput.className = "form-control";
emailInput.placeholder = "name@example.com";
emailGroup.appendChild(emailInput);
formrow2.appendChild(emailGroup);


const formrow3 = document.createElement("div"); // Crée un élément div 
formrow3.className = "form-row mx-auto py-3 d-flex flex-md-row  flex-column"
form.appendChild(formrow3);

const arrivee = document.createElement("div");
arrivee.className = "form-group col-md-5 ";
const arriveeLabel = document.createElement("label");
arriveeLabel.textContent = "Date d'arrivée:";
arrivee.appendChild(arriveeLabel);
const arriveeInput = document.createElement("input");
arriveeInput.className = "form-control ";
arriveeInput.id = "arrivee";
arriveeInput.type = "date";
arrivee.appendChild(arriveeInput);
formrow3.appendChild(arrivee);


const depart = document.createElement("div");
depart.className = "form-group col-md-5 offset-md-1";
const departLabel = document.createElement("label");
departLabel.textContent = "Date de départ:";
depart.appendChild(departLabel);
const departInput = document.createElement("input");
departInput.className = "form-control";
departInput.id = "depart";
departInput.type = "date";
depart.appendChild(departInput);
formrow3.appendChild(depart);


const formrow4 = document.createElement("div"); // Crée un élément div 
formrow4.className = "form-row mx-auto py-3 d-flex flex-md-row  flex-column";
form.appendChild(formrow4);

const adultes = document.createElement("div");
adultes.className = "form-group col-md-2 m-1";
const adultesLabel = document.createElement("label");
adultesLabel.textContent = "Nombre de personnes:";
adultes.appendChild(adultesLabel);
adultes.value = 0;
const adultesInput = document.createElement("input");
adultesInput.className = "form-control";
adultesInput.type = "number";
adultesInput.min = "1";
adultes.appendChild(adultesInput);
formrow4.appendChild(adultes);


const types = document.createElement("div"); // Crée un élément div 
types.className = "form-row col-md-12";
formrow4.appendChild(types);


const formules = document.createElement("select");
formules.className = "form-group col-md-4 offset-md-2";
formules.id = "types";
const formulesLabel = document.createElement("label");
formulesLabel.textContent = "Formules:";
formulesLabel.for = "types";
formules.appendChild(formulesLabel);
const formulesInput = document.createElement("input");
formulesInput.className = "form-control";
formules.appendChild(formulesInput);
types.appendChild(formules);


const list = document.createElement("option");
list.value = "";
list.textContent = "Veuillez choisir votre espace.";
formules.appendChild(list);

const list1 = document.createElement("option");
list1.value = "Formule A";
list1.textContent = "Chambre pour deux personnes";
formules.appendChild(list1);

const list2 = document.createElement("option");
list2.value = "Formule B";
list2.textContent = "Chambre familiale";
formules.appendChild(list2);

const list3 = document.createElement("option");
list3.value = "Formule C";
list3.textContent = "Appartement";
formules.appendChild(list3);


const valider = document.createElement("button");
valider.className = "form-group col-md-2 m-2 btn btn-success";
valider.textContent = "Valider";
types.appendChild(valider);


const formrow5 = document.createElement("div"); // Crée un élément div 
formrow5.className = "form-row mx-auto py-3 d-flex flex-md-row  flex-column";
form.appendChild(formrow5);

const tarif = document.createElement("div");
tarif.className = "form-group col-md-12 ";
const tarifLabel = document.createElement("label");
tarifLabel.textContent = "Tarif:";
tarif.appendChild(tarifLabel);
const tarifInput = document.createElement("input");
tarifInput.className = "form-control";
tarif.appendChild(tarifInput);
formrow5.appendChild(tarif);

const formrow6 = document.createElement("div"); // Crée un élément div 
formrow6.className = "form-row mx-auto py-3 d-flex flex-md-row  flex-column";
form.appendChild(formrow6);

const message = document.createElement("textarea");
message.className = "form-group col-md-6 rows=3";
message.id = "id-message";
const messageLabel = document.createElement("label");
messageLabel.textContent = "Message:";
formrow6.appendChild(messageLabel);
const messageInput = document.createElement("input");
messageInput.className = "form-control:";
message.placeholder = "Precisez ici vos besoins spécifiques (accessibilité, équipements, animaux,etc.)";
message.appendChild(messageInput);
formrow6.appendChild(message);


const formrow7 = document.createElement("div"); // Crée un élément div 
formrow7.className = "form-row";
form.appendChild(formrow7);


const reserver = document.createElement("button");
reserver.className = "form-group btn btn-success";
reserver.textContent = "Réserver";
formrow7.appendChild(reserver);


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
    admin.href = "../admin/htdocs/Login.html"
    admin.innerText = "Admin page"
    contact.appendChild(admin)
};



footer(divRoot);


let client;
let selection = document.getElementById("types");
let roomtype;
let prix;
let tarifs;
let saison = ["12", "01", "02", "03", "06", "07", "08"];

adultesInput.addEventListener("input", function () {
    client = adultesInput.value;
    if (client > 2) {
        list1.disabled = true;
    } else {
        list1.disabled = false;
    }
});


selection.addEventListener("input", function () {
    roomtype = selection.value;
});


let startDate;
let start = document.getElementById("arrivee");
start.addEventListener("input", function () {
    startDate = start.valueAsNumber;
    smonth = (start.value).slice(5, 7);
}
);

let finishDate;
let finish = document.getElementById("depart");
finish.addEventListener("input", function () {
    finishDate = finish.valueAsNumber;
    fmonth = (finish.value).slice(5, 7);
}
);

let duree;
finish.addEventListener("input", function () {
    duree = (finishDate - startDate) / 86400000;
})


start.addEventListener("input", function () {
    duree = (finishDate - startDate) / 86400000;
})

function resultat() {

    if (duree < 0) {
        tarifInput.value = "Vous ne pouvez pas partir avant d'arriver, c'est physiquement impossible.";
        return duree
    }
    else if (duree > 2) {
        if (client == 2 && roomtype == "Formule A") {
            if (saison.includes(smonth) || saison.includes(fmonth)) {
                prix = ((duree * tarifs) - (duree * tarifs * 0.1)) + (duree * tarifs * 0.1);
                tarifInput.value = `Vous en avez pour ${prix}€ grâce à notre formule weekend d'amour en saison.`;
                return prix;
            } else {
                prix = (duree * 35) - (duree * 35 * 0.1);
                tarifInput.value = `Vous en avez pour ${prix}€ grâce à notre formule weekend d'amour.`;
                return prix;
            }
        }
        else if (duree > 5) {
            if (saison.includes(smonth) || saison.includes(fmonth)) {
                prix = ((duree * tarifs) - (duree * tarifs * 0.05)) + (duree * tarifs * 0.1);
                tarifInput.value = `Vous en avez pour ${prix}€ grâce à notre formule nature et découverte en saison.`;
                return prix;
            }
            prix = (duree * tarifs) - (duree * tarifs * 0.05);
            tarifInput.value = `Vous en avez pour ${prix}€ grâce à notre formule nature et découverte.`;
            return prix;
        }
        else if (duree > 30 && (saison.includes(smonth) || saison.includes(fmonth))) {
            prix = (duree * tarifs) - (duree * tarifs * 0.2);
            tarifInput.value = `Vous en avez pour ${prix}€ grâce à notre formule travail saisonnier`;
            return prix;
        }
        else if (saison.includes(smonth) || saison.includes(fmonth)) {
            prix = (duree * tarifs) + (duree * tarifs * 0.1);
            tarifInput.value = `Vous en avez pour ${prix}€, pas mal en pleine saison.`;
            return prix;
        }
        else {
            prix = duree * tarifs;
            tarifInput.value = `Vous en avez pour ${prix}€.`;
            return prix
        }

    } else {
        tarifInput.value = "Vous devez reserver au moins deux nuit.";
        return duree
    }

}

let calculTarif;
valider.addEventListener("click", resultat);


formules.addEventListener("input", function () {
    switch (roomtype) {
        case "Formule A":
            tarifs = 35;
            break;
        case "Formule B":
            tarifs = 55;
            break;
        case "Formule C":
            tarifs = 110;
            break;
        default:
            console.log("probleme")
    }
})