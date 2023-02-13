export default function Tabs({setter}) {
    return (
        <div id="tabs">
            <span onClick={() => setter(0)}>login</span>
            <span>|</span>
            <span onClick={() => setter(1)}>sign up</span>
        </div>
    )
}