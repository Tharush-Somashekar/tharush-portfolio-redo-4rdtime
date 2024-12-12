import React from "react";

function Footer() {
  return (
    <footer className="footer--container">
            <hr className="divider" />
      <div className="footer--link--container">
        <div>
          <img className="footer_logo" src="./img/Tharush_logo.png" alt="Tharush Somashekar" />
        </div>
      <div className="footer--content--container">
        <p className="footer--content">Made by Tharush Somashekar</p>
      </div>
      </div>
    </footer>
  );
}

export default Footer;