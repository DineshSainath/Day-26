import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FullStack from "./components/Fullstack";
import DataScience from "./components/DataScience";
import CyberSecurity from "./components/CyberSecurity";
import Career from "./components/Career";
import All from "./components/All";

function App() {
  return (
    <div className="App">
      <h1>React Router Task</h1>
      <Router>
        {/* Nav */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link mx-4" to="/">
                  ALL
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-4" to="/fullstack">
                  FULL STACK
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-4" to="/datascience">
                  DATA SCIENCE
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-4" to="/cybersecurity">
                  CYBER SECURITY
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-4" to="/career">
                  CAREER
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/fullstack" element={<FullStack />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
