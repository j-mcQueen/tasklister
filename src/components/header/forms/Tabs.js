export default function Tabs({setter}) {
    return (
        <div id="tabs">
            <span
                className="hoverable"
                onClick={() => setter(0)}>login</span>

            <span>|</span>

            <span 
                className="hoverable" 
                onClick={() => setter(1)}>sign up</span>
        </div>
    )
}