export default function header() {
    const content = document.querySelector('#content');
    const headerContainer = document.createElement('div');
    headerContainer.id = 'header';
    const headerNav = document.createElement('nav');

    const buttonNames = ['Home', 'Menu', 'Contact']
    const buttonArr = [];
    for (let i = 0; i < 3; i++) {
        let navButton = document.createElement('button');
        navButton.className = 'nav-button';
        navButton.textContent = buttonNames[i];
        buttonArr.push(navButton);
        headerNav.appendChild(navButton);
    }
    headerContainer.appendChild(headerNav);
    document.body.insertBefore(headerContainer, content);
}