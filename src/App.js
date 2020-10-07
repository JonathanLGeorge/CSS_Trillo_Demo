import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import "./sass/main.css";
function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Nav />
        <Main />
      </div>
    </div>
  );
}

export default App;
