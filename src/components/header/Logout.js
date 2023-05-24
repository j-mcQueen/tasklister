import { useNavigate } from "react-router-dom";
import supabase from "../../supabase/setup";

export default function Logout() {
  const navigate = useNavigate();

  const execute = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) return navigate("/");
  };

  return (
    <div id="logout">
      <button type="button" className="blue" onClick={() => execute()}>
        Logout
      </button>
    </div>
  );
}
