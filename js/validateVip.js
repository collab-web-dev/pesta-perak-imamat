document.addEventListener('DOMContentLoaded', function() {
    const confirmationSelect = document.getElementById('confirmation');
    const staySelect = document.getElementById('stay');

    function handleConfirmationChange() {
        const value = confirmationSelect.value;

        if (value === 'Hadir Misa Saja' || value === 'Tidak Hadir') {
            staySelect.value = 'Tidak Menginap';
            staySelect.disabled = true;
        } else if (value === 'Hadir') {
            staySelect.value = '';
            staySelect.disabled = false;
        }
    }
    confirmationSelect.addEventListener('change', handleConfirmationChange);
});