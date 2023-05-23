import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SearchMovies from './searchMovies';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div className="container">
  <h1 className="title">Movie Search</h1>
  <SearchMovies/>
</div>
);


