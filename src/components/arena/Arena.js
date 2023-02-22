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

            <div id="tasks">
                <ul id="task-list">
                    {arenaTask.map(task => (
                        <li key={task.id}>
                            <div className="task-entry">
                                <div className={task.prio}>
                                    <p>{task.title}</p>
                                    <p>{task.date}</p>
                                </div>

                                <div className="options">
                                    <div>
                                        <svg 
                                            className="remove icon"
                                            onClick={() => {
                                                setArenaTask(
                                                    arenaTask.filter(item =>
                                                        item.id !== task.id
                                                    )
                                                )
                                            }}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16">
                                                <path 
                                                    fillRule="evenodd"
                                                    d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM0 8a8 8 0 1116 0A8 8 0 010 8zm11.78-1.72a.75.75 0 00-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l4.5-4.5z">
                                                </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <svg
                                            className="edit icon" 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            viewBox="0 0 20 20">
                                                <path 
                                                    d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z">
                                                </path>
                                                <path 
                                                    fillRule="evenodd"
                                                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd">
                                                </path>
                                        </svg>
                                    </div>
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