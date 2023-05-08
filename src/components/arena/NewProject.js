import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function NewProject({ ...props }) {
  const [projectTitle, setProjectTitle] = useState("");
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
            type="submit"
            onClick={() => {
              if (projectTitle !== "") {
                const nextProjects = [
                  ...props.projects,
                  {
                    id: uuidv4(),
                    title: projectTitle,
                  },
                ];

                props.setProjects(nextProjects);
                localStorage.setItem("Projects", JSON.stringify(nextProjects));
                props.setProjectModal(!props.projectModal);
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
