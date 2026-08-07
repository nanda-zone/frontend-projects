const popUp = document.querySelector(".cookie-popup");
const acceptBtn = document.querySelector(".accept-btn");
const closeBtn = document.querySelector(".close-btn");

// check if the user already accepted cookie
if (localStorage.getItem("cookieAccepted") == "true") {
    popUp.classList.add("hidden");
}

// accept cookies
acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookieAccepted", "true"); //save user;s choice
    popUp.classList.add("hidden"); //hide pop up
});

//close pop up temporarily
closeBtn.addEventListener("click", () => {
    popUp.classList.add("hidden");
});