import "./arena.css";
import { useReducer } from "react";
import Task from "./Task";
import NewTask from "./NewTask";
import { taskReducer } from "./taskReducer";

export default function Arena({ category, task, setTask }) {
    // -- OBJECTIVE: When a user clicks the edit button, permit changes to that task in the array
        // -- RUBBER DUCK
            // If we are to edit tasks by reopening the modal, the modal currently only has AddTask capabilities, so we would need to add a conditional which checked if a task was being added or edited and then supply the appropriate callbacks to the event listener
        // -- PLAN
            // We need to attach state to the edit button
            // If edit button is clicked, edit is active, so replace task text with inputs permitting change
    
    const [tasks, dispatch] = useReducer(taskReducer, []);

    const addTask = ({...props}) => {
        dispatch({
            type: "added",
            id: props.taskTitle,
            title: props.taskTitle,
            date: props.taskDate,
            prio: props.taskPrio,
        });
    }

    const editTask = (task) => {
        dispatch({
            type: "edited",
            task,
        });
    }

    const deleteTask = (index) => {
        dispatch({
            type: "deleted",
            id: index,
        });
    }

    return (
        <div id="arena">
            <h1>
                {category}
            </h1>

            <div className="add">
                <button 
                    type="button"
                    className="plus"
                    disabled={task}
                    onClick={() => setTask(!task)}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24">
                            <path 
                                fillRule="evenodd" 
                                d="M11.75 4.5a.75.75 0 01.75.75V11h5.75a.75.75 0 010 1.5H12.5v5.75a.75.75 0 01-1.5 0V12.5H5.25a.75.75 0 010-1.5H11V5.25a.75.75 0 01.75-.75z">
                            </path>
                    </svg>
                </button>
            </div>

            <div id="tasks">
                <ul id="task-list">
                    {tasks.map(t => (
                        <li key={t.id}>
                            <div className="task-entry">
                                <Task 
                                    task={t}
                                    editTask={editTask}
                                    deleteTask={deleteTask}
                                />
                            </div>
                        </li>
                    )
                    )}
                </ul>
            </div>

            {
                task
                ?
                <NewTask
                    task={task}
                    setTask={setTask}
                    addTask={addTask}
                />
                :
                <></>
            }
        </div>
    )
}