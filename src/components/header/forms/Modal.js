import Tabs from "./Tabs"
import FormBtns from "./FormBtns"
import "./form.css";
import { useState } from "react";
import LoginInputs from "./LoginInputs";
import SignUpInputs from "./SignUpInputs";

export default function Modal({current, updater}) {        
    const [inputs, setInputs] = useState(0);
    // TODO make active span yellow
    return (
        <div id="modal">
            <Tabs
                setter={setInputs}
            />

            {
                inputs === 0 ? <LoginInputs/> : <SignUpInputs/>
            }

            <FormBtns
                current={current}
                updater={updater}
            />
            {/* TODO FormBtns will likely need to be inside the form itself so the form can submit login/ signup information to the server */}
        </div>
    )
}