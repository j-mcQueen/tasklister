# TaskLister

## TODO

### Categories

#### Refactor code

#### Styling

#### User login

#### Tasks/ Projects

- Think about abstracting filter/ mapping logic in Arena.js into a function

  - See higher order functions

- Clicking on a project changes category state to the project title, which in turn removes the "active" styling from the appropriate category button. The arena renders content based on category state, which is how project tasks are rendered.
  - Obviously an oversight - if you want to allow users to show project tasks under a particular category, you'll have to rethink this strategy

#### UX/ UI concerns

- If a task is assigned to a project and then that project is deleted, the tasks for that project persist
  - Slide out and fade-out the modal out of view when cancel button is clicked
- Focus modals when they are active, allow users to drop focus of the modal by clicking elsewhere
