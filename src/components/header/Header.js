import "./header.css";
import Burger from "./Burger";
import Logout from "./Logout";
import Modal from "./forms/Modal";

export default function Header({ isActive, setIsActive, isOpen, setIsOpen }) {
  return (
    <header>
      <p>TaskLister</p>

      <Burger isOpen={isOpen} setIsOpen={setIsOpen} />

      <Logout />

      {isActive ? (
        <Modal isActive={isActive} setIsActive={setIsActive} />
      ) : (
        <></>
      )}
    </header>
  );
}
