const scrollButton = document.getElementById("scroll-button");

if (scrollButton) {
    scrollButton.addEventListener("click", () => {
        document.querySelector('html').scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
