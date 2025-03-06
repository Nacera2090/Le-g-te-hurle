let data = [
    { nom: 'Nom 1', espace: 'Chambre duo', disponibilite: 'Oui', etat: 'Validé', date: '2024-10-01' },
    { nom: 'Nom 2', espace: 'Chambre familliale', disponibilite: 'Non', etat: 'En attente', date: '2024-10-05' },
    { nom: 'Nom 4', espace: 'Chambre appartement', disponibilite: 'Non', etat: 'Refusé', date: '2024-10-12' },
    { nom: 'Nom 3', espace: 'Chambre duo', disponibilite: 'Oui', etat: 'Validé', date: '2024-10-07' }
];

function createElement(type, classNames = '', text = '') {
    const element = document.createElement(type);
    if (classNames) element.className = classNames;
    if (text) element.textContent = text;
    return element;
}

function createActionButtons(actionsTd) {
    const buttonValid = createElement('button', 'btn btn-success btn-sm mx-2', 'Validé');
    const buttonReject = createElement('button', 'btn btn-danger btn-sm mx-2', 'Refuser');
    const buttonReply = createElement('button', 'btn btn-secondary btn-sm mx-2', 'Répondre');

    buttonReply.addEventListener('click', () => {
        window.location.href = '../htdocs/Formulaire_Retour.html';
    });

    buttonValid.addEventListener('click', () => {
        actionsTd.removeChild(buttonValid);
        actionsTd.removeChild(buttonReject);
        const validImg = createElement('img');
        validImg.src = '../asset/valid.webp';
        validImg.className = "img-fluid mx-2";
        validImg.style = "max-width: 25px; height: 18px;";
        actionsTd.appendChild(validImg);
    });

    buttonReject.addEventListener('click', () => {
        actionsTd.removeChild(buttonValid);
        actionsTd.removeChild(buttonReject);
        const rejectImg = createElement('img');
        rejectImg.src = '../asset/reject.jpg';
        rejectImg.className = "img-fluid mx-2";
        rejectImg.style = "max-width: 30px; height: 20px;";
        actionsTd.appendChild(rejectImg);
    });

    actionsTd.appendChild(buttonValid);
    actionsTd.appendChild(buttonReject);
    actionsTd.appendChild(buttonReply);
}

function createReservationTable(data) {
    const table = createElement('table', 'table table-bordered');
    table.id = "id-table";

    // head du tableau
    const thead = createElement('thead', 'table-light');
    const headRow = createElement('tr');
    ['Nom', 'Espace', 'Disponibilité', 'État', 'Date', 'Actions'].forEach(text => {
        const th = createElement('th', '', text);
        headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.appendChild(thead);

    //row tableau
    const tbody = createElement('tbody');

    data.forEach(rowData => {
        const row = createElement('tr');
        ['nom', 'espace', 'disponibilite', 'etat', 'date'].forEach(key => {
            const td = createElement('td', '', rowData[key]);
            row.appendChild(td);
        });

        // Add bouton 
        const actionsTd = createElement('td');
        createActionButtons(actionsTd);
        row.appendChild(actionsTd);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    return table;
}


function createCard(title, contentElement) {
    const card = createElement('div', 'card mb-4');
    const cardHeader = createElement('div', 'card-header', title);
    const cardBody = createElement('div', 'card-body');

    cardBody.appendChild(contentElement);
    card.appendChild(cardHeader);
    card.appendChild(cardBody);

    return card;
}


function createMainContent() {
    const main = createElement('main', 'col-md-9 ms-sm-auto col-lg-10 px-md-4 main-content');

    const headerDiv = createElement('div', 'd-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom');
    const h1 = createElement('h1', 'h2', 'Reservation');
    headerDiv.appendChild(h1);
    const reservationTable = createReservationTable(data);
    const reservationCard = createCard('Reservation', reservationTable);

    main.appendChild(headerDiv);
    main.appendChild(reservationCard);

    return main;
}

const root = document.getElementById('root');

function buildPageContent() {

    const container = createElement('div', 'container-fluid');

    const row = createElement('div', 'row');

    const mainContent = createMainContent();

    navBarConstructor(row);

    row.appendChild(mainContent);

    container.appendChild(row);

    root.appendChild(container);

    let buttontri = document.createElement('button');
    buttontri.addEventListener('click', tri);
    buttontri.innerText='Trier';
    buttontri.className = 'btn btn-secondary w-100';
    mainContent.appendChild(buttontri);


}


document.addEventListener('DOMContentLoaded', () => {

    buildPageContent()



});


function tri() {
    Object.keys(data).forEach(key => delete data[key]);

    let entriesValide = [];
    let entriesEnAttente = [];
    let entriesRefuse = []

    const tableRef = document.getElementById('id-table');
    const tbody = tableRef.querySelector('tbody')
    const trs = tbody.getElementsByTagName('tr');


    for (const tr of trs) {
        // console.log(tr);
        let tds = tr.getElementsByTagName('td');

        if (tds[3].innerText.trim() === "Validé") {

            entriesValide.push({
                nom: tds[0].textContent.trim(),
                espace: tds[1].textContent.trim(),
                disponibilite: tds[2].textContent.trim(),
                etat: tds[3].textContent.trim(),
                date: tds[4].textContent.trim()
            });
        }
        else if (tds[3].innerText.trim() === "En attente") {

            entriesEnAttente.push({
                nom: tds[0].textContent.trim(),
                espace: tds[1].textContent.trim(),
                disponibilite: tds[2].textContent.trim(),
                etat: tds[3].textContent.trim(),
                date: tds[4].textContent.trim()
            });
        }
        else if (tds[3].innerText.trim() === "Refusé") {

            entriesRefuse.push({
                nom: tds[0].textContent.trim(),
                espace: tds[1].textContent.trim(),
                disponibilite: tds[2].textContent.trim(),
                etat: tds[3].textContent.trim(),
                date: tds[4].textContent.trim()
            });
        }

    }

    data.push(...entriesValide);
    data.push(...entriesEnAttente);
    data.push(...entriesRefuse);

    root.innerHTML = "";
    buildPageContent();
}



