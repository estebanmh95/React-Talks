import React from 'react'

const Header = () => (
  <header id="header">
      <div className="header-body">
        <div className="header-container container">
          <div className="header-row">
            <div className="header-column">
              <div className="header-logo">
                <a href="index.html">
                  <img alt="Porto" width="111" height="54" data-sticky-width="82" data-sticky-height="40" data-sticky-top="33" src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"/>
                </a>
              </div>
            </div>
            <div className="header-column">
              <div className="header-row">
                <div className="header-search hidden-xs">
                  <form id="searchForm" action="page-search-results.html" method="get">
                    <div className="input-group">
                      <input type="text" className="form-control" name="q" id="q" placeholder="Search..." required/>
                      <span className="input-group-btn">
                        <button className="btn btn-default" type="submit">
                          <i className="fa fa-search"></i>
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
                <nav className="header-nav-top">
                  <ul className="nav nav-pills">
                    <li className="hidden-xs">
                      <a href="about-us.html">
                        <i className="fa fa-angle-right"></i> About Us</a>
                    </li>
                    <li className="hidden-xs">
                      <a href="contact-us.html">
                        <i className="fa fa-angle-right"></i> Contact Us</a>
                    </li>
                    <li>
                      <span className="ws-nowrap">
                        <i className="fa fa-phone"></i> (123) 456-789</span>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-row">
                <div className="header-nav">
                  <button className="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main">
                    <i className="fa fa-bars"></i>
                  </button>
                  <ul className="header-social-icons social-icons hidden-xs">
                    <li className="social-icons-facebook">
                      <a href="http://www.facebook.com/" target="_blank" title="Facebook">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li className="social-icons-twitter">
                      <a href="http://www.twitter.com/" target="_blank" title="Twitter">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="social-icons-linkedin">
                      <a href="http://www.linkedin.com/" target="_blank" title="Linkedin">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1 collapse">
                    <nav>
                      <ul className="nav nav-pills" id="mainNav">
                        <li className="dropdown">
                          <a className="dropdown-toggle" href="index.html">
                            Home
                          </a>
                        </li>
                        <li className="dropdown">
                          <a className="dropdown-toggle" href="index.html">
                            Register
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
)
export default Header
