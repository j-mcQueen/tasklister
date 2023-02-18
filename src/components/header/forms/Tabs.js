export default function Tabs({inputs, setInputs}) {
    return (
        <div id="tabs">
            <span
                onClick={() => setInputs(0)}
                style={{
                    color: inputs === 0 ? "#ffdb5a" : "#d9d9d9"
                }}>
                    login
            </span>

            <span>|</span>

            <span
                onClick={() => setInputs(1)}
                style={{
                    color: inputs === 1 ? "#ffdb5a" : "#d9d9d9"
                }}
                >
                    sign up
            </span>
        </div>
    )
}