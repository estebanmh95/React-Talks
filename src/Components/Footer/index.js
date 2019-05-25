import React from 'react'

const Footer =  () => {
  return(

    <footer id="footer">
    <div className="container">
      <div className="row">
        <div className="footer-ribbon">
          <span>Get in Touch</span>
        </div>
        <div className="col-md-3">
          <div className="newsletter">
            <h4>Newsletter</h4>
            <p>Keep up on our always evolving product features and technology. Enter your e-mail and subscribe to our newsletter.</p>

            <div className="alert alert-success hidden" id="newsletterSuccess">
              <strong>Success!</strong> You've been added to our email list.
            </div>

            <div className="alert alert-danger hidden" id="newsletterError"></div>

            <form id="newsletterForm" action="php/newsletter-subscribe.php" method="POST">
              <div className="input-group">
                <input className="form-control" placeholder="Email Address" name="newsletterEmail" id="newsletterEmail" type="text"/>
                <span className="input-group-btn">
                  <button className="btn btn-default" type="submit">Go!</button>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-3">
          <h4>Latest Tweets</h4>
          <div id="tweet" className="twitter" data-plugin-tweets data-plugin-options='{"username": "", "count": 2}'>
            <p>Please wait...</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-details">
            <h4>Contact Us</h4>
            <ul className="contact">
              <li>
                <p>
                  <i className="fa fa-map-marker"></i>
                  <strong>Address:</strong> 1234 Street Name, City Name, United States</p>
              </li>
              <li>
                <p>
                  <i className="fa fa-phone"></i>
                  <strong>Phone:</strong> (123) 456-789</p>
              </li>
              <li>
                <p>
                  <i className="fa fa-envelope"></i>
                  <strong>Email:</strong>
                  <a href="mailto:mail@example.com">mail@example.com</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-2">
          <h4>Follow Us</h4>
          <ul className="social-icons">
            <li className="social-icons-facebook">
              <a href="http://www.facebook.com/" title="Facebook">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li className="social-icons-twitter">
              <a href="http://www.twitter.com/" title="Twitter">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="social-icons-linkedin">
              <a href="http://www.linkedin.com/" title="Linkedin">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
        <div className="row">
          <div className="col-md-1">
            <a href="index.html" className="logo">
              <img alt="Porto Website Template" className="img-responsive" src="img/logo-footer.png"/>
            </a>
          </div>
          <div className="col-md-7">
            <p>© Copyright 2018. All Rights Reserved.</p>
          </div>
          <div className="col-md-4">
            <nav id="sub-menu">
              <ul>
                <li>
                  <a href="page-faq.html">FAQ's</a>
                </li>
                <li>
                  <a href="sitemap.html">Sitemap</a>
                </li>
                <li>
                  <a href="contact-us.html">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
