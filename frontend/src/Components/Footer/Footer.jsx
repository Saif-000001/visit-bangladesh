import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
        <p>
          Copyright © {new Date().getFullYear()} - All rights reserved by Saif
          web group members
        </p>
      </footer>
    </div>
  );
}

export default Footer;
