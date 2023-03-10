import { useState } from "react";
import NewProject from "./NewProject";

export default function Projects() {
    const [displayed, setIsDisplayed] = useState(false); // modal toggle
    const [name, setName] = useState("");
    const [projects, setProjects] = useState([]);
    
    return (
        <div id="projects">
            <h2>Projects</h2>

            <div className="add">
                <button 
                    type="button"
                    className="plus"
                    disabled={displayed}
                    onClick={() => setIsDisplayed(!displayed)}
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

                <span>Add Project</span>
            </div>

            <ul id="projects-list">
                {projects.map(project => (
                    <li key={project.id}>
                        <span>
                            {project.name}
                        </span>

                        <span>
                            <svg 
                                className="remove icon" 
                                onClick={() => {
                                    setProjects(
                                        projects.filter(item => item.id !== project.id)
                                    )
                                }}
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 20 20">
                                    <path 
                                        fillRule="evenodd" 
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd">
                                    </path>
                            </svg>
                        </span>
                    </li>
                ))}
            </ul>

            {
                displayed ? 
                    <NewProject
                        name={name}
                        setName={setName}
                        projectList={projects}
                        addItem={setProjects}
                        prevDisplay={displayed}
                        updateDisplay={setIsDisplayed}
                    /> 
                    : 
                    <></>
            }
        </div>
    )
}