const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
setInterval(() => {
    let currentTime = new Date();
    let hrs = document.getElementById('hrs');
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');
    let ampm = document.getElementById('ampm');
    let dat = document.getElementById('date');
    let day = document.getElementById('day');
    let month = document.getElementById('month');

    // to 12-hour format
    let hours = currentTime.getHours();
    let amPmIndicator = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // 12 for AM/PM
    
    // adjusted time
    hrs.innerHTML = (hours < 10 ? "0" : "") + hours;
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
    ampm.innerHTML = amPmIndicator;

    day.innerHTML = days[currentTime.getDay()];
    dat.innerHTML = currentTime.getDate();
    month.innerHTML = months[currentTime.getMonth()];
}, 1000);
