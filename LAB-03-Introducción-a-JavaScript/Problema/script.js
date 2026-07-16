const nameInput = document.getElementById('nameInput');
const phoneInput = document.getElementById('phoneInput');
const addContactButton = document.getElementById('addContactButton');
const contactList = document.getElementById('contactList');

// Creo el contacto, y lo agrego a la lista de contactos
function addContact(name, phone) {
    const li = document.createElement('li');

    const contactInfo = document.createElement('span');
    contactInfo.textContent = `${name} - ${phone}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(contactInfo);
    li.appendChild(deleteButton);
    contactList.appendChild(li);
}

// Evento para agregar un contacto cuando se hace clic en el botón
addContactButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();

    if (name === '' || phone === '') {
        alert('Por favor, introduce tanto el nombre como el número de teléfono.');
        return;
    }

    addContact(name, phone);

    nameInput.value = '';
    phoneInput.value = '';
});
