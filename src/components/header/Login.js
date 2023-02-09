export default function Login({cur, next}) {
    const handleClick = () => {
        const modal = document.getElementById("modal");
        const login = document.getElementById("login");
        if (!cur) {
            modal.style.display = "block";
            login.setAttribute("disabled", "disabled");
        } else {
            modal.style.display = "none";
            login.removeAttribute("disabled");
        }
        next(!cur);
    }

    return (
        <div id="wrap">
            <button
                type="button"
                id="log"
                onClick={handleClick}
            >
                login
            </button>
        </div>
    )
}