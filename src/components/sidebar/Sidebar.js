import Categories from "./Categories";
import Projects from "./Projects";
import "./sidebar.css";

export default function Sidebar() {
    return (
        <div id="sidebar">
            <Categories/>
            <Projects/>
        </div>
    )
}