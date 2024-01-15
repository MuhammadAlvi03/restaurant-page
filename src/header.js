const navButtonsArr = [];
export function getNavButtons() {
    return navButtonsArr;
}



export default function header() {
    const content = document.querySelector('#content');
    const headerContainer = document.createElement('div');
    headerContainer.id = 'header';
    const headerNav = document.createElement('nav');
    headerContainer.appendChild(headerNav);
    document.body.insertBefore(headerContainer, content);

    createNavButtons();
}

function createNavButtons() {

    const headerNav = document.querySelector('nav');
    const buttonNames = ['Home', 'Menu', 'Contact']

    for (let i = 0; i < buttonNames.length; i++) {
        let navButton = document.createElement('button');
        navButton.className = 'nav-button';
        navButton.textContent = buttonNames[i];
        headerNav.appendChild(navButton);
        navButtonsArr.push(navButton);
    }
}