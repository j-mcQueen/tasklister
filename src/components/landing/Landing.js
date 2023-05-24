import "./landing.css";
import Auth from "./Auth";

export default function Landing() {
  return (
    <div className="landing">
      <div className="hero">
        <h1>
          <div>TaskLister:</div>
          <div>productivity, enhanced.</div>
        </h1>
      </div>
      <Auth />
    </div>
  );
}
