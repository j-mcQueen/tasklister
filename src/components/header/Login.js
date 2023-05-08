export default function Login({ isActive, setIsActive }) {
  return (
    <div id="login">
      <button
        type="button"
        className="blue"
        disabled={isActive}
        onClick={() => setIsActive(!isActive)}
      >
        <span className="material-symbols-outlined">login</span>
      </button>
    </div>
  );
}
