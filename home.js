// Function to toggle 'light' class on container element
function ray() {
    const container = document.querySelector('.container');
    const togglebtn = document.querySelector('.toggle');

    if (container && togglebtn) {
        togglebtn.onclick = function () {
            container.classList.toggle('light');
        };
    } else {
        console.error('Elements not found for ray function');
    }
}

// Function to toggle 'active' class on menubar
function jay() {
    const menubar = document.getElementById('menubar');

    if (menubar) {
        menubar.classList.toggle('active');
    } else {
        console.error('Menubar element not found');
    }
}

// Function to update date and time every second
function dates() {
    const dt = new Date();
    let hr = dt.getHours();
    let min = dt.getMinutes();
    let sec = dt.getSeconds();
    let session = 'AM';

    if (hr === 0) {
        hr = 12;
    }
    if (hr > 12) {
        hr -= 12;
        session = 'PM';
    }

    hr = hr < 10 ? '0' + hr : hr;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    const dateElement = document.querySelector('.date');
    const timeElement = document.querySelector('.time');

    if (dateElement && timeElement) {
        dateElement.innerHTML = dt.toDateString();
        timeElement.innerHTML = `${hr}:${min}:${sec} ${session}`;
    } else {
        console.error('Date or Time elements not found');
    }

    setTimeout(dates, 1000);
}

// Initialize functions
document.addEventListener('DOMContentLoaded', () => {
    ray();
    jay();
    dates();
});
