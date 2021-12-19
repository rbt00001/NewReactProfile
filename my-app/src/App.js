import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ContactMe from "./Components/ContactMe";
import MyProjects from "./Components/MyProjects";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";

function App() {
  return (
    <div className="my-app">
      <Header />
    </div>
  );
}

export default App;
