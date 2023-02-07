export default function Login() {
    const handleClick = () => {
        const modal = document.getElementById("modal");
        modal.style.display = "block";
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