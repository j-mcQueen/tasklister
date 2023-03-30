import { useState } from "react";
// import TaskBtns from "./TaskBtns";

export default function NewTask({...props}) {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskProject, setTaskProject] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [taskPrio, setTaskPrio] = useState("high");
    return (
        <div className="modal">
            <form className="add-task">
                <div className="fields">
                    <fieldset>
                        <div>
                            <label htmlFor="task-title">Title</label>
                            <input
                                required
                                type="text"
                                id="task-title"
                                onChange={e => {
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
                                onChange={e => {
                                    setTaskProject(e.target.value);
                                }}
                                >
                                {
                                    props.projects.map(project => (
                                        <option value={project.title}>
                                            {project.title}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div>
                            <label htmlFor="due">Due Date</label>
                            <input
                                required
                                type="date"
                                id="due"
                                onChange={e => 
                                    setTaskDate(e.target.value)
                                }
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
                                onChange={e => 
                                    setTaskPrio(e.target.value)
                                }
                                >
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>
                    </fieldset>
                </div>

                <div className="project-btns">
                    <button
                        className="green"
                        type="submit"
                        onClick={() => {
                            props.addTask({taskTitle, taskProject, taskDate, taskPrio});
                            props.setTask(!props.task);
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
    )
}