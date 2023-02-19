export default function Login({isActive, setIsActive}) {
    return (
        <div id="wrap">
            <button
                type="button"
                className="continue"
                disabled={isActive}
                onClick={() => setIsActive(!isActive)}
            >
                Login
            </button>
        </div>
    )
}