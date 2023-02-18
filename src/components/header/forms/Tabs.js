export default function Tabs({setter, current, inputs}) {
    return (
        <div id="tabs">
            <span
                onClick={() => setter(0)}
                style={{
                    color: inputs === 0 ? "#ffdb5a" : "#d9d9d9"
                }}>
                    login
            </span>

            <span>|</span>

            <span
                onClick={() => setter(1)}
                style={{
                    color: inputs === 1 ? "#ffdb5a" : "#d9d9d9"
                }}
                >
                    sign up
            </span>
        </div>
    )
}