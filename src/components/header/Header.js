import "./header.css";
import Burger from "./Burger";
import Logout from "./Logout";

export default function Header({ isOpen, setIsOpen }) {
  return (
    <header>
      <p>TaskLister</p>

      <Burger isOpen={isOpen} setIsOpen={setIsOpen} />

      <Logout />
    </header>
  );
}
