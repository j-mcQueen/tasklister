import supabase from "../../supabase/setup";
import { Auth } from "@supabase/auth-ui-react";

export default function Landing() {
  return (
    <div className="landing">
      <div className="hero">
        <h1>Tasklister: productivity, enhanced.</h1>
      </div>
      <Auth supabaseClient={supabase} providers={["google"]} />
    </div>
  );
}
