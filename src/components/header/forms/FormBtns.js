export default function FormBtns({isActive, setIsActive}) {
    return (
        <div id="btns">
            <button 
                type="button"
                className="continue"
            >
                Continue
            </button>

            <button 
                type="button"
                className="cancel"
                onClick={() => setIsActive(!isActive)}
            >
                Cancel
            </button>
        </div>
    )
}