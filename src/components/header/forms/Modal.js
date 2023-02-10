import Tabs from "./Tabs"
import FormBtns from "./FormBtns"
import "./form.css";

export default function Modal({current, updater}) {
    // -- OBJECTIVE: Display login or signup inputs based on active tab
        // -- RUBBER DUCK
            // By default, the login form is the active tab. 
    return (
        <div id="modal">
            <Tabs/>
            <div>
                {/* 
                    could use a conditional here to determine which tab is active and therefore which set of inputs to render
                */}
            </div>
            <FormBtns
                current={current}
                updater={updater}
            />
        </div>
    )
}