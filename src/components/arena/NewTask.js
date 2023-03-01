import { useState } from "react";
// import TaskBtns from "./TaskBtns";

export default function NewTask({...props}) {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [taskPrio, setTaskPrio] = useState("high");
    return (
        <div className="modal">
            <form className="add-task">
                <fieldset>
                    <label htmlFor="task-title">Title</label>
                    <input
                        required
                        type="text"
                        id="task-title"
                        onChange={e => {
                            setTaskTitle(e.target.value);
                        }
                        
                        }/>
                </fieldset>

                <fieldset>
                    <label htmlFor="due">Due Date</label>
                    <input
                        required
                        type="date"
                        id="due"
                        onChange={e => 
                            setTaskDate(e.target.value)
                        }/>
                </fieldset>

                <fieldset>
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
                </fieldset>

                <div className="project-btns">
                    <button
                        className="confirm"
                        type="submit"
                        onClick={() => {
                            props.addTask({taskTitle, taskDate, taskPrio});
                            props.setTask(!props.task);
                        }}
                    >
                        Confirm
                    </button>

                    <button
                        className="cancel"
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