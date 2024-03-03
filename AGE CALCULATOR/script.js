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
        const { age, month, day } = calculateAge(bdayValue);
        console.log(age);

        yearBtn.innerText = age;
        monBtn.innerText = month;
        dayBtn.innerText = day;
    }
}

function calculateAge(bdayValue) {
    const currentDate = new Date();
    const bdayDate = new Date(bdayValue);

    let age = currentDate.getFullYear() - bdayDate.getFullYear();
    let month = currentDate.getMonth() - bdayDate.getMonth();
    let day = currentDate.getDate() - bdayDate.getDate();

    if (month < 0 || (month === 0 && currentDate.getDate() < bdayDate.getDate())) {
        age--;
        month += 12;
    }

    if (day < 0) {
        const lastMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, bdayDate.getDate());
        const daysInLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        day = daysInLastMonth - lastMonthDate.getDate() + currentDate.getDate();
        month--;
    }

    return { age, month, day };
}

button.addEventListener("click", calAge);
