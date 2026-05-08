const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");

close.addEventListener("click", () => {
    menu.style.visibility = "hidden";
});

open.addEventListener("click", () => {
    menu.style.visibility = "visible";
});

const catButtons = document.querySelectorAll(".cat-btn");
const allItems = document.querySelectorAll(".items");

catButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        catButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        allItems.forEach(function(item) {
            const category = item.getAttribute("data-category");

            if (filter === "all") {
                item.classList.remove("hidden");
            } else if (category === filter) {
                item.classList.remove("hidden");
            } else {
                item.classList.add("hidden");
            }
        });

    });
});
