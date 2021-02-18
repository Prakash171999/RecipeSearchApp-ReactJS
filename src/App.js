import React from "react";
import "./App.css";
import Helpers from "./Helpers";

const api = {
  key: Helpers.APP_KEY,
  id: Helpers.APP_ID,
  base: Helpers.BASE_URL,
};

const url = `${api.base}search?q={query}&app_id=${api.id}&app_key=${api.key}`;
const App = () => {
  return (
    <div>
      <h1>Food Searching App</h1>
    </div>
  );
};

export default App;
