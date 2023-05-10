import supabase from "../../supabase/setup";

export default function Project({ ...props }) {
  const handleDeleteProject = async (key) => {
    const { data, error } = await supabase
      .from("projects")
      .delete()
      .eq("id", key)
      .select();

    if (error) {
      alert(error);
    } else if (data) {
      props.deleteProjectTasks(props.project.title);
      props.setProjects(props.projects.filter((item) => item.id !== key));
    }
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
                handleDeleteProject(props.project.id);
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
