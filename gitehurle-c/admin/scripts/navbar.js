function navBarConstructor(parent){

    const sidebar = document.createElement('nav');

    sidebar.style.height = "100vh";
    sidebar.style.backgroundColor = "#774e24";

    sidebar.classList.add('col-md-3', 'col-lg-2', 'd-md-block', 'sidebar');
    
    const stickyDiv = document.createElement('div');
    stickyDiv.classList.add('position-sticky');
    
    const userInfo = document.createElement('div');
    userInfo.classList.add('text-center', 'py-3');
    
    const userImage = document.createElement('img');
    userImage.src = '../asset/user_img.jpg';
    userImage.alt = 'User Image';
    userImage.width = 80;
    userImage.classList.add('rounded-circle');
    
    const userIdText = document.createElement('p');
    let username = getData("username");
    if(username) userIdText.textContent = username;
    else userIdText.textContent = "Missing username";
    userIdText.className = "text-light mt-3"
    
    userInfo.appendChild(userImage);
    userInfo.appendChild(userIdText);
    
    const navList = document.createElement('ul');
    navList.classList.add('nav', 'flex-column');
    
    // Création des navlink
    const navItems = [
        { name: 'Home', href: 'Dashboard.html', isActive: true },
        { name: 'Gestion', href: '#', isDropdown: true },
        { name: 'Messagerie', href: 'Messagerie.html', isActive: false },
        { name: 'Deconnexion', href: 'Login.html', isActive: false }
    ];
    
    navItems.forEach(item => {
        const navItem = document.createElement('li');
        navItem.classList.add('nav-item');
    
        const navLink = document.createElement('a');
        navLink.className = "text-light fw-semibold"
        navLink.classList.add('nav-link');
        navLink.href = item.href;
        navLink.textContent = item.name;
        if (item.isActive) navLink.classList.add('active');
    
        // Si l'item a un collapse
        if (item.isDropdown) {
            navLink.setAttribute('data-bs-toggle', 'collapse');
            navLink.setAttribute('role', 'button');
            navLink.setAttribute('aria-expanded', 'false');
            navLink.setAttribute('aria-controls', 'gestionCollapse');
            navLink.href = '#gestionCollapse';
    
            const collapseDiv = document.createElement('div');
            collapseDiv.classList.add('collapse');
            collapseDiv.id = 'gestionCollapse';
    
            const subList = document.createElement('ul');
            subList.classList.add('nav', 'flex-column', 'ms-3', 'collapse-inner');
    
            const subNavItems = [
                { name: 'Reservation', href: 'Reservation.html' },
                { name: 'Espace', href: 'Espace.html' },
                { name: 'Formule', href: 'Formule.html' }
            ];
    
            subNavItems.forEach(subItem => {
                const subNavItem = document.createElement('li');
                subNavItem.classList.add('nav-item');
    
                const subNavLink = document.createElement('a');
                subNavLink.className = "text-light";
                subNavLink.classList.add('nav-link');
                subNavLink.href = subItem.href;
                subNavLink.textContent = subItem.name;
    
                subNavItem.appendChild(subNavLink);
                subList.appendChild(subNavItem);
            });
    
            collapseDiv.appendChild(subList);
            navItem.appendChild(navLink);
            navItem.appendChild(collapseDiv);
        } else {
            navItem.appendChild(navLink);
        }
    
        navList.appendChild(navItem);
    });
    
    stickyDiv.appendChild(userInfo);
    stickyDiv.appendChild(navList);
    sidebar.appendChild(stickyDiv);
    
    parent.appendChild(sidebar);

}



