import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure({
  autoClose: 2000,
})

function App() {
  return (
    <>
      <Router>
        <Route>
          <NavBar />
          <Main />
        </Route>
        <Footer />
      </Router>
    </>
  );
}

export default App;
