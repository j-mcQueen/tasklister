import { useState } from "react";
import NewProject from "./NewProject";

export default function Projects() {
    // --OBJECTIVE: Close the new projects form when a user presses cancel
        // --RUBBER DUCK
            // 
        
        // --PLAN
            // Functionally works the same as the clicking of the cancel button on the modal 
                // state is updated using setIsDisplayed when cancel button is clicked
                    // state needs to be passed to the form that is generated
            // When a form is added, the new form needs an initial state of its own so that it can be closed
                // problem point - cancel button will only control the newproject from state. So, when the form is active, the plus button is disabled. When the form closes by an internal action, how will 

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