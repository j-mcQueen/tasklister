export default function FormBtns() {
    const handleClick = () => {
        const modal = document.getElementById("modal");
        modal.style.display = "none";
    }

    return (
        <div id="btns">
            <button 
                type="button"
                id="cont"
            >
                continue
            </button>

            <button 
                type="button"
                id="cancel"
                onClick={handleClick}
            >
                cancel
            </button>
        </div>
    )
}