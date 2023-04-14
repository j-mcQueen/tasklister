export default function Categories({category, setCategory}) {
    return (
        <nav id="categories">
            <button
                className={category === "Inbox" ? "active" : null}
                onClick={() => setCategory("Inbox")}>
                <span className="material-symbols-outlined">
                    list_alt
                </span>
                <span className="btn-text">
                    Inbox
                </span>
            </button>

            <button
                className={category === "Today" ? "active" : null}
                onClick={() => setCategory("Today")}>
                <span className="material-symbols-outlined">
                    today
                </span>
                <span className="btn-text">
                    Today
                </span>
            </button>

            <button
                className={category === "Week" ? "active" : null}
                onClick={() => setCategory("Week")}>
                <span className="material-symbols-outlined">
                    date_range
                </span>
                <span className="btn-text">
                    Week
                </span>
            </button>

            <button
                className={category === "Projects" ? "active" : null}
                onClick={() => setCategory("Projects")}>
                <span className="material-symbols-outlined">
                    apps
                </span>
                <span className="btn-text">
                    Projects
                </span>
            </button>
        </nav>
    )
}