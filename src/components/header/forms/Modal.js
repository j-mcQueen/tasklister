import Tabs from "./Tabs"
import FormBtns from "./FormBtns"
import "./form.css";
import { useState } from "react";
import LoginInputs from "./LoginInputs";
import SignUpInputs from "./SignUpInputs";

export default function Modal({isActive, setIsActive}) {        
    const [inputs, setInputs] = useState(0);
    return (
        <div id="modal" className="modal">
            <Tabs
                isActive={isActive}
                inputs={inputs}
                setInputs={setInputs}
            />

            {
                inputs === 0 ? <LoginInputs/> : <SignUpInputs/>
            }

            <FormBtns
                isActive={isActive}
                setIsActive={setIsActive}
            />
            {/* TODO FormBtns will likely need to be inside the form itself so the form can submit login/ signup information to the server */}
        </div>
    )
}