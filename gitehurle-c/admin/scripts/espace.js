function createElement(type, className, content = '', attributes = {}) {
    const element = document.createElement(type);
    if (className) element.className = className;
    if (content) element.innerHTML = content;

    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    return element;
}

function createTableRow(imgSrc, name, description, price) {
    const row = createElement('tr', '');

    const imgTd = createElement('td', 'col-1');
    const imgElement = createElement('img', 'img-fluid', '', { src: imgSrc, alt: name });
    imgElement.style = 'max-width: 130px; height: auto;';
    imgTd.appendChild(imgElement);

    const nameTd = createElement('td', 'text-center h5', name);
    const descriptionTd = createElement('td', 'text-center fst-italic', description);
    const priceTd = createElement('td', 'text-center fw-semibold', price);

    row.appendChild(imgTd);
    row.appendChild(nameTd);
    row.appendChild(descriptionTd);
    row.appendChild(priceTd);

    return row;
}


function createMainContent() {
    const main = createElement('main', 'col-md-9 ms-sm-auto col-lg-10 px-md-4 main-content');



    const headerDiv = createElement('div', 'd-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom');
    const title = createElement('h1', 'h2', 'Gestion d\'espaces');
    headerDiv.appendChild(title);

    const cardDiv = createElement('div', 'card mb-4');
    const cardHeader = createElement('div', 'card-header', 'Gestion d\'espaces');
    const cardBody = createElement('div', 'card-body');

    const table = createElement('table', 'table table-bordered');
    const tableHead = createElement('thead', 'table-light', '<tr><th>Image</th><th>Nom</th><th>Description</th><th>Prix</th></tr>');

    const tableBody = createElement('tbody', '');
    tableBody.appendChild(createTableRow('../asset/placeholder.webp', 'Chambre duo', 'Parfait pour un sejour en amoureux', '50€'));
    tableBody.appendChild(createTableRow('../asset/placeholder.webp', 'Chambre familliale', 'Idéale pour les familles en vacances', '75€'));
    tableBody.appendChild(createTableRow('../asset/placeholder.webp', 'Chambre appartement', '', '90€'));

    table.appendChild(tableHead);
    table.appendChild(tableBody);
    cardBody.appendChild(table);

    cardDiv.appendChild(cardHeader);
    cardDiv.appendChild(cardBody);

    main.appendChild(headerDiv);
    main.appendChild(cardDiv);

    return main;
}


function PageConstruct(){

    const root = document.getElementById('root');
    const container = createElement('div', 'container-fluid');
    const row = createElement('div', 'row');
    navBarConstructor(row);
    
    row.appendChild(createMainContent());
    container.appendChild(row);
    root.appendChild(container);
}

document.addEventListener('DOMContentLoaded', PageConstruct);
