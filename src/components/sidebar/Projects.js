import { useState } from "react";
import NewProject from "./NewProject";

export default function Projects() {
    // --OBJECTIVE: Close the new projects form when a user presses cancel
        // --RUBBER DUCK
            // 
        
        // --PLAN
            //  can you believe the progress that im making?? this is superb work so far you are learning so much so fast!

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