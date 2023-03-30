import "./arena.css";
import { useReducer, useState } from "react";
import { taskReducer } from "./taskReducer";
import { v4 as uuidv4 } from 'uuid';
import Task from "./Task";
import NewTask from "./NewTask";
import Project from "./Project";
import NewProject from "./NewProject";

export default function Arena({...props}) {
    const [tasks, dispatch] = useReducer(taskReducer, []);
    const [projectModal, setProjectModal] = useState(false);
    const [projects, setProjects] = useState([{ id: uuidv4(), title: "Unassigned"}]);

    const addTask = ({...props}) => {
        dispatch({
            type: "added",
            id: uuidv4(),
            title: props.taskTitle,
            project: props.taskProject,
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
                {
                    props.category === "Projects"
                    ?
                    <button 
                        type="button"
                        className="blue"
                        disabled={projectModal}
                        onClick={() => setProjectModal(!projectModal)}
                    >
                        Add Project
                    </button>
                    :
                    <button 
                        type="button"
                        className="blue"
                        disabled={props.task}
                        onClick={() => props.setTask(!props.task)}
                    >
                        Add Task
                    </button>
                }
            </div>

            <div id="tasks">
                <ul id="task-list">
                    {
                        props.category === "Inbox" 
                        ? 
                        tasks.map(t => (
                            <li key={t.id}>
                                <Task
                                    task={t}
                                    editTask={editTask}
                                    deleteTask={deleteTask}
                                    projects={projects}
                                />
                            </li>
                        ))
                        : 
                        props.category === "Today" 
                        ?
                        tasks.filter(t => {
                            let today = new Date(t.date.replace(/-/g, '/'));
                            if (today - new Date() < 0) return t;
                        }).map(t => (
                            <li key={t.id}>
                                <Task
                                    task={t}
                                    editTask={editTask}
                                    deleteTask={deleteTask}
                                    projects={projects}
                                />
                            </li>
                        ))
                        :
                        props.category === "Week"
                        ?
                        tasks.filter(t => {
                            const today = new Date();
                            const tDate = new Date(t.date);
                            const nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
                            if (nextWeek - tDate > 0) return t;
                        }).map(t => (
                            <li key={t.id}>
                                <Task
                                    task={t}
                                    editTask={editTask}
                                    deleteTask={deleteTask}
                                    projects={projects}
                                />
                            </li>
                        ))                        
                        :
                        props.category === "Projects"
                        ?
                        projects.map(p => (
                            <li key={p.id}>
                                <Project
                                    project={p}
                                    projects={projects}
                                    setProjects={setProjects}
                                />
                            </li>
                        ))
                        :
                        <></>
                    }
                </ul>
            </div>

            {
                props.task
                ?
                <NewTask
                    task={props.task}
                    setTask={props.setTask}
                    addTask={addTask}
                    projects={projects}
                />
                :
                projectModal
                ?
                <NewProject
                    projectModal={projectModal}
                    setProjectModal={setProjectModal}
                    projects={projects}
                    setProjects={setProjects}
                />
                :
                <></>
            }
        </div>
    )
}