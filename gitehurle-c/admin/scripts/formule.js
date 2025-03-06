function createElement(tag, className = '', text = '', attributes = {}) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    return element;
}

function createFormulaRow(titre, chambres, duree, reduction, services) {
    const row = createElement('tr');

    const titreTd = createElement('td', '', titre);
    const chambresTd = createElement('td', '', chambres);
    const dureeTd = createElement('td', '', duree);
    const reductionTd = createElement('td', '', reduction);
    const servicesTd = createElement('td', '', services);
    
    const actionsTd = createElement('td');
    
    const editBtn = createElement('button', 'btn btn-primary btn-sm mx-2', 'Edit');
    const deleteBtn = createElement('button', 'btn btn-danger btn-sm mx-2', 'Suppr');
    
    editBtn.addEventListener('click', () => {
        const newTitre = prompt("Modifier le titre:", titre);
        const newChambres = prompt("Modifier les chambres concernées:", chambres);
        const newDuree = prompt("Modifier la durée nécessaire:", duree);
        const newReduction = prompt("Modifier la réduction:", reduction);
        const newServices = prompt("Modifier les services compris:", services);
        
        if (newTitre) titreTd.textContent = newTitre;
        if (newChambres) chambresTd.textContent = newChambres;
        if (newDuree) dureeTd.textContent = newDuree;
        if (newReduction) reductionTd.textContent = newReduction;
        if (newServices) servicesTd.textContent = newServices;

    });
    
    deleteBtn.addEventListener('click', () => {
        if (confirm("Voulez-vous vraiment supprimer cette formule?")) {
            row.remove();
        }
    });

    actionsTd.appendChild(editBtn);
    actionsTd.appendChild(deleteBtn);

    row.appendChild(titreTd);
    row.appendChild(chambresTd);
    row.appendChild(dureeTd);
    row.appendChild(reductionTd);
    row.appendChild(servicesTd);
    row.appendChild(actionsTd);

    return row;
}

function addNewFormula() {
    const titre = prompt("Titre de la formule:");
    const chambres = prompt("Chambre(s) concernée(s):");
    const duree = prompt("Durée nécessaire (en jours):");
    const reduction = prompt("Réduction (en %):");
    const services = prompt("Services compris:");

    if (titre && chambres && duree && reduction && services) {
        const tableBody = document.querySelector('tbody');
        const newRow = createFormulaRow(titre, chambres, `${duree} jours`, `${reduction}%`, services);
        tableBody.appendChild(newRow);
    } else {
        alert("Tous les champs sont requis!");
    }
}

function initializePage() {
    const root = document.getElementById('root');

    const containerFluid = createElement('div', 'container-fluid');
    const row = createElement('div', 'row');
    const mainContent = createElement('main', 'col-md-9 ms-sm-auto col-lg-10 px-md-4');

    const header = createElement('div', 'd-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom');
    header.appendChild(createElement('h1', 'h2', 'Formules'));
    const newButton = createElement('button', 'btn btn-success', 'New');
    header.appendChild(newButton);

    const card = createElement('div', 'card mb-4');
    const cardHeader = createElement('div', 'card-header', 'Gestion des formules');
    const cardBody = createElement('div', 'card-body');
    const table = createElement('table', 'table table-bordered');

    const thead = createElement('thead', 'table-light');
    const headerRow = createElement('tr');
    ['Titre', 'Chambre(s) concernée(s)', 'Durée nécessaire', 'Réduction', 'Services compris', 'Actions'].forEach(text => {
        headerRow.appendChild(createElement('th', '', text));
    });
    thead.appendChild(headerRow);

    const tbody = createElement('tbody');

    tbody.appendChild(createFormulaRow("Weekend Amour", "Chambre duo", "Aucune", "10%", 'Petit-déjeuner "lover" servit au lit'));
    tbody.appendChild(createFormulaRow("Nature et découverte", "Tout type", "> 5 jours", "5%", 'Escapade "rahan" en terre du Gévaudan (le coutelas est fourni)'));
    tbody.appendChild(createFormulaRow("Travail saisonnier", "Tout type", "1 mois minimum de Juin à Aout et Décembre à Mars (inclus)", "20%", "Aucun"));

    table.appendChild(thead);
    table.appendChild(tbody);
    cardBody.appendChild(table);
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    mainContent.appendChild(header);
    mainContent.appendChild(card);
    navBarConstructor(row);
    row.appendChild(mainContent);
    containerFluid.appendChild(row);
    root.appendChild(containerFluid);

    newButton.addEventListener('click', addNewFormula);
}

function init() {
    initializePage();
}

document.addEventListener('DOMContentLoaded', init);
