export default function Burger({prev, next}) {
    return (
        <div id ="brgr" onClick={() => next(!prev)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    )
}