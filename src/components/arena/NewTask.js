import TaskBtns from "./TaskBtns";

export default function NewTask({...props}) {
    return (
        <form>
            <fieldset>
                <label htmlFor="task-title">Title</label>
                <input
                    required
                    type="text"
                    id="task-title"
                    onChange={e => 
                        props.setTaskTitle(e.target.value)
                    }/>
            </fieldset>

            <fieldset>
                <label htmlFor="due">Due Date</label>
                <input
                    required
                    type="date"
                    id="due"
                    onChange={e => 
                        props.setTaskDate(e.target.value)
                    }/>
            </fieldset>

            <label htmlFor="prio">Priority</label>
            <select 
                name="prio"
                id="prio"
                value={props.taskPrio}
                onChange={e => 
                    props.setTaskPrio(e.target.value)
                }
                >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>

            <TaskBtns
                task={props.task}
                setTask={props.setTask}

                taskTitle={props.taskTitle}
                setTaskTitle={props.setTaskTitle}

                taskDate={props.taskDate}
                setTaskDate={props.setTaskDate}
                
                taskPrio={props.taskPrio}
                setTaskPrio={props.setTaskPrio}

                arenaTask={props.arenaTask}
                setArenaTask={props.setArenaTask}
            />
        </form>
    )
}