import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <nav>
            <h6 className="footer-title">About</h6>
          </nav>
          <nav>
            <h6 className="footer-title">Contact</h6>
          </nav>
          <nav>
            <h6 className="footer-title">Adress</h6>
          </nav>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Saif web group members
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer
