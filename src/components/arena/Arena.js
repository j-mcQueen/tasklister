import NewTask from "./NewTask"

export default function Arena({ category, task, setTask }) {
    // instead of just alternating the title, couldnt we alternate the entire container?
    // why would we need to? all projects have the same elements, its just the tasks that change (the data should be contained inside an object)

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

            {
                task
                ?
                <NewTask
                    task={task}
                    setTask={setTask}
                />
                :
                <></>
            }
        </div>
    )
}