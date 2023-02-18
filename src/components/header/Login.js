export default function Login({current, updater}) {
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