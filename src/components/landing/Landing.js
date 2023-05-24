import "./landing.css";
import Auth from "./Auth";

export default function Landing() {
  return (
    <div className="landing">
      <div className="hero">
        <h1>TaskLister</h1>
        <p>Productivity, enhanced.</p>
      </div>
      <Auth />
    </div>
  );
}
