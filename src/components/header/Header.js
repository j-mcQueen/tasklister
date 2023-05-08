import "./header.css";
import Burger from "./Burger";
import Login from "./Login";
import Modal from "./forms/Modal";

export default function Header({ isActive, setIsActive, isOpen, setIsOpen }) {
  return (
    <header>
      <p>TaskLister</p>

      <Burger isOpen={isOpen} setIsOpen={setIsOpen} />

      <Login isActive={isActive} setIsActive={setIsActive} />

      {isActive ? (
        <Modal isActive={isActive} setIsActive={setIsActive} />
      ) : (
        <></>
      )}
    </header>
  );
}
