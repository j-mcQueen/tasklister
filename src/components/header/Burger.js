import { useState } from "react";

export default function Burger() {
    const sidebar = document.getElementById("sidebar");
    const isDesktop = window.matchMedia("(min-width: 1080px)").matches;

    // init must be dynamic based upon viewport
    let init;
    if (isDesktop) { 
        init = true 
    } else {
        init = false;
    };

    const [isOpen, setIsOpen] = useState(init); // for burger click
    const click = () => {
        setIsOpen(!isOpen);
        if (isOpen) {
            sidebar.style.display = "none";
        } else {
            sidebar.style.display = "block";
        }
        // better to use a ternary here if there is nothing else to add
            // would like arena to expand and contract when sidebar is closed and open respectively
    }

    return (
        <div id ="brgr" onClick={click}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    )
}