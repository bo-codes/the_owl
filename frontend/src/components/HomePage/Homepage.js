import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./HomePage.css";

function HomePage() {
  return (
    <div id="page-container">
      <div id="page-first-half">
        <div id="post-detail-container">
          <div id="post-title">Post title</div>
          <div id="post-content">
            {/* if photo */}
            <div id="post-photo"></div>
            <div id="post-description">description</div>
          </div>
        </div>
      </div>
      <div id="page-second-half">
        <div id="main-title-container">
          <h1 id="main-title-text">ELI'S THOUGHTS</h1>
        </div>
        <div id="post-list">
          {/* map posts (for each post) => */}
          <div id="post-preview">{/* jsut the title and date */}</div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
