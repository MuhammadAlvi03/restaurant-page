import contact from "./contact";
import home from "./home";

export default function header() {
    const content = document.querySelector('#content');
    const headerContainer = document.createElement('div');
    headerContainer.id = 'header';
    const headerNav = document.createElement('nav');

    const buttonNames = ['Home', 'Menu', 'Contact']
    const navButtonsArr = [];
    for (let i = 0; i < buttonNames.length; i++) {
        let navButton = document.createElement('button');
        navButton.className = 'nav-button';
        navButton.textContent = buttonNames[i];
        navButtonsArr.push(navButton);
        headerNav.appendChild(navButton);
    }
    headerContainer.appendChild(headerNav);
    document.body.insertBefore(headerContainer, content);

    const [homeButton, menuButton, contactButton] = navButtonsArr;

    homeButton.addEventListener('click', () => {
        while (content.firstChild) {
            content.removeChild(content.lastChild);
        }
        homeButton.className = 'nav-button-active';
        menuButton.className = 'nav-button';
        contactButton.className = 'nav-button';
        home();
    })

    menuButton.addEventListener('click', () => {
        while (content.firstChild) {
            content.removeChild(content.lastChild);
        }
        homeButton.className = 'nav-button';
        menuButton.className = 'nav-button-active';
        contactButton.className = 'nav-button';
        // menu() once done with menu module
    })

    contactButton.addEventListener('click', () => {
        while (content.firstChild) {
            content.removeChild(content.lastChild);
        }
        homeButton.className = 'nav-button';
        menuButton.className = 'nav-button';
        contactButton.className = 'nav-button-active';
        contact();
    })


}