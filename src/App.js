import Header from './components/header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* 
        Header
          Burger
            On click, burger will hide/ show the sidebar depending on state
          
          Login
            On click, modal pops up prompting user to enter their email address & password
              Provides link to sign up -> would require another component
              At first, create modal component but leave links dead -> back end required here to log users in/ sign them up

        Sidebar
          Potential reusability of components here - all clicks do the same thing -> change title in arena to whatever you clicked on, show tasks

          All component
            On click, display all tasks in arena
              Change title to "All"

          Today component
            On click, display today's tasks in arena
              Change title to "Today"

          Week component
            On click, display week's tasks in arena
              Change title to "Week"

          Projects
            On click, display all projects with tasks in arena
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

        Footer
          only contains a linked github icon
        
        All add buttons on the page do the same thing
          On click, check identifier which indicates if project or task add click
            If sidebar, text in modal changes to "Add Project"
            If arena, text in modal changes to "Add Task"
      */}
      <Header/>
    </div>
  );
}

export default App;
