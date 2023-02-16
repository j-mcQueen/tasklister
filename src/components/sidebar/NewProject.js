let nextId = 0;
export default function NewProject({name, setName, projectList, addItem, prevDisplay, updateDisplay}) {
    return (
        <form className="modal">
            <fieldset>
                <label htmlFor="">title</label>
                <input 
                    type="text" 
                    onChange={e => 
                        setName(e.target.value)
                    }
                    required/>
            </fieldset>

            <fieldset>
                <button
                    type="submit"
                    id="insert"
                    onClick={() => {
                        setName("");
                        addItem([
                            ...projectList,
                            { id: nextId++, name, }
                        ]);
                        updateDisplay(!prevDisplay);
                    }}
                >
                    add
                </button>
                
                <button
                    type="button"
                    className="cancel"
                    onClick={() => updateDisplay(!prevDisplay)}
                >
                    cancel
                </button>
            </fieldset>
        </form>
    )
}