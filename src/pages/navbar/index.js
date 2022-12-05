import React from 'react'
import { useSelector } from 'react-redux'

const NavBar = () => {
  const { me } = useSelector((state) => state.app)
  // console.log(me); // pulls all user data from firestore associated with the current userid

  return (
    // top navbar
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{width:'100vw'}}>
      <p className="navbar-brand">
        GatorTix
      </p>

      {/* list of tabs */}
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="dashboard">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="profile">
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/report">
              Report
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
