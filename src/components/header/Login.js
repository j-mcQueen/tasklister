export default function Login({isActive, setIsActive}) {
    return (
        <div id="wrap">
            <button
                type="button"
                id="log"
                disabled={isActive}
                onClick={() => setIsActive(!isActive)}
            >
                login
            </button>
        </div>
    )
}