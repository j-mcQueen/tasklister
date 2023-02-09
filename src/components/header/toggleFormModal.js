export default function toggleFormModal(current, updater) {
    // needs to be a function since it needs to be called on the buttons with current and updater
    const modal = document.getElementById("modal");
    const login = document.getElementById("log");
    if (!current) {
        modal.style.display = "block";
        login.setAttribute("disabled", "disabled");
    } else {
        modal.style.display = "none";
        login.removeAttribute("disabled");
    }
    updater(!current);
}