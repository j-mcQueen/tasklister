import "./sidebar.css";
import "./projects.css";
import Categories from "./Categories";

export default function Sidebar({category, setCategory}) {
    return (
        <div id="sidebar">
            <Categories
                category={category}
                setCategory={setCategory}
            />
        </div>
    )
}