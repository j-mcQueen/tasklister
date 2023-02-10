export default function Login({current, updater}) {
    return (
        <div id="wrap">
            <button
                type="button"
                id="log"
                onClick={() => updater(!current)}
            >
                login
            </button>
        </div>
    )
}