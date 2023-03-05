import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Arena from "./components/arena/Arena";
import './App.css';
import { useState } from "react";


function App() {
  const isDesktop = window.matchMedia("(min-width: 1080px)").matches;
  const [isOpen, setIsOpen] = useState(isDesktop);
  const [isActive, setIsActive] = useState(false);
  const [task, setTask] = useState(false);
  const [category, setCategory] = useState("Inbox");

  return (
    <div className="App">
      {/*
          Projects
            On click, display all projects with tasks in arena
            First step is to get user input and appending it to the sidebar
              You can worry about updating arena later

            Add reusable component for all task/ project additions
              On click, modal appears
                Prompts user with a project/ task title and date input

                Displays an add button and cancel button
                  Both have their own component
                  Add button click (assuming non null entry into input) does several things
                    Arena title changes to project name
                    Arena displays tasks connected to project name
                  Cancel button click removes modal

            On add, project title (with link) appears in Sidebar
      
        Arena
        
        All add buttons on the page do the same thing
          On click, check identifier which indicates if project or task add click
            If sidebar, text in modal changes to "Add Project"
            If arena, text in modal changes to "Add Task"
      */}
      <Header
        isActive={isActive}
        setIsActive={setIsActive}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      { // mobile/ tablet only
        isOpen 
        ? 
        <Sidebar
          isActive={isActive}
          setIsActive={setIsActive}
          category={category}
          setCategory={setCategory}
        /> 
        : <></> 
      }

      <Arena
        task={task}
        setTask={setTask}
        category={category}
      />
    </div>
  );
}

export default App;
