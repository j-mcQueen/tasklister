export default function FormBtns({isActive, setIsActive}) {
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
                className="cancel"
                onClick={() => setIsActive(!isActive)}
            >
                cancel
            </button>
        </div>
    )
}