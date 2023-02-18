import "./header.css";
import "./burger.css";
import "./login.css";
import Burger from "./Burger"
import Login from "./Login";
import Modal from "./forms/Modal";
import { useState } from "react";

export default function Header({prev, next}) {
    const [isActive, setIsActive] = useState(false);
    return (
        <header>
            <Burger
                prev={prev}
                next={next}
            />

            <Login
                current={isActive}
                updater={setIsActive}
            />

            {
                isActive ? 
                    <Modal
                        current={isActive}
                        updater={setIsActive}
                    /> 
                    :
                    <></>
            }
        </header>
    )
}