import { useState } from "react";
import NewProject from "./NewProject";

export default function Projects() {
    const [displayed, setIsDisplayed] = useState(false);
    return (
        <div id="projects">
            <h2>Projects</h2>
            <ul id="projects-list"></ul>

            <div className="add">
                <button 
                    type="button"
                    className="plus"
                    disabled={displayed}
                    onClick={() => setIsDisplayed(!displayed)}
                >
                    +
                </button>

                <span>Add Project</span>
            </div>

            {
                displayed ? 
                    <NewProject
                        prevDisplay={displayed}
                        updateDisplay={setIsDisplayed}
                    /> 
                    : 
                    <></>
            }
        </div>
    )
}