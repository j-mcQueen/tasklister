import { useState } from "react"

export default function Task({task, editTask, deleteTask, projects}) {
    const [editActive, setEditActive] = useState(false);
    const [inputTitle, setInputTitle] = useState(task.title);
    const [inputProject, setInputProject] = useState(task.project);
    const [inputDate, setInputDate] = useState(task.date);
    let taskContent;

    const deleteStorageTask = (task) => {
        const parsedTasks = JSON.parse(localStorage.getItem("Tasks"));
        const filtered = parsedTasks.filter(key => key.id !== task.id);
        localStorage.setItem("Tasks", JSON.stringify(filtered));
    }

    const updateStorageTask = (task) => {
        const parsedTasks = JSON.parse(localStorage.getItem("Tasks"));
        for (let key of parsedTasks) {
            if (key.id === task.id) {
                key["title"] = inputTitle;
                key["project"] = inputProject;
                key["date"] = inputDate;
                break;
            }
        }
        localStorage.setItem("Tasks", JSON.stringify(parsedTasks));
    }

    if (editActive) {
        taskContent = (
            <>
                <div className={task.prio}>
                    <div className="task-prop edit">
                        <span>Title:</span>
                        <input
                            type="text"
                            value={task.title}
                            onChange={e => {
                                setInputTitle(e.target.value);
                                editTask({
                                    ...task, 
                                    title: e.target.value
                                })
                            }}
                        />
                    </div>

                    <div className="task-prop edit">
                        <span>Project:</span>
                        <select
                            type="text"
                            value={task.project}
                            onChange={e => {
                                setInputProject(e.target.value);
                                editTask({
                                    ...task, 
                                    project: e.target.value
                                })
                            }}
                            >
                            {
                                projects.map(project => (
                                    <option key={project.id} value={project.title}>
                                        {project.title}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    
                    <div className="task-prop edit">
                        <span>Due Date:</span>
                        <input
                            type="date"
                            value={task.date}
                            onChange={e => {
                                setInputDate(e.target.value);
                                editTask({
                                    ...task,
                                    date: e.target.value
                                })
                            }}
                        />
                    </div>
                </div>

                <div className="task-icons">
                    <div>
                        <svg 
                            className="done icon"
                            onClick={() =>  {
                                // call localStorage updater here
                                updateStorageTask(task);
                                setEditActive(false);
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16">
                                <path 
                                    fillRule="evenodd"
                                    d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM0 8a8 8 0 1116 0A8 8 0 010 8zm11.78-1.72a.75.75 0 00-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l4.5-4.5z">
                                </path>
                        </svg>
                    </div>
                </div>
            </>
        )
    } else {
        taskContent = (
            <>
                <div className={task.prio}>
                    <div className="task-prop">
                        <p>
                            <span>Title:</span> {task.title}
                        </p>
                    </div>

                    <div className="task-prop">
                        <p>
                            <span>Project:</span> {task.project}
                        </p>
                    </div>

                    <div className="task-prop">
                        <p>
                            <span>Due Date:</span> {task.date}
                        </p>
                    </div>
                </div>

                <div className="task-icons">
                    <div>
                        <svg 
                            className={`${task.prio}-flag flag`}
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 20 20">
                                <path 
                                    fillRule="evenodd" 
                                    d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" 
                                    clipRule="evenodd">
                                </path>
                        </svg>
                    </div>

                    <div>
                        <svg
                            className="edit icon"
                            onClick={() => { setEditActive(true) }}
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 20 20">
                                <path 
                                    d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z">
                                </path>
                                <path 
                                    fillRule="evenodd"
                                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" 
                                    clipRule="evenodd">
                                </path>
                        </svg>
                    </div>
                    <div>
                        <svg 
                            className="done icon"
                            onClick={() => {
                                deleteStorageTask(task);
                                deleteTask(task.id);
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16">
                                <path 
                                    fillRule="evenodd"
                                    d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM0 8a8 8 0 1116 0A8 8 0 010 8zm11.78-1.72a.75.75 0 00-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l4.5-4.5z">
                                </path>
                        </svg>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="task-entry">
            {taskContent}
        </div>
    )
}