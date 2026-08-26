function toggleMenu() {
    const navigation = document.getElementById("nav");
    const menuButton = document.querySelector(".menu");
    const isOpen = navigation.classList.toggle("show");
    menuButton.setAttribute("aria-expanded", isOpen);
}

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const error = document.getElementById("error");

    if (!name || !email || !message) {
        error.textContent = "Please fill all fields.";
        error.style.color = "red";
        return false;
    }

    // error.textContent = "Message sent successfully!";
    error.textContent = "Please contact via email/phone. This functionality is under implementation!";
    error.style.color = "green";
    return false;
}

function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
    updateThemeToggle();
    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
}

function updateThemeToggle() {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const themeLabel = document.getElementById("theme-label");
    const isDarkMode = document.body.classList.contains("dark");

    if (themeToggle && themeIcon && themeLabel) {
        themeIcon.textContent = isDarkMode ? "☀" : "☾";
        themeLabel.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
        themeToggle.setAttribute(
            "aria-label",
            isDarkMode ? "Switch to light mode" : "Switch to dark mode"
        );
    }
}

function initializeActiveNavigation() {
    const navigationLinks = [...document.querySelectorAll("#nav a")];
    const sections = navigationLinks
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

    const setActiveLink = (sectionId) => {
        navigationLinks.forEach((link) => {
            const isActive = link.getAttribute("href") === `#${sectionId}`;
            link.classList.toggle("active", isActive);
            link.setAttribute("aria-current", isActive ? "page" : "false");
        });
    };

    setActiveLink("home");

    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveLink(entry.target.id);
                }
            });
        },
        { rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach((section) => sectionObserver.observe(section));
}

window.onload = () => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDarkMode)) {
        document.body.classList.add("dark");
    }
    updateThemeToggle();
    initializeActiveNavigation();
};
