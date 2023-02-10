export default function Projects() {
    // on button click
        // 1 call function which insertsBefore() a small form to before the add div
            // form contains a text input, an add button, and a cancel button
        
        // if user clicks add, first we need to check and prevent empty input   
            // if user has added text, text is pushed to an array,
                // array data is rendered to the DOM
        // if user clicks cancel, form is removed from the DOM
    const handleClick = () => {
        const cntr = document.getElementById("projects");
        const add = document.querySelector(".add");
        const projectForm = document.createElement("form");
        projectForm.innerHTML = `
            <label for="">
            <input type="text" id="add-project">
            <div>
                <button type="button" id="">add</button>
                <button type="button" class="cancel">cancel</button>
            </div>
        `;
        cntr.insertBefore(projectForm, add);
    }

    return (
        <div id="projects">
            <h2>Projects</h2>
            <ul id="projects-list"></ul>

            <div className="add">
                <button 
                    type="button"
                    className="plus"
                    onClick={handleClick}
                >
                    +
                </button>
            </div>
        </div>
    )
}