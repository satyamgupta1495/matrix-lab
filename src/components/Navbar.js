import "./Navbar.css"
import React from "react"
import logo from "../asset/logo.png"
import Hamburger from "hamburger-react"

const Navbar = () => {
  const [showIcon, setShowIcon] = React.useState(false)

  return (
    <>
      <div className="nav-container">
        <nav className="main-nav">
          <div className="logo-container">
            <span className="logo">
              <img src={logo} alt="logo" />
            </span>
            <h2>Matrix Lab</h2>
          </div>
          <div className="menu-container">
            <div className={showIcon ? "menu-link show-menu" : "menu-link"}>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Whitepaper</a>
                </li>
                <li>
                  <a href="#">Audit</a>
                </li>
                <li>
                  <a href="#">Telegram</a>
                </li>
              </ul>
            </div>
            <div className="connect-button">
              <button>Connect</button>
            </div>
          </div>
          <div className="hamburger-icon">
            <a href="#" onClick={() => setShowIcon(!showIcon)}>
              <Hamburger color="#fff" />
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
