import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function NewProject({...props}) {
    const [projectTitle, setProjectTitle] = useState("");
    return (
        <div className="modal">
            <form className="add-task">
                <div className="fields">
                    <fieldset>
                        <label htmlFor="">Project Title</label>
                        <input 
                            required
                            type="text"
                            id=""
                            onChange={e => setProjectTitle(e.target.value)}
                        />
                    </fieldset>
                </div>
                <div className="project-btns">
                        <button
                            className="green"
                            type="submit"
                            onClick={() => {
                                if (projectTitle !== "") {
                                    const nextProjects = [...props.projects,
                                        { 
                                        id: uuidv4(), 
                                        title: projectTitle,
                                        }
                                    ];
                                    localStorage.setItem("Projects", JSON.stringify(nextProjects));

                                    props.setProjects([
                                        ...props.projects,
                                        { id: uuidv4(), title: projectTitle }
                                    ]);
                                    props.setProjectModal(!props.projectModal)
                                }
                            }}
                        >
                            Confirm
                        </button>

                        <button
                            className="red"
                            type="button" 
                            onClick={() => props.setProjectModal(!props.projectModal)}
                        >
                            Cancel
                        </button>
                </div>
            </form>
        </div>
    )
}