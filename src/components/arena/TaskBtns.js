let nextId = 0;
export default function TaskBtns({...props}) {
    return (
        <div>
            <button
                className="confirm"
                type="submit"
                onClick={() => {
                    props.setTaskTitle("");
                    props.setTaskDate("");
                    props.setTaskPrio("");
                    props.setArenaTask([
                        ...props.arenaTask,
                        { 
                            id: nextId++, 
                            title: props.taskTitle,
                            date: props.taskDate, 
                            prio: props.taskPrio
                        }
                    ]);
                    props.setTask(!props.task);
                }}
            >
                Confirm
            </button>

            <button
                className="cancel"
                type="button" 
                onClick={() => props.setTask(!props.task)}
            >
                Cancel
            </button>
        </div>
    )
}