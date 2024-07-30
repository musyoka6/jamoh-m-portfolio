function ray() {
    let container = document.querySelector('.container');
    let togglebtn = document.querySelector('.toggle');

    togglebtn.onclick = function () {
        container.classList.toggle('light');
    }
}

function jay() {
    document.getElementById('menubar').classList.toggle('active');
}

function dates() {
    function updateClock() {
        let dt = new Date();
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
        hr = (hr < 10) ? "0" + hr : hr;
        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;
        document.querySelector('.date').innerHTML = dt.toDateString();
        document.querySelector('.time').innerHTML = `${hr} : ${min} : ${sec} ${session}`;
    }

    // Update the clock immediately, then every second
    updateClock();
    setInterval(updateClock, 1000);
}
