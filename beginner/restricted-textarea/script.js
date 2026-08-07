const textarea = document.querySelector("#message");
const counter = document.querySelector("#current");

textarea.addEventListener("input", () => {
    const count = textarea.value.length;

    counter.textContent = count;

    if (count === 250) {
        textarea.classList.add("limit");
        counter.parentElement.classList.add("limit");
    } else {
        textarea.classList.remove("limit");
        counter.parentElement.classList.remove("limit");
    }
});