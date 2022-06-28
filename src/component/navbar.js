import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import "./navCss.css";
function Navbar() {
  const [display, setDisplay] = useState("+Submit Tour");
  const submitted = () => {
    setDisplay("tour submitted");
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="title">
            <h2>
              Re:T
              <span id="x">
                <BsFillEmojiSunglassesFill />
              </span>
              ur
            </h2>
          </div>

          <ul class="nav-menu">
            <li class="nav-item">
              <a class="nav-link" href="https://themeforest.net/">
                Store List
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.tourmyindia.com/">
                Tour Locator
              </a>
            </li>
            <li class="nav-item">
              <select>
                <option>System Pages</option>
                <option>System Pages 2</option>
                <option>System pages 3</option>
                <option>System pages 4</option>
              </select>
            </li>
            <li class="nav-item">
              <select>
                <option>Layout Variant</option>
                <option>Layout Variant 2</option>
                <option>Layout Variant 3</option>
                <option>Layout Variant 4</option>
              </select>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="tut"
                href="https://www.keralatourism.org/"
              >
                Tutorial
              </a>
            </li>
            <li class="nav-item">
              <button onClick={submitted}>{display}</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
