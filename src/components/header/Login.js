export default function Login({current, updater}) {
    // TODO blur background on click
    return (
        <div id="wrap">
            <button
                type="button"
                id="log"
                disabled={current}
                onClick={() => updater(!current)}
            >
                login
            </button>
        </div>
    )
}