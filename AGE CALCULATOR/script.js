const calculatebt = document.getElementById("calculate-btn");
const datebt = document.getElementById("enter-date");
const yearbt = document.getElementById("year-btn");
const monthbt = document.getElementById("month-btn");
const daybt = document.getElementById("day-btn");

function calAge() {
    const ageValue = datebt.value;
    if (ageValue === "") {
        alert("Please Enter your Date of Birth");
    } else {
        const { age, month, day } = calculateAge(ageValue);
        console.log(age);

        yearbt.innerText = age;
        monthbt.innerText = month;
        daybt.innerText = day;
    }
}

function calculateAge(ageValue) {
    const currentDate = new Date();
    const bdayDate = new Date(ageValue);

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

calculatebt.addEventListener("click", calAge);
