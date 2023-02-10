export default function FormBtns({current, updater}) {
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
                onClick={() => updater(!current)}
            >
                cancel
            </button>
        </div>
    )
}