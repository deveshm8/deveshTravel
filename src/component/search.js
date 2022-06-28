import React from 'react';
import './search.css';
function Search()
{
 
  return (
    <>
    <div className="Super">
    <div className="container">
      <div className="checkHere">
      <h2>Find <span>Adventures</span>, You<br></br> want to talk about</h2>
      <input type='search' id='find' placeholder="Search Tour"></input>
      </div>
      <div className="Help">
        <a href='#' id='bt'>How It Works></a>
        </div>
    </div>
    </div>
    </>
  );
}
export default Search;