import "./form.css";
import { useState } from "react";
import LoginInputs from "./LoginInputs";
import SignUpInputs from "./SignUpInputs";

export default function Modal({isActive, setIsActive}) {        
    const [inputs, setInputs] = useState(0);
    return (
        <div className="modal">
            {
                inputs === 0 
                ? 
                <>
                    <div className="modal-msg">
                        <h2>Welcome back!</h2>
                        <p>Login below to see your todo list.</p>
                    </div>

                    <LoginInputs
                        setInputs={setInputs}
                        isActive={isActive} 
                        setIsActive={setIsActive}/>

                    <div className="login-modal-switch">
                        Don't have an account?

                        <button
                            type="button"
                            tabIndex={0}
                            onClick={() => {setInputs(1)}}
                            className="form-highlight"> Sign Up
                        </button>
                    </div>
                </>
                : 
                <>
                    <div className="modal-msg">
                        <h2>Sign up for TaskLister</h2>
                        <p>Enhance your productivity with tasks and projects.</p>
                    </div>

                    <SignUpInputs 
                        isActive={isActive} 
                        setIsActive={setIsActive}/>

                    <div className="signup-modal-switch">
                        Already have an account? 
                        <button
                            type="button"
                            tabIndex={0}
                            onClick={() => {setInputs(0)}}
                            className="form-highlight"> Login
                        </button>
                    </div>
                </>
            }
        </div>
    )
}