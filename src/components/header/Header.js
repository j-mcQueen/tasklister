import "./header.css";
import "./burger.css";
import "./login.css";
import Burger from "./Burger";
import Login from "./Login";
import Modal from "./forms/Modal";
import { useState } from "react";

export default function Header() {
const [isActive, setIsActive] = useState(false);
    return (
        <header>
            <Burger/>
            <Login
                cur={isActive}
                next={setIsActive}
            />
            <Modal
                cur={isActive}
            />
        </header>
    )
}