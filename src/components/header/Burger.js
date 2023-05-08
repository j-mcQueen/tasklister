export default function Burger({ isOpen, setIsOpen }) {
  return (
    <div id="brgr" onClick={() => setIsOpen(!isOpen)}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
}
