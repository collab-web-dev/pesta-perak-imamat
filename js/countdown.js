const eventDate = new Date("October 31, 2026 17:00:00").getTime();

function updateDigitWithAnimation(wrapperId, newValue) {
    const wrapper = document.getElementById(wrapperId);
    if (!wrapper) return;

    const currentDigit = wrapper.querySelector('.digit.current');
    
    if (currentDigit && currentDigit.innerText === newValue) {
        return;
    }

    const incomingDigit = document.createElement('span');
    incomingDigit.className = 'digit incoming';
    incomingDigit.innerText = newValue;

    if (currentDigit) {
        currentDigit.classList.remove('current');
        currentDigit.classList.add('outgoing');
    }

    wrapper.appendChild(incomingDigit);

    setTimeout(() => {
        if (currentDigit) {
            currentDigit.remove();
        }
        incomingDigit.classList.remove('incoming');
        incomingDigit.classList.add('current');
    }, 400);
}

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
        updateDigitWithAnimation("days-wrapper", "00");
        updateDigitWithAnimation("hours-wrapper", "00");
        updateDigitWithAnimation("minutes-wrapper", "00");
        updateDigitWithAnimation("seconds-wrapper", "00");
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const formatNum = (num) => (num < 10 ? "0" + num : String(num));

    updateDigitWithAnimation("days-wrapper", formatNum(days));
    updateDigitWithAnimation("hours-wrapper", formatNum(hours));
    updateDigitWithAnimation("minutes-wrapper", formatNum(minutes));
    updateDigitWithAnimation("seconds-wrapper", formatNum(seconds));
}

setInterval(updateCountdown, 1000);
updateCountdown();