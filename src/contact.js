export default function contact() {
    const content = document.querySelector('#content');
    const contact = document.createElement('div'); contact.className = 'contact';
    const contactSign = document.createElement('div'); contactSign.className = 'mcsign'; contactSign.style = '--scale:3';
    const contactTextArr = ['Contact Us', 'mcsteve@gapple.com', '555-208-4145', 'X: 900, Y: 80, Z: -1400'];
    for (let i = 0; i < contactTextArr.length; i++) {
        let contactSpan = document.createElement('span');
        contactSpan.textContent = contactTextArr[i];
        contactSign.appendChild(contactSpan);
    }
    contact.appendChild(contactSign);
    content.appendChild(contact);
}