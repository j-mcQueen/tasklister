export default function NewProject({prevDisplay, updateDisplay}) {
        // --OBJECTIVE: Insert new project into list
        // --RUBBER DUCK
            //
        
        // --PLAN
            // 
    return (
        <form className="modal">
            <fieldset>
                <label htmlFor="">title</label>
                <input type="text"/>
            </fieldset>

            <fieldset>
                <button
                    type="button"
                    id="insert"
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