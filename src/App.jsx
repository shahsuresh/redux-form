import React from "react";
import "../src/App.css";
import UserDetailsForm from "./components/UserDetailsForm";
import DisplayData from "./components/DisplayData";
import LiveDisplay from "./components/LiveDisplay";

const App = () => {
  return (
    <>
      <UserDetailsForm />
      <DisplayData />
      <LiveDisplay />
    </>
  );
};

export default App;
