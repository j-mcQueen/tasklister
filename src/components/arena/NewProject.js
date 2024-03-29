import { useState } from "react";
import supabase from "../../supabase/setup";

export default function NewProject({ ...props }) {
  const [projectTitle, setProjectTitle] = useState("");

  const storeProject = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from("projects")
      .insert([
        {
          title: projectTitle,
          user_id: user.id,
        },
      ])
      .select();
    if (error) {
      console.log(error);
    } else if (data) {
      const nextProjects = [
        ...props.projects,
        {
          id: data[0].id,
          title: projectTitle,
          user_id: user.id,
        },
      ];

      props.setProjects(nextProjects);
      props.setProjectModal(!props.projectModal);
    }
  };

  return (
    <div className="modal">
      <div className="modal-msg">
        <h2>Create a new project</h2>
        <p>Group tasks together to stay organized.</p>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <fieldset>
          <label htmlFor="project-title">
            Project Title <span>*</span>
          </label>
          <input
            required
            type="text"
            id="project-title"
            onChange={(e) => setProjectTitle(e.target.value)}
          />
        </fieldset>

        <div className="modal-btns">
          <button
            className="green"
            type="submit"
            onClick={() => {
              if (projectTitle !== "") {
                storeProject();
              }
            }}
          >
            Confirm
          </button>

          <button
            className="red"
            type="button"
            onClick={() => props.setProjectModal(!props.projectModal)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
