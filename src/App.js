import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Arena from "./components/arena/Arena";
import "./App.css";
import { useState } from "react";

function App() {
  const isDesktop = window.matchMedia("(min-width: 1080px)").matches;
  const [isOpen, setIsOpen] = useState(isDesktop);
  const [isActive, setIsActive] = useState(false);
  const [task, setTask] = useState(false);
  const [projectModal, setProjectModal] = useState(false);
  const [category, setCategory] = useState("Inbox");

  return (
    <div className="App">
      <div
        className={
          isActive || task || projectModal ? "backdrop-active" : "backdrop"
        }
      ></div>

      <Header
        isActive={isActive}
        setIsActive={setIsActive}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      {
        // mobile/ tablet only
        isOpen ? (
          <Sidebar
            isActive={isActive}
            setIsActive={setIsActive}
            category={category}
            setCategory={setCategory}
          />
        ) : (
          <></>
        )
      }

      <Arena
        projectModal={projectModal}
        setProjectModal={setProjectModal}
        task={task}
        setTask={setTask}
        category={category}
        setCategory={setCategory}
      />
    </div>
  );
}

export default App;
