export default function FormBtns({isActive, setIsActive}) {
    return (
        <div id="btns">
                <button 
                    type="button"
                    className="blue"
                >
                    Continue
                </button>

                <button 
                    type="button"
                    className="red"
                    onClick={() => setIsActive(!isActive)}
                >
                    Cancel
                </button>
        </div>
    )
}