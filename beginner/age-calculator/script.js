// import { DateTime } from "luxon";
const { DateTime } = luxon;
// import datepicker from "js-datepicker";

const birthdateInput = document.querySelector("#birthdate");
const form = document.querySelector("#age-form");
const result = document.querySelector("#result");

datepicker(birthdateInput);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const birthDate = DateTime.fromFormat(
        birthdateInput.value,
        "dd/MM/yyyy"
    );

    const today = DateTime.now();

    if (!birthDate.isValid) {
        result.textContent = "Please enter a valid birth date.";
        return;
    }

    if (birthDate > today) {
        result.textContent = "Birth date cannot be in the future.";
        return;
    }

    const age = today
        .diff(birthDate, ["years", "months", "days"])
        .toObject();
    
    result.textContent = `You are ${Math.floor(age.years)} years ${Math.floor(age.months)} months ${Math.floor(age.days)} days old`;
});