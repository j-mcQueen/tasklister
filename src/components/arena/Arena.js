import "./arena.css";
import { useReducer } from "react";
import Task from "./Task";
import NewTask from "./NewTask";
import { taskReducer } from "./taskReducer";

export default function Arena({...props}) {
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
                {props.category}
            </h1>

            <div className="add">
                <button 
                    type="button"
                    className="blue"
                    disabled={props.task}
                    onClick={() => props.setTask(!props.task)}
                >
                    Add
                </button>
            </div>

            <div id="tasks">
                <ul id="task-list">
                    {tasks.map(t => (
                        <li key={t.id}>
                            <Task
                                task={t}
                                editTask={editTask}
                                deleteTask={deleteTask}
                            />
                        </li>
                    )
                    )}
                </ul>
            </div>

            {
                props.task
                ?
                <NewTask
                    task={props.task}
                    setTask={props.setTask}
                    addTask={addTask}
                />
                :
                <></>
            }
        </div>
    )
}