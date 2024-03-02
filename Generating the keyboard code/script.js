const keyDisplay = document.getElementById('key-Press');
const keycodeDisplay = document.getElementById('key-Code');

document.onkeydown = (event) =>{
   keyDisplay.innerHTML = `<span></span> <span class="eventKey">${event.key}</span>`;
   keycodeDisplay.innerHTML = `<span></span> <span class="eventKey">${event.keyCode}</span>`;
   keycodeDisplay.style.boxShadow = "0 0 400px rgba(0,0,0,0.1)";

   

}