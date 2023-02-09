import toggleFormModal from "../toggleFormModal";

export default function FormBtns(current, updater) {
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
                onClick={() => toggleFormModal(current, updater)}
            >
                cancel
            </button>
        </div>
    )
}