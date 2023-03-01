const taskReducer = (tasks, action) => {
    switch (action.type) {
        case "added": {
                return [
                    ...tasks,
                    {
                        id: action.id, 
                        title: action.title,
                        date: action.date, 
                        prio: action.prio,
                    }
                ]
            }
        case "deleted": {
            return tasks.filter(item => item.id !== action.id);
        }
        default:

    }
}

export { taskReducer };