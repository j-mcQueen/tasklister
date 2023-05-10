import { useState } from "react";
import supabase from "../../supabase/setup";

export default function NewProject({ ...props }) {
  const [projectTitle, setProjectTitle] = useState("");

  const storeProject = async () => {
    const { data, error } = await supabase
      .from("projects")
      .insert([
        {
          title: projectTitle,
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

      <form>
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
            type="button"
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
