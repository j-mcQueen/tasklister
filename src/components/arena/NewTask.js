import { useState } from "react";
// import { v4 as uuidv4 } from 'uuid';
import supabase from "../../supabase/setup";

export default function NewTask({ ...props }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskProject, setTaskProject] = useState("Unassigned");
  const [taskDate, setTaskDate] = useState("");
  const [taskPrio, setTaskPrio] = useState("high");

  const storeTask = async () => {
    const { data, error } = await supabase
      .from("tasks")
      .insert([
        {
          title: taskTitle,
          project: taskProject,
          date: taskDate,
          prio: taskPrio,
        },
      ])
      .select();
    if (error) {
      alert(error);
    }
    if (data) {
      props.addTask({
        id: data[0].id,
        title: data[0].title,
        project: data[0].project,
        date: data[0].date,
        prio: data[0].prio,
      });
      props.setTask(!props.task);
    }
  };

  return (
    <div className="modal">
      <div className="modal-msg">
        <h2>Create a new task</h2>
        <p>Got stuff to do today? Let’s help you keep track.</p>
      </div>

      <form>
        <fieldset>
          <div>
            <label htmlFor="task-title">
              Title <span>*</span>
            </label>
            <input
              required
              type="text"
              id="task-title"
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
            />
          </div>
        </fieldset>

        <fieldset>
          <div>
            <label htmlFor="task-project">Assign To</label>
            <select
              name="task-project"
              id="task-project"
              onChange={(e) => {
                setTaskProject(e.target.value);
              }}
            >
              {props.projects.map((project) => (
                <option key={project.id} value={project.title}>
                  {project.title}
                </option>
              ))}
            </select>
          </div>
        </fieldset>

        <fieldset>
          <div>
            <label htmlFor="due">
              Due Date <span>*</span>
            </label>
            <input
              required
              type="date"
              id="due"
              onChange={(e) => setTaskDate(e.target.value)}
            />
          </div>
        </fieldset>

        <fieldset>
          <div>
            <label htmlFor="prio">Priority</label>
            <select
              name="prio"
              id="prio"
              value={taskPrio}
              onChange={(e) => setTaskPrio(e.target.value)}
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </fieldset>

        <div className="modal-btns">
          <button
            className="green"
            type="submit"
            onClick={() => {
              if (taskTitle !== "" && taskDate !== "") {
                storeTask();
              }
            }}
          >
            Confirm
          </button>

          <button
            className="red"
            type="button"
            onClick={() => props.setTask(!props.task)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
