const isTruncated = (el) => {
    return el.scrollWidth > el.clientWidth;
};
const titleCollapse = () => {
    document.querySelectorAll(".expand-title").forEach((button) => {
        const contentContainer = button.parentElement.previousElementSibling;
        button.classList.toggle(
            "hidden",
            contentContainer.scrollWidth <= contentContainer.clientWidth
        );
        button.addEventListener("click", () => {
            button.classList.toggle("rotate-180");
            contentContainer.classList.toggle("truncate");
        });
    });
};
const descCollapse = () => {
    document.querySelectorAll(".expand-desc").forEach((button) => {
        const contentContainer = button.parentElement.previousElementSibling;
        button.classList.toggle(
            "hidden",
            contentContainer.scrollHeight <= contentContainer.clientHeight
        );
        button.addEventListener("click", () => {
            button.classList.toggle("rotate-180");
            contentContainer.classList.toggle("multiLineTruncate");
        });
    });
};
descCollapse();
titleCollapse();

const navMenu = () => {
    const mobNav = document.getElementById("mobNav");
    const navToggler = document.querySelector("#nav-toggler");

    navToggler.addEventListener("click", () => {
        if (mobNav.style.height == "205px") {
            mobNav.style.height = "0px"
        } else {
            mobNav.style.height = "205px"
        }
    })
}
navMenu()


const themeSwitcher = () => {
}