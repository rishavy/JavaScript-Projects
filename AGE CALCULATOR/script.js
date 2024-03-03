const button = document.getElementById("calculate-btn");
const bdayBtn = document.getElementById("enter-date");
const yearBtn = document.getElementById("year-btn");
const monBtn = document.getElementById("month-btn");
const dayBtn = document.getElementById("day-btn");

function calAge() {
    const bdayValue = bdayBtn.value;
    if (bdayValue === "") {
        alert("Please Enter your Date of Birth");
    } else {
        const age = getAge(bdayValue);
        const { month, day } = getMonthAndDay(bdayValue);
        console.log(age);

        yearBtn.innerText = age;
        monBtn.innerText = month;
        dayBtn.innerText = day;
    }
}

function getAge(bdayValue) {
    const currDate = new Date();
    const bdayDate = new Date(bdayValue);

    let age = currDate.getFullYear() - bdayDate.getFullYear();
    const month = currDate.getMonth() - bdayDate.getMonth();

    if (month < 0 || (month === 0 && currDate.getDate() < bdayDate.getDate())) {
        age--;
    }

    return age;
}

function getMonthAndDay(bdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(bdayValue);

    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    let month = age * 12 + currentDate.getMonth() - birthdayDate.getMonth();
    let day = currentDate.getDate() - birthdayDate.getDate();

    if (day < 0 || (day === 0 && currentDate.getMonth() < birthdayDate.getMonth())) {
        const lastMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        day = lastMonthDate.getDate() - Math.abs(day);
        month--;
    }

    return { month, day };
}

button.addEventListener("click", calAge);
