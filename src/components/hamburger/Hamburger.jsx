import React from "react";

import "./hamburger.styles.css";

function Hamburger(props) {
  return (
    <label className="burger">
      <input type="checkbox" />
      <div className="checkmark">
        <span></span>
        <span></span>
      </div>
    </label>
  );
}

export default Hamburger;
