import TaskBtns from "./TaskBtns";

export default function NewTask({task, setTask}) {
    return (
        <div>
            <fieldset>
                <label htmlFor="task-title">Title</label>
                <input type="text" id="task-title"/>
            </fieldset>

            <fieldset>
                <label htmlFor="due">Due Date</label>
                <input type="date" id="due"/>
            </fieldset>

            <label htmlFor="prio">Priority</label>
            <select name="prio" id="prio">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>

            <TaskBtns
                task={task}
                setTask={setTask}
            />
        </div>
    )
}