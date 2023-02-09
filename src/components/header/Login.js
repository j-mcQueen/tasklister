import toggleFormModal from "./toggleFormModal";

export default function Login({current, updater}) {
    return (
        <div id="wrap">
            <button
                type="button"
                id="log"
                onClick={() => toggleFormModal(current, updater)}
            >
                login
            </button>
        </div>
    )
}