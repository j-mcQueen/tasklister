import "./sidebar.css";
import "./categories.css";
import "./projects.css";
import Categories from "./Categories";
import Projects from "./Projects";

export default function Sidebar() {
    return (
        <div id="sidebar">
            <Categories/>
            <Projects/>
        </div>
    )
}