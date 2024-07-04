import React from "react";
import Header from "./components/Header";
import ArticleGrid from "./components/ArticleGrid";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <ArticleGrid />
    </div>
  );
};

export default App;
