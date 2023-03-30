import { useState } from "react";
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
                                props.setProjects([
                                    ...props.projects,
                                    { id: projectTitle, title: projectTitle }
                                ]);
                                props.setProjectModal(!props.projectModal)
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