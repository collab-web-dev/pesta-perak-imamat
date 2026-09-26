function openModal() {
    document.getElementById('registrationModal').classList.add('active');
}

function closeModal() {
    document.getElementById('registrationModal').classList.remove('active');
}

window.onclick = function(event) {
    var modal = document.getElementById('registrationModal');
    if (event.target === modal) {
        closeModal();
    }
};