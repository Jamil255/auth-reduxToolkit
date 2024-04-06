import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand  white" href="#">
           Blog
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             
              <li className="nav-item">
                <a className="nav-link white">
                 Create post
                </a>
              </li>
          
              <li className="nav-item">
                <a
                  className="nav-link white "
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  See Post 
                </a>
              </li>
            </ul>
            <form className="d-flex w-50">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
