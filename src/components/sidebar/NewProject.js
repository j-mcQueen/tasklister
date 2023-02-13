export default function NewProject({prevDisplay, updateDisplay}) {
    return (
        <form>
            <fieldset>
                <label htmlFor=""></label>
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