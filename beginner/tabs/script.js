const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabs.forEach(tab => {
            tab.classList.remove("active");
        });

        contents.forEach(content => {
            content.classList.remove("active");
        });

        tab.classList.add("active");

        contents[index].classList.add("active");
    });
});