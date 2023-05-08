export default function Project({ ...props }) {
  const deleteStorageItems = (p) => {
    // delete all tasks in localStorage where task project key value = deleted project title
    const parsedTasks = JSON.parse(localStorage.getItem("Tasks"));
    const parsedProjects = JSON.parse(localStorage.getItem("Projects"));

    const filteredTasks = parsedTasks.filter((key) => key.project !== p.title);
    const filteredProjects = parsedProjects.filter((key) => key.id !== p.id);

    localStorage.setItem("Tasks", JSON.stringify(filteredTasks));
    localStorage.setItem("Projects", JSON.stringify(filteredProjects));
  };

  return (
    <div
      className="project"
      onClick={() => {
        props.setCategory(props.project.title);
      }}
    >
      <span>{props.project.title}</span>

      {props.project.title !== "Unassigned" ? (
        <>
          <span>
            <svg
              className="icon p-icon"
              onClick={(e) => {
                e.stopPropagation();
                // changes need to be reflected in tasks array
                props.deleteProjectTasks(props.project.title);
                deleteStorageItems(props.project);
                props.setProjects(
                  props.projects.filter((item) => item.id !== props.project.id)
                );
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
