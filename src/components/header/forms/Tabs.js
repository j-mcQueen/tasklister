export default function Tabs({inputs, setInputs}) {
    return (
        <div id="tabs">
            <div>
                <span
                    onClick={() => setInputs(0)}
                    style={{
                        color: inputs === 0 ? "#4D88FD" : "#000000"
                    }}>
                        Login
                </span>
            </div>

            <div>
                <span
                    onClick={() => setInputs(1)}
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