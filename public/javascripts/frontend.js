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
      mobNav.style.height = "0px";
    } else {
      mobNav.style.height = "205px";
    }
  });
};
navMenu();

const themeSwitcher = () => {
    const themeSwitcherBtn = document.querySelectorAll(".theme-switcher");
    const html = document.querySelector("html");
  
    // Check localStorage for theme and set initial theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      html.classList.add("dark");
    }
  
    themeSwitcherBtn.forEach((e) => {
      e.addEventListener("click", () => {
        if (html.classList.contains("dark")) {
          e.innerHTML = `<img src="/svg/sun-line.svg" alt="theme-switcher">`;
          html.classList.remove("dark");
          localStorage.setItem("theme", "light");
          console.log(localStorage);
        } else {
          e.innerHTML = `<img src="/svg/moon-line.svg" alt="theme-switcher">`;
          html.classList.add("dark");
          localStorage.setItem("theme", "dark");
          console.log(localStorage);
        }
      });
    });
  };
  
  // Call the function to initialize the theme
  themeSwitcher();
  
