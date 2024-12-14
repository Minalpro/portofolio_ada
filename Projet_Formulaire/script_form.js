document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire
    let hasError = false;

    // Récupération des champs
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');

    // Validation du nom
    if (name.value.trim() === '') {
        setError(name, 'Le nom est obligatoire.');
        hasError = true;
    } else {
        clearError(name);
    }

    // Validation de l'email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        setError(email, 'Veuillez entrer une adresse email valide.');
        hasError = true;
    } else {
        clearError(email);
    }

    // Validation du téléphone
    const phonePattern = /^[0-9]{10}$/;
    if (phone.value.trim() !== '' && !phonePattern.test(phone.value.trim())) {
        setError(phone, 'Le numéro de téléphone doit contenir 10 chiffres.');
        hasError = true;
    } else {
        clearError(phone);
    }

    // Validation du message
    if (message.value.trim() === '') {
        setError(message, 'Le message est obligatoire.');
        hasError = true;
    } else {
        clearError(message);
    }

    // Afficher un message de succès si aucune erreur
    if (!hasError) {
        document.getElementById('success-message').textContent = 'Merci pour votre message !';
        document.getElementById('success-message').style.display = 'block';
        // Réinitialiser le formulaire
        this.reset();
    }
});

// Fonction pour afficher une erreur
function setError(element, message) {
    const errorElement = document.getElementById(`${element.id}-error`);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    element.classList.add('error');
}

// Fonction pour effacer une erreur
function clearError(element) {
    const errorElement = document.getElementById(`${element.id}-error`);
    errorElement.textContent = '';
    errorElement.style.display = 'none';
    element.classList.remove('error');
}