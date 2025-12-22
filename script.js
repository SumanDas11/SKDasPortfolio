function toggleMenu() {
    document.getElementById("nav").classList.toggle("show");
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

    error.textContent = "Message sent successfully!";
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
    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
}

window.onload = () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }
};
