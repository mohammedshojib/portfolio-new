import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createContext, useState } from "react";
import HomePage from "./pages/HomePage";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import ProjectsDetails from "./components/ProjectsDetails";

export const ProjectContext = createContext();

function App() {
  const [projects, setProjects] = useState([]);

  return (
    <ProjectContext.Provider value={[projects, setProjects]}>
      <div className="App">
        <Header />{" "}
        <Routes>
          <Route path="/" element={<HomePage />} />{" "}
          <Route path="/project/:id" element={<ProjectsDetails />} />
        </Routes>{" "}
        <Footer />
      </div>
    </ProjectContext.Provider>
  );
}

export default App;
