import In from "./forms/In"

export default function Login() {
    const openForms = () => {
        return (
            <div id="form">
                <In/>
            </div>
        )
    }

    return (
        <div id="wrap">
            <button
                type="button"
                id="log"
                onClick={openForms}
            >
                login
            </button>
        </div>
    )
}