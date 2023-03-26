import Tabs from "./Tabs"
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
                inputs === 0 ? <LoginInputs 
                                    isActive={isActive} 
                                    setIsActive={setIsActive}/> 
                             : <SignUpInputs 
                                    isActive={isActive} 
                                    setIsActive={setIsActive}/>
            }
        </div>
    )
}