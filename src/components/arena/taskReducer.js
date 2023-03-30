/* eslint-disable default-case */
const taskReducer = (tasks, action) => {
    switch (action.type) {
        case "added": {
                return [
                    ...tasks,
                    {
                        id: action.id,
                        title: action.title,
                        project: action.project,
                        date: action.date,
                        prio: action.prio,
                    }
                ]
            }
        case "edited": {    
                return tasks.map(item => {
                    return (item.id === action.task.id) ? action.task : item;
                })
        }
        case "deleted": {
            return tasks.filter(item => item.id !== action.id);
        }
    }
}

export { taskReducer };