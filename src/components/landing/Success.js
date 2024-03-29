export default function Success() {
  return (
    <div className="success">
      <div className="success-icon-container">
        <svg
          className="success-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM0 8a8 8 0 1116 0A8 8 0 010 8zm11.78-1.72a.75.75 0 00-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l4.5-4.5z"
          ></path>
        </svg>

        <h2>Thank you for signing up to TaskLister!</h2>
      </div>

      <div className="success-message">
        <p>Next steps:</p>

        <ol>
          <li>Check your email for a confirmation link.</li>
          <li>Log in with your newly created credentials.</li>
          <li>Close this tab.</li>
        </ol>
      </div>
    </div>
  );
}
