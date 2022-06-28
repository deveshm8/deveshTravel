import "./styles.css";
import React from "react";
import Navbar from "./component/navbar";
import Search from "./component/search";
import Card from "./component/cards";
export default function App() {
  return (
    <div className="App">
      <input type="search" class="icon" placeholder="search a location" />
      <Navbar />
      <Search />
      <Card />
    </div>
  );
}
