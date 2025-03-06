function createElement(tag, className = '', text = '') {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;

    return element;
}

function createMessageSection(nom, message) {
    const messageDiv = createElement('div', 'd-flex justify-content-between align-items-center border-bottom py-2');

    const contentDiv = createElement('div');
    const strong = createElement('strong', '', nom);
    const para = createElement('p', 'mb-0', message);

    contentDiv.appendChild(strong);
    contentDiv.appendChild(para);

    const buttonDiv = createElement('div', 'd-flex');

    const replyButton = createElement('button', 'btn btn-success btn-sm me-2 repondre', 'Répondre');
    replyButton.addEventListener('click', () => {
        goTo('Formulaire_Retour.html')
    });

    const deleteButton = createElement('button', 'btn btn-danger btn-sm', 'Supprimer');
    deleteButton.addEventListener('click', () => {
        messageDiv.remove();
    });

    buttonDiv.appendChild(replyButton);
    buttonDiv.appendChild(deleteButton);

    messageDiv.appendChild(contentDiv);
    messageDiv.appendChild(buttonDiv);

    return messageDiv;
}

function initializeMessageriePage() {
    const root = document.getElementById('root');

    const containerFluid = createElement('div', 'container-fluid');
    const row = createElement('div', 'row');
    const mainContent = createElement('main', 'col-md-9 ms-sm-auto col-lg-10 px-md-4');

    const header = createElement('div', 'd-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom');
    header.appendChild(createElement('h1', 'h2', 'Messagerie'));

    const card = createElement('div', 'card mb-4');
    const cardHeader = createElement('div', 'card-header', 'Gestion des messages');
    const cardBody = createElement('div', 'card-body');

    const messages = [
        { nom: "John Doe", message: "Bonjour, j'aimerais savoir plus sur les réservations." },
        { nom: "Jane Smith", message: "Est-ce que vous avez des chambres disponibles ce week-end ?" },
        { nom: "Robert Brown", message: "Merci pour votre aide!" },
        { nom: "Emily Davis", message: "J'ai une question concernant les services." },
    ];

    messages.forEach(msg => {
        const messageSection = createMessageSection(msg.nom, msg.message);
        cardBody.appendChild(messageSection);
    });

    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    mainContent.appendChild(header);
    mainContent.appendChild(card);
    navBarConstructor(row);
    row.appendChild(mainContent);
    containerFluid.appendChild(row);
    root.appendChild(containerFluid);
}

document.addEventListener('DOMContentLoaded', initializeMessageriePage);