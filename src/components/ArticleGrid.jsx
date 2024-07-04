import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import ArticleAbout from "./ArticleAbout";
import "./ArticleGrid.css";

const ArticleGrid = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <>
      <input type="text" placeholder="Searching..." className="search-bar" />
      <div className="article-grid">
        {articles.map((article, index) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
      <ArticleAbout />
    </>
  );
};

export default ArticleGrid;
