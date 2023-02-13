import { useState } from "react";
import NewProject from "./NewProject";

export default function Projects() {
    // --OBJECTIVE: Render a form when the user clicks the form button
        // --RUBBER DUCK
            // When a user clicks the plus button, a form containing a label, a text input, and two buttons (add, cancel) will appear. I would like to avoid element creation and selection using pure JS, and would rather do the same thing in React. Currently, I am working through the best way to go about this. Perhaps calling a component on click of the plus button?
        
        // --PLAN
            // The default state of the new project form will be false, since we don't want it to appear on load
                // Therefore, getting it to display should work logically the same as the login button click showing the modal
                    // parent component sets initial state
                    // Plus button has click event which updates state
                    // state is checked for when rendering the form, 
                        // returns the component for the form if true, returns an empty element if false
    const [displayed, setIsDisplayed] = useState(false);
    return (
        <div id="projects">
            <h2>Projects</h2>
            <ul id="projects-list"></ul>

            {
                displayed ? <NewProject/> : <></>
            }

            <div className="add">
                <button 
                    type="button"
                    className="plus"
                    onClick={() => setIsDisplayed(!displayed)}
                >
                    +
                </button>
            </div>
        </div>
    )
}