const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
const formatButton = document.getElementById("formatChange");
const themeButton = document.getElementById("theme");

let is24HourFormat = true;

function updateTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    if (!is24HourFormat) {
        let ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        timeElement.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
    } else {
        timeElement.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }

    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString(undefined, options);
}

function pad(number) {
    return number < 10 ? "0" + number : number;
}

formatButton.addEventListener("click", () => {
    is24HourFormat = !is24HourFormat;
    formatButton.textContent = is24HourFormat ? "Switch to 12-Hour" : "Switch to 24-Hour";
    updateTime();
});

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeButton.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
});

setInterval(updateTime, 1000);
updateTime();
