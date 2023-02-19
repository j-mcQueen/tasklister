import "./arena.css";
import { useState } from "react";
import NewTask from "./NewTask"

export default function Arena({ category, task, setTask }) {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [taskPrio, setTaskPrio] = useState("high");
    const [arenaTask, setArenaTask] = useState([]);
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

            <div>
                <ul id="task-list">
                    {arenaTask.map(task => (
                        <li key={task.id}>
                            <div className="task-entry">
                                <div className={task.prio}>
                                    <p>{task.title}</p>
                                    <p>{task.date}</p>
                                </div>

                                <div className="options">
                                    <div>bin</div>
                                    <div>complete</div>
                                    <div>edit</div>
                                </div>
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

                    taskTitle={taskTitle}
                    setTaskTitle={setTaskTitle}

                    taskDate={taskDate}
                    setTaskDate={setTaskDate}

                    taskPrio={taskPrio}
                    setTaskPrio={setTaskPrio}

                    arenaTask={arenaTask}
                    setArenaTask={setArenaTask}
                />
                :
                <></>
            }
        </div>
    )
}