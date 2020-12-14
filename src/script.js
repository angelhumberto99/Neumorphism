//getting the html elements that correspond to the clock hands
const hour = document.querySelector("[hour]");
const minute = document.querySelector("[minute]");
const second = document.querySelector("[second]");

function setTime() {
    //getting the current time
    const date = new Date();
    const s = date.getSeconds() / 60;
    const m = (s + date.getMinutes()) / 60;
    const h = (m + date.getHours()) / 12;
    //rotating the clock hands, corresponding to the current time
    rotateHands(second, s);
    rotateHands(minute, m);
    rotateHands(hour, h);
}

//sets the rotation for each hand of the clock
function rotateHands(element, degrees) {
    element.style.setProperty('--rotation', (degrees * 360));
}

setInterval(setTime,1000); //call "setTime" every second
setTime(); //initializing the clock