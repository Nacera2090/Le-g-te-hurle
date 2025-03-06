//------------------------------------- DOM CONSTRUCT --------------------------------------//

const root = document.getElementById('root');

const mainDiv = document.createElement('div');
mainDiv.className = "container-fluid";
root.append(mainDiv);

const rowDiv = document.createElement('div');
rowDiv.className = "row";
mainDiv.appendChild(rowDiv);


navBarConstructor(rowDiv);


// Créer élément principal
const mainContent = document.createElement('main');
mainContent.className = 'col-md-9 ms-sm-auto col-lg-10 px-md-4 main-content';

// Créer la section Dashboard
const dashboardSection = document.createElement('div');
dashboardSection.className = 'd-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom';
const dashboardTitle = document.createElement('h1');
dashboardTitle.className = 'h2';
dashboardTitle.textContent = 'Dashboard';
dashboardSection.appendChild(dashboardTitle);
mainContent.appendChild(dashboardSection);

// Fonction pour créer une ligne de réservation
function createReservationRow(nom, espace, date) {
    const row = document.createElement('div');
    row.className = 'row mb-2';

    const colNom = document.createElement('div');
    colNom.className = 'col-md-3 border border-rounded bg-light';
    colNom.textContent = nom;

    const colEspace = document.createElement('div');
    colEspace.className = 'col-md-3 border border-rounded bg-light';
    colEspace.textContent = espace;

    const colDate = document.createElement('div');
    colDate.className = 'col-md-3 border border-rounded bg-light';
    colDate.textContent = date;

    const colActions = document.createElement('div');
    colActions.className = 'col-md-3';
    const buttonValid = document.createElement('button');
    buttonValid.className = 'btn btn-success btn-sm mx-2';
    buttonValid.textContent = 'Validé';


    const buttonReject = document.createElement('button');
    buttonReject.className = 'btn btn-danger btn-sm mx-2';
    buttonReject.textContent = 'Refuser';
    const buttonReply = document.createElement('button');
    buttonReply.className = 'btn btn-secondary btn-sm mx-2';
    buttonReply.textContent = 'Répondre';
    buttonReply.addEventListener('click', () => {
        goTo('../htdocs/Formulaire_Retour.html');
    })

    buttonValid.addEventListener('click', () => {
        colActions.removeChild(buttonValid);
        colActions.removeChild(buttonReject);
        let validImg = document.createElement('img');
        validImg.src = '../asset/valid.webp';
        validImg.className = "img-fluid";
        validImg.style = "max-width: 25px; height: 18px;"
        colActions.appendChild(validImg);
    })

    buttonReject.addEventListener('click', () => {
        colActions.removeChild(buttonValid);
        colActions.removeChild(buttonReject);
        let rejectImg = document.createElement('img');
        rejectImg.src = '../asset/reject.jpg';
        rejectImg.className = "img-fluid";
        rejectImg.style = "max-width: 30px; height: 20px;"
        colActions.appendChild(rejectImg);
    })

    colActions.appendChild(buttonValid);
    colActions.appendChild(buttonReject);
    colActions.appendChild(buttonReply);

    row.appendChild(colNom);
    row.appendChild(colEspace);
    row.appendChild(colDate);
    row.appendChild(colActions);

    return row;
}

// Créer la section de réservation
const reservationCard = document.createElement('div');
reservationCard.className = 'card mb-4';
const reservationHeader = document.createElement('div');
reservationHeader.className = 'card-header btn';
reservationHeader.style.backgroundColor = "#dcab6b";
reservationHeader.textContent = 'Reservation';
reservationHeader.addEventListener('click', () => {
    goTo("../htdocs/Reservation.html");
})
reservationHeader.addEventListener('mouseenter', () => { mouseEnter(reservationHeader) });
reservationHeader.addEventListener('mouseleave', () => { mouseLeave(reservationHeader) });
reservationCard.appendChild(reservationHeader);

const reservationBody = document.createElement('div');
reservationBody.className = 'card-body';

reservationBody.appendChild(createReservationRow('Christian keyboard', 'Chambre duo', "23/10/2024 - 15/11/2024"));
reservationBody.appendChild(createReservationRow('Georges Buisson', 'Chambre appartement', '25/11/2024 - 12/11/2024'));
reservationBody.appendChild(createReservationRow('Jérome Miel', 'Chambre familliale', '10/11/2024 - 24/11/2024'));

reservationCard.appendChild(reservationBody);
mainContent.appendChild(reservationCard);

// Créer la section Prix des chambres
const priceCard = document.createElement('div');
priceCard.className = 'card mb-3';
const priceHeader = document.createElement('div');
priceHeader.className = 'card-header btn';
priceHeader.style.backgroundColor = "#dcab6b";
priceHeader.addEventListener('mouseenter', () => { mouseEnter(priceHeader) });
priceHeader.addEventListener('mouseleave', () => { mouseLeave(priceHeader) });
priceHeader.addEventListener('click', () => {
    goTo("../htdocs/Espace.html");
});


priceHeader.textContent = 'Prix des chambres';
priceCard.appendChild(priceHeader);

const priceBody = document.createElement('div');
priceBody.className = 'card-body';

// Menu déroulant
const dropdownDiv = document.createElement('div');
dropdownDiv.className = 'mb-3 mt-2';
const dropdownSelect = document.createElement('select');
dropdownSelect.className = 'form-select';
const option1 = document.createElement('option');
option1.selected = true;
option1.textContent = 'Selectionner une chambre';
const option2 = document.createElement('option');
option2.value = '1';
option2.textContent = 'Chambre duo';
const option3 = document.createElement('option');
option3.value = '2';
option3.textContent = 'Chambre familliale';
const option4 = document.createElement('option');
option4.value = '3';
option4.textContent = "Chambre 'appartement'";

let priceA = 50;
let priceB = 75;
let priceC = 90;
dropdownSelect.addEventListener('change', () => {

    updateRoomPrice(dropdownSelect.value)
    updated()

})


dropdownSelect.appendChild(option1);
dropdownSelect.appendChild(option2);
dropdownSelect.appendChild(option3);
dropdownSelect.appendChild(option4);
dropdownDiv.appendChild(dropdownSelect);
priceBody.appendChild(dropdownDiv);

// Ligne avec ancien prix et nouveau prix
const priceRow = document.createElement('div');
priceRow.className = 'row mb-3';
const colAncienPrix = document.createElement('div');
colAncienPrix.className = 'col-md-6 text-center text-danger mt-3';
const colNouveauPrix = document.createElement('div');
colNouveauPrix.className = 'col-md-6';
const nouveauPrixInput = document.createElement('input');
nouveauPrixInput.type = "number";
nouveauPrixInput.className = 'form-control';
nouveauPrixInput.placeholder = 'Nouveau prix';
nouveauPrixInput.disabled = true;
nouveauPrixInput.addEventListener('change', () => {
    updated();
})

colNouveauPrix.appendChild(nouveauPrixInput);
priceRow.appendChild(colAncienPrix);
priceRow.appendChild(colNouveauPrix);
priceBody.appendChild(priceRow);

// Ajout de l'image
const imageInputDiv = document.createElement('div');
imageInputDiv.className = 'mb-3';
const imageInput = document.createElement('input');
imageInput.type = 'file';
imageInput.className = 'form-control';
imageInput.placeholder = 'Nouvelle image';
imageInput.addEventListener('change', () => {
    updated()
});

imageInputDiv.appendChild(imageInput);
priceBody.appendChild(imageInputDiv);

// Ajout de la description
const descriptionDiv = document.createElement('div');
descriptionDiv.className = 'mb-3';
const descriptionTextarea = document.createElement('textarea');
descriptionTextarea.className = 'form-control';
descriptionTextarea.rows = 1;
descriptionTextarea.placeholder = 'Nouvelle description';
descriptionTextarea.addEventListener('input', () => {
    updated()
})

descriptionDiv.appendChild(descriptionTextarea);
priceBody.appendChild(descriptionDiv);


// Bouton Valider
const validateButton = document.createElement('button');
validateButton.className = 'btn btn-success';
validateButton.textContent = 'Validé';
validateButton.addEventListener('click', () => {
    setRoomPrice(dropdownSelect.value, nouveauPrixInput.value);
    nouveauPrixInput.value = "";
    validateButton.disabled = true;
});
validateButton.disabled = true;
disableInputs(true);
priceBody.appendChild(validateButton);

priceCard.appendChild(priceBody);
mainContent.appendChild(priceCard);

// Créer la section Derniers messages
const messageCard = document.createElement('div');
messageCard.className = 'card mb-4';
const messageHeader = document.createElement('div');
messageHeader.className = 'card-header btn';
messageHeader.style.backgroundColor = "#dcab6b";
messageHeader.addEventListener('click', () => {
    goTo("../htdocs/Messagerie.html");
})

messageHeader.addEventListener('mouseenter', () => { mouseEnter(messageHeader) });
messageHeader.addEventListener('mouseleave', () => { mouseLeave(messageHeader) });

messageHeader.textContent = 'Derniers messages';
messageCard.appendChild(messageHeader);

const messageBody = document.createElement('div');
messageBody.className = 'card-body';

function createMessageRow(nomPrenom, message) {
    const row = document.createElement('div');
    row.className = 'row mb-2';
    const colNomPrenom = document.createElement('div');
    colNomPrenom.className = 'col-md-4 fw-bold';
    colNomPrenom.textContent = nomPrenom;
    const colMessage = document.createElement('div');
    colMessage.className = 'col-md-8';
    colMessage.textContent = message;

    row.appendChild(colNomPrenom);
    row.appendChild(colMessage);
    let separator = document.createElement('hr');
    messageBody.appendChild(separator);

    return row;
}

messageBody.appendChild(createMessageRow("John Doe", "Message : Bonjour, j'aimerais savoir plus sur les réservations."));
messageBody.appendChild(createMessageRow("Jane Smith", "Message: Est-ce que vous avez des chambres disponibles ce week-end ?"));


messageCard.appendChild(messageBody);
mainContent.appendChild(messageCard);

// Ajout du contenu principal au body
rowDiv.appendChild(mainContent);




//------------------------------------- Function --------------------------------------//


function updateRoomPrice(caseInt) {


    switch (parseInt(caseInt, 10)) {
        case 1:
            colAncienPrix.textContent = `Ancien prix : ${priceA}€`;
            nouveauPrixInput.disabled = false;
            disableInputs(false);
            resetValue()
            updated();
            break;

        case 2:
            colAncienPrix.textContent = `Ancien prix : ${priceB}€`;
            nouveauPrixInput.disabled = false;
            disableInputs(false);
            resetValue()
            updated();
            break

        case 3:
            colAncienPrix.textContent = `Ancien prix : ${priceC}€`;
            disableInputs(false);
            resetValue()
            updated();
            break

        default:
            colAncienPrix.textContent = ``;
            resetValue()
            disableInputs(true);
            break;
    }
}

function setRoomPrice(caseInt, newprice) {

    if (newprice < 0) {
        newprice = 0;
    }


    if (newprice && !isNaN(newprice)) {
        switch (parseInt(caseInt, 10)) {
            case 1:
                priceA = newprice;
                break;

            case 2:
                priceB = newprice;
                break

            case 3:
                priceC = newprice;
                break

            default:
                break;

        }
    }

    updateRoomPrice(caseInt);
}


function updated() {

    if (nouveauPrixInput.value || descriptionTextarea.value || imageInput.value) {
        validateButton.disabled = false;
    } else {
        validateButton.disabled = true;
    }
}

function resetValue() {
    imageInput.value = "";
    descriptionTextarea.value = "";
    nouveauPrixInput.value = "";
}

function disableInputs(bool) {
    nouveauPrixInput.disabled = bool;
    imageInput.disabled = bool;
    descriptionTextarea.disabled = bool;
}

function mouseEnter(element) {
    element.style.backgroundColor = "#ffffb3";
}

function mouseLeave(element) {
    element.style.backgroundColor = "#dcab6b";
}

