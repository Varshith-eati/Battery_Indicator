let percentage = document.querySelector(".percentage");
let percent = document.querySelector(".percent");

navigator.getBattery().then(function (battery) {
    percentage.style.width = battery.level * 100 + "%";
    percent.innerHTML = Math.floor(battery.level * 100) + "%";

    // Change color based on battery level
    if(level <= 20) {
        percentage.style.background = "linear-gradient(90deg, #ff3b3b, #ff0000)";
    } else if(level <= 50) {
        percentage.style.background = "linear-gradient(90deg, #ffeb3b, #ff9800)";
    } else {
        percentage.style.background = "linear-gradient(90deg, #ffeb3b, #27ff00)";
    }
});

let sec = document.querySelector('.sec'); // Fixed: added dot for class selector
let toggle = document.querySelector(".toggle");
toggle.addEventListener("click", function() {
    sec.classList.toggle("dark");
});

