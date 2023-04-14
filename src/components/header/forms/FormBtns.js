export default function FormBtns({isActive, setIsActive}) {
    return (
        <div className="modal-btns">
                <button 
                    type="submit"
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