const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
    accordion.addEventListener("click", () => {
        const isActive = accordion.classList.contains("active");

        accordions.forEach((item) => {
            item.classList.remove("active");
        });

        if (!isActive) {
            accordion.classList.add("active");
        }
    });
});