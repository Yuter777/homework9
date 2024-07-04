import React from "react";
import "./ArticleCard.css";

const ArticleCard = ({ category, title, author, date }) => {
  return (
    <div className="article-card">
      <div className="box">
        <div className={`category ${category.toLowerCase()}`}>{category}</div>
      </div>
      <div className="body">
        <h2>{title}</h2>
        <p>
          {author} • {date}
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
