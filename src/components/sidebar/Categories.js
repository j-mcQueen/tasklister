export default function Categories({category, setCategory}) {
    return (
        <div id="categories">
            <ul>
                <li 
                    className={category === "Inbox" ? "active category" : "category"}
                    onClick={() => setCategory("Inbox")}
                >
                    Inbox
                </li>

                <li 
                    className={category === "Today" ? "active category" : "category"}
                    onClick={() => setCategory("Today")}
                >
                    Today
                </li>

                <li 
                    className={category === "Week" ? "active category" : "category"}
                    onClick={() => setCategory("Week")}
                >
                    Week
                </li>

                <li 
                    className={category === "Projects" ? "active category" : "category"}
                    onClick={() => setCategory("Projects")}
                >
                    Projects
                </li>
            </ul>
        </div>
    )
}