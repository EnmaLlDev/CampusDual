document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".gallery-track ul");
    const prevBtn = document.querySelector(".gallery-button.prev");
    const nextBtn = document.querySelector(".gallery-button.next");

    let scrollAmount = 0;
    const scrollStep = 300;

    prevBtn.addEventListener("click", () => {
        track.scrollBy({
            left: -scrollStep,
            behavior: "smooth",
        });
    });

    nextBtn.addEventListener("click", () => {
        track.scrollBy({
            left: scrollStep,
            behavior: "smooth",
        });
    });
});
