export default function Categories({setCategory}) {
    return (
        <div id="categories">
            <h2>
                <span className="category" onClick={() => setCategory("All")}>
                    All
                </span>
            </h2>

            <h2>
                <span className="category" onClick={() => setCategory("Today")}>
                    Today
                </span>
            </h2>

            <h2>
                <span className="category" onClick={() => setCategory("Week")}>
                    Week
                </span>
            </h2>
        </div>
    )
}