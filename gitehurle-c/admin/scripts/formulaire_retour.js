function createElement(tag, className = '', text = '', attributes = {}) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    return element;
}

function RetourPage() {
    const root = document.getElementById('root');

    const containerFluid = createElement('div', 'container-fluid');
    const row = createElement('div', 'row');
    const mainContent = createElement('main', 'col-md-9 ms-sm-auto col-lg-10 px-md-4');

    const header = createElement('div', 'd-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom');
    header.appendChild(createElement('h1', 'h2', 'Message de retour'));

    const form = createElement('form');

    const objetDiv = createElement('div', 'mb-3');
    const objetLabel = createElement('label', 'form-label', 'Objet');
    const objetInput = createElement('input', 'form-control', '', { type: 'text', id: 'objet', placeholder: 'Objet' });
    objetDiv.appendChild(objetLabel);
    objetDiv.appendChild(objetInput);

    const messageDiv = createElement('div', 'mb-3');
    const messageLabel = createElement('label', 'form-label', 'Message du retour');
    const messageTextarea = createElement('textarea', 'form-control', '', { id: 'messageRetour', rows: 6, placeholder: 'Message du retour' });
    messageDiv.appendChild(messageLabel);
    messageDiv.appendChild(messageTextarea);

    const buttonDiv = createElement('div', 'text-end');
    const submitButton = createElement('button', 'btn btn-success', 'Envoyé', { type: 'submit' });
    buttonDiv.appendChild(submitButton);

    form.appendChild(objetDiv);
    form.appendChild(messageDiv);
    form.appendChild(buttonDiv);

    mainContent.appendChild(header);
    mainContent.appendChild(form);
    navBarConstructor(row);
    row.appendChild(mainContent);
    containerFluid.appendChild(row);
    root.appendChild(containerFluid);
}


document.addEventListener('DOMContentLoaded', RetourPage);
