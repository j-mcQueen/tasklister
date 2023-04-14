import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function NewTask({...props}) {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskProject, setTaskProject] = useState("Unassigned");
    const [taskDate, setTaskDate] = useState("");
    const [taskPrio, setTaskPrio] = useState("high");
    return (
        <div className="modal">
            <div className="modal-msg">
                <h2>Productivity, enhanced</h2>
                <p>Got stuff to do today? Let’s help you keep track.</p>
            </div>
            
            <form>
                <fieldset>
                    <div>
                        <label htmlFor="task-title">Title <span>*</span></label>
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
                                    <option key={project.id} value={project.title}>
                                        {project.title}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                </fieldset>

                <fieldset>
                    <div>
                        <label htmlFor="due">Due Date <span>*</span></label>
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

                <div className="modal-btns">
                    <button
                        className="green"
                        type="submit"
                        onClick={() => {
                            if (taskTitle !== "" && taskDate !== "") {
                                // Ensures localStorage is updated with most recent version of tasks array. Omitting this would lead to a bug as described here: https://www.joshwcomeau.com/react/common-beginner-mistakes/#accessing-state-after-changing-it-5 
                                const uniqueId = uuidv4();
                                const nextTasks = [...props.tasks,
                                    { 
                                    id: uniqueId, 
                                    title: taskTitle, 
                                    project: taskProject, 
                                    date: taskDate, 
                                    prio: taskPrio
                                    }
                                ];
                                props.addTask({ uniqueId, taskTitle, taskProject, taskDate, taskPrio});
                                localStorage.setItem("Tasks", JSON.stringify(nextTasks));
                                props.setTask(!props.task);
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
    )
}