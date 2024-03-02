const button = document.getElementById("btn")
const bdayBtn = document.getElementById("inp-date")
const yearBtn = document.getElementById("yearBtn")
const monBtn = document.getElementById("monthBtn")
const dayBtn = document.getElementById("dayBtn")


function calAge() {
    const bdayValue = bdayBtn.value;
    if (bdayValue === "") {
        alert("Please Enter your Birthday")
    } else {
        const age = getAge(bdayValue)
        const month = getMonth(bdayValue)
        const day = getDay(bdayValue)
        console.log(age)

        yearBtn.innerText = age
        monBtn.innerText = month
        dayBtn.innerText = day
    }
}

function getAge(bdayValue) {

    const currDate = new Date()
    const bdayDate = new Date(bdayValue)

    let age = currDate.getFullYear() - bdayDate.getFullYear()
    const month = currDate.getMonth() - bdayDate.getMonth()

    if (month < 0 || (month === 0 && currDate.getDate() < bdayDate.getDate())) {
        age--
    }

    return age
}

function getMonth(bdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(bdayValue);

    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    let month = currentDate.getMonth() - birthdayDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        month = 12 + month - 1; // Adjust month difference
    }

    return month;
}

function getDay(bdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(bdayValue);

    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    let day = currentDate.getDate() - birthdayDate.getDate();

    if (day < 0 || (day === 0 && currentDate.getMonth() < birthdayDate.getMonth())) {
        day = Math.abs(day);
        day = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate() - day;
    }

    return day;
}

btn.addEventListener("click", calAge)