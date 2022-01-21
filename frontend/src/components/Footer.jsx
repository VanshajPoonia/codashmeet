import React, { Component } from "react";
import "../css/Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a
          href="https://github.com/VanshajPoonia/codashmeet"
          target="_blank"
          rel="noopener noreferrer"
          className="left-footer"
        >
          ⭐ Star Project
        </a>
        <a
          href="https://vanshajpoonia.com"
          target="_blank"
          rel="noopener noreferrer"
          className="right-footer"
        >
          © Vanshaj Poonia
        </a>
      </div>
    );
  }
}
export default Footer;
