export default function TaskBtns({task, setTask}) {
    return (
        <div>
            <button type="button">Confirm</button>

            <button type="button" onClick={() => setTask(!task)}>Cancel</button>
        </div>
    )
}