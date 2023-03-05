export default function Tabs({inputs, setInputs}) {
    return (
        <div id="tabs">
            <div
                onClick={() => setInputs(0)}
            >
                <span
                    style={{
                        color: inputs === 0 ? "#4D88FD" : "#000000"
                    }}>
                        Login
                </span>
            </div>

            <div
                onClick={() => setInputs(1)}
            >
                <span
                    style={{
                        color: inputs === 1 ? "#4D88FD" : "#000000"
                    }}
                    >
                        Sign Up
                </span>
            </div>
        </div>
    )
}