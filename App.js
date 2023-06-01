import "./App.css";
import Header from "./components/Homepages/Header";
import Navbar from "./components/Homepages/Navbar";
import About from "./components/Homepages/About";
import Education from "./components/Homepages/Education";
import Experience from "./components/Homepages/Experience";
import Projects from "./components/Homepages/Projects";
import Contact from "./components/Homepages/Contact";
import Footer from "./components/Homepages/Footer";
import Login from "./components/Homepages/Login";

//admin components
import Admin from "./components/adminComponents/Admin";

//edit components
import EditAbout from "./components/editComponents/EditAbout";
import EditEducation from "./components/editComponents/EditEducation";
import EditProjects from "./components/editComponents/EditProjects";
import EditExperience from "./components/editComponents/EditExperience";
import { Element } from "react-scroll";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function AllComponents() {
  return (
    <div>
      <Element className="Home">
        <Header />
      </Element>

      <Element className="About">
        <About />
      </Element>

      <Element className="Education">
        <Education />
      </Element>

      <Element className="Projects">
        <Projects />
      </Element>

      <Element className="Experience">
        <Experience />
      </Element>

      <Element className="Contact">
        <Contact />
      </Element>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
        
            <Route exact path="/" element={<AllComponents />} />
          

          <Route exact path="/login" element={<Login />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/edit/:id" element={<EditAbout />} />
          <Route exact path="/editEducation/:id" element={<EditEducation />} />
          <Route exact path="/editProject/:id" element={<EditProjects />} />
          <Route
            exact
            path="/editExperience/:id"
            element={<EditExperience />}
          />
          {/* <Route exact path = '/' element={<Footer/>} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
