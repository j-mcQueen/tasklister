import { useState } from "react";

export default function Burger() {
    // init must be dynamic based upon viewport
    const isDesktop = window.matchMedia("(min-width: 1080px)").matches;
    let init;
    if (isDesktop) { 
        init = true;
    } else {
        init = false;
    };

    const [isOpen, setIsOpen] = useState(init); // for burger click
    const click = () => {
        const sidebar = document.getElementById("sidebar");
        setIsOpen(!isOpen);
        return (isOpen) ? sidebar.style.display = "none" : sidebar.style.display = "block";
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