import "./header.css";
import "./burger.css";
import "./login.css";
import Burger from "./Burger"
import Login from "./Login";

export default function Header() {
    return (
        <header>
            <Burger/>
            <Login/>
        </header>
    )
}