import React from 'react'

const SideBar = () => {
  return(
    <aside className="sidebar">

                <form>
                  <div className="input-group input-group-lg">
                    <input className="form-control" placeholder="Search..." name="s" id="s" type="text"/>
                    <span className="input-group-btn">
                      <button type="submit" className="btn btn-primary btn-lg">
                        <i className="fa fa-search"></i>
                      </button>
                    </span>
                  </div>
                </form>

                <hr/>

                <h4 className="heading-primary">Categories</h4>
                <ul className="nav nav-list mb-xlg">
                  <li>
                    <a href="#">Design (2)</a>
                  </li>
                  <li className="active">
                    <a href="#">Photos (4)</a>
                    <ul>
                      <li>
                        <a href="#">Animals</a>
                      </li>
                      <li className="active">
                        <a href="#">Business</a>
                      </li>
                      <li>
                        <a href="#">Sports</a>
                      </li>
                      <li>
                        <a href="#">People</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Videos (3)</a>
                  </li>
                  <li>
                    <a href="#">Lifestyle (2)</a>
                  </li>
                  <li>
                    <a href="#">Technology (1)</a>
                  </li>
                </ul>

                <div className="tabs mb-xlg">
                  <ul className="nav nav-tabs">
                    <li className="active">
                      <a href="#popularPosts" data-toggle="tab">
                        <i className="fa fa-star"></i> Popular</a>
                    </li>
                    <li>
                      <a href="#recentPosts" data-toggle="tab">Recent</a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane active" id="popularPosts">
                      <ul className="simple-post-list">
                        <li>
                          <div className="post-image">
                            <div className="img-thumbnail">
                              <a href="blog-post.html">
                                <img src="img/blog/blog-thumb-1.jpg" alt=""/>
                              </a>
                            </div>
                          </div>
                          <div className="post-info">
                            <a href="blog-post.html">Nullam Vitae Nibh Un Odiosters</a>
                            <div className="post-meta">
                              Jan 10, 2018
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="post-image">
                            <div className="img-thumbnail">
                              <a href="blog-post.html">
                                <img src="img/blog/blog-thumb-2.jpg" alt=""/>
                              </a>
                            </div>
                          </div>
                          <div className="post-info">
                            <a href="blog-post.html">Vitae Nibh Un Odiosters</a>
                            <div className="post-meta">
                              Jan 10, 2018
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="post-image">
                            <div className="img-thumbnail">
                              <a href="blog-post.html">
                                <img src="img/blog/blog-thumb-3.jpg" alt=""/>
                              </a>
                            </div>
                          </div>
                          <div className="post-info">
                            <a href="blog-post.html">Odiosters Nullam Vitae</a>
                            <div className="post-meta">
                              Jan 10, 2018
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-pane" id="recentPosts">
                      <ul className="simple-post-list">
                        <li>
                          <div className="post-image">
                            <div className="img-thumbnail">
                              <a href="blog-post.html">
                                <img src="img/blog/blog-thumb-2.jpg" alt=""/>
                              </a>
                            </div>
                          </div>
                          <div className="post-info">
                            <a href="blog-post.html">Vitae Nibh Un Odiosters</a>
                            <div className="post-meta">
                              Jan 10, 2018
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="post-image">
                            <div className="img-thumbnail">
                              <a href="blog-post.html">
                                <img src="img/blog/blog-thumb-3.jpg" alt=""/>
                              </a>
                            </div>
                          </div>
                          <div className="post-info">
                            <a href="blog-post.html">Odiosters Nullam Vitae</a>
                            <div className="post-meta">
                              Jan 10, 2018
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="post-image">
                            <div className="img-thumbnail">
                              <a href="blog-post.html">
                                <img src="img/blog/blog-thumb-1.jpg" alt=""/>
                              </a>
                            </div>
                          </div>
                          <div className="post-info">
                            <a href="blog-post.html">Nullam Vitae Nibh Un Odiosters</a>
                            <div className="post-meta">
                              Jan 10, 2018
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <hr/>

                <h4 className="heading-primary">About Us</h4>
                <p>Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in, auctor
                  fringilla libero. Nulla nunc dui, tristique in semper vel. Nam dolor ligula, faucibus id sodales in, auctor
                  fringilla libero. </p>

              </aside>
  )
}
export default SideBar
