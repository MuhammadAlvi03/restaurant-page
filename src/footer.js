export default function footer() {
    const footerContainer = document.createElement('div'); footerContainer.id = 'footer';
    const footerText = document.createElement('span'); footerText.textContent = 'MuhammadAlvi03';
    footerContainer.appendChild(footerText);
    document.body.appendChild(footerContainer);
}