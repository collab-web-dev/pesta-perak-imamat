var submitted = false;
const form = document.getElementById('registrationForm');
const confirmModal = document.getElementById('confirmModal');
const successModal = document.getElementById('successModal');

const phoneRegex = /^\08[0-9]{8,11}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function toggleFormState(disabled) {
    const elements = form.querySelectorAll('input, select, button');
    elements.forEach(element => {
        element.disabled = disabled;
    });

    const submitBtn = form.querySelector('.btn-submit');
    if (disabled) {
        submitBtn.dataset.originalText = submitBtn.innerText;
        submitBtn.innerText = 'MENGIRIM...';
    } else if (submitBtn.dataset.originalText) {
        submitBtn.innerText = submitBtn.dataset.originalText;
    }
}

function showError(input, message) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.error-msg');
    input.classList.add('invalid');
    errorElement.innerText = message;
    errorElement.style.display = 'block';
}

function clearError(input) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.error-msg');
    input.classList.remove('invalid');
    errorElement.innerText = '';
    errorElement.style.display = 'none';
}

function validateForm() {
    let isValid = true;

    const nama = document.getElementById('nama');
    const telephone = document.getElementById('telephone');
    const email = document.getElementById('email');
    const confirmation = document.getElementById('confirmation');

    if (nama.value.trim() === '') {
        showError(nama, 'Wajib diisi');
        isValid = false;
    } else {
        clearError(nama);
    }

    if (telephone.value.trim() === '') {
        showError(telephone, 'Wajib diisi');
        isValid = false;
    } else if (!phoneRegex.test(telephone.value.trim())) {
        showError(telephone, 'Format nomor harus 08XXXXXXXXXX');
        isValid = false;
    } else {
        clearError(telephone);
    }

    if (email.value.trim() === '') {
        showError(email, 'Wajib diisi');
        isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
        showError(email, 'Format email tidak valid (contoh: nama@domain.com)');
        isValid = false;
    } else {
        clearError(email);
    }

    if (confirmation.value === '') {
        showError(confirmation, 'Wajib diisi');
        isValid = false;
    } else {
        clearError(confirmation);
    }

    return isValid;
}

function openConfirmationModal() {
    if (validateForm()) {
        confirmModal.classList.add('active');
    }
}

function closeConfirmationModal() {
    confirmModal.classList.remove('active');
}

function submitForm() {
    submitted = true;
    closeConfirmationModal();
    
    form.submit();
    
    setTimeout(() => {
        toggleFormState(true);
    }, 50);
}

function handleSuccess() {
    form.reset();
    submitted = false;
    
    toggleFormState(false);
    
    successModal.classList.add('active');
}

function redirectToIndex() {
    window.location.href = 'index.html';
}
