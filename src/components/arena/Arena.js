import "./arena.css";
import { useReducer, useState } from "react";
import { taskReducer } from "./taskReducer";
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import Task from "./Task";
import NewTask from "./NewTask";
import Project from "./Project";
import NewProject from "./NewProject";

export default function Arena({...props}) {
    const [tasks, dispatch] = useReducer(taskReducer, []);
    const [projects, setProjects] = useState([{ id: uuidv4(), title: "Unassigned"}]);
    
    useEffect(() => {
        const taskItems = JSON.parse(localStorage.getItem("Tasks"));
        if (taskItems) loadTasks(taskItems);

        const projectItems = JSON.parse(localStorage.getItem("Projects"));
        if (projectItems) setProjects(projectItems);
    }, []); // empty array indicates to React to only run this code when the component loads since it does not use props or state

    const loadTasks = (obj) => {
        dispatch({
            type: "loaded",
            obj,
        })
    }

    const addTask = ({...props}) => {
        dispatch({
            type: "added",
            id: props.uniqueId,
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

    const deleteTask = (key) => {
        dispatch({
            type: "deleted",
            id: key,
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
                        disabled={props.projectModal}
                        onClick={() => props.setProjectModal(!props.projectModal)}
                    >
                        <span className="material-symbols-outlined">
                            add_circle
                        </span>
                        Add Project
                    </button>
                    :
                    <button 
                        type="button"
                        className="blue"
                        disabled={props.task}
                        onClick={() => props.setTask(!props.task)}
                    >
                        <span className="material-symbols-outlined">
                            add_circle
                        </span>
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
                            const today = new Date();
                            const tDate = new Date(t.date.replace(/-/g, '/'));
                            if (today.getDate() === tDate.getDate()) return t;
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
                            const tDate = new Date(t.date.replace(/-/g, "/")).getDate();
                            const nextWeek = today.getDate() + 7;
                            if (nextWeek - tDate <= 7 && nextWeek - tDate > 0) return t;
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
                                    category={props.category}
                                    setCategory={props.setCategory}
                                />
                            </li>
                        ))
                        :
                        // if props.category is none of the above, we can assume that a user has navigated to "Projects" and has clicked on a particular project to see all of that project's tasks
                        tasks.filter(t => {
                            if (t.project === props.category) return t;
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
                    }
                </ul>
            </div>

            {
                props.task
                ?
                <NewTask
                    task={props.task}
                    tasks={tasks}
                    setTask={props.setTask}
                    addTask={addTask}
                    projects={projects}
                />
                :
                props.projectModal
                ?
                <NewProject
                    projectModal={props.projectModal}
                    setProjectModal={props.setProjectModal}
                    projects={projects}
                    setProjects={setProjects}
                />
                :
                <></>
            }
        </div>
    )
}