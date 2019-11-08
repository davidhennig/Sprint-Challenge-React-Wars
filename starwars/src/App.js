import React from "react";
import "./App.css";
import SWList from "./components/SWList";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const WrapperDiv = styled.div`
  .SW-List {
    border: 10px solid black;
    width: 35%;
    margin: auto;
    margin-bottom: 20px;
    font-family: monospace;
    background-color: tan;
  }
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <WrapperDiv>
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <SWList />
      </div>
    </WrapperDiv>
  );
};

export default App;
