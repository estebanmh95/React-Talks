import React  from 'react'

class Post extends React.PureComponent{
  state = {
    value: true,
  }
handler = () => {
  //prevState me trae el objeto state en el momento que se le solicita
    this.setState(
      (prevState) => ({value: !prevState.value})
      )
}
  render (){
    if (this.props.img){
      return(
        <div>
          <div>
              {this.state.value  ?
              <button type="button" class="btn-primary" onClick={this.handler}>Ocultar</button> : <button type="button" class="btn-primary" onClick={this.handler}>Mostrar</button>}
           </div>
            <div>
              {this.state.value ?
              <article className="post post-large">
                        <a href="blog-post.html" className="btn btn-xs btn-primary pull-right">Read more...</a>
                        <div className="post-image single">
                              <div className="img-thumbnail">
                                <img className="img-thumbnail" src={this.props.img} alt=""/>
                              </div>
                        </div>

                        <div className="post-date">
                          <span className="day">{this.props.day}</span>
                          <span className="month">{this.props.month}</span>
                        </div>

                        <div className="post-content">

                          <h2>
                            <a href="blog-post.html">{this.props.title}</a>
                          </h2>
                          <p>{this.props.content}</p>

                          <div className="post-meta">
                            <span>
                              <i className="fa fa-user"></i> By
                              <a href="#">{this.props.by}</a>
                            </span>
                            <span>
                              <i className="fa fa-tag"></i>
                              {this.props.tags.map(value =>
                                  <a href="#">{`${value}   `}</a>
                                )}

                            </span>
                            <span>
                              <i className="fa fa-comments"></i>
                              <a href="#">12 Comments</a>
                            </span>
                            <a href="blog-post.html" className="btn btn-xs btn-primary pull-right">Read more...</a>
                        </div>
                        </div>
                      </article>: null}
          </div>
        </div>
      )
    }

    else if (this.props.vid){
      return(
        <article className="post post-large">
                    <div className="post-video">
                      <iframe src={this.props.vid} width="1280" height="720" frameborder="0" webkitallowfullscreen
                        mozallowfullscreen allowfullscreen></iframe>
                    </div>

                    <div className="post-date">
                      <span className="day">{this.props.day}</span>
                      <span className="month">{this.props.month}</span>
                    </div>

                    <div className="post-content">

                      <h2>
                        <a href="blog-post.html">{this.props.title}</a>
                      </h2>
                      <p>{this.props.content}</p>

                      <div className="post-meta">
                        <span>
                          <i className="fa fa-user"></i> By
                          <a href="#">{this.props.by}</a>
                        </span>
                        <span>
                          <i className="fa fa-tag"></i>
                          <a href="#">Duis</a>,
                          <a href="#">News</a>
                        </span>
                        <span>
                          <i className="fa fa-comments"></i>
                          <a href="#">12 Comments</a>
                        </span>
                        <a href="blog-post.html" className="btn btn-xs btn-primary pull-right">Read more...</a>
                      </div>

                    </div>
                  </article>
      )
     }
     else if (this.props.sound){
       return(
          <article className="post post-large">
          <div className="post-audio">
            <iframe scrolling="no" frameborder="no" src={this.props.sound}></iframe>
          </div>

          <div className="post-date">
            <span className="day">10</span>
            <span className="month">Jan</span>
          </div>

          <div className="post-content">

            <h2>
              <a href="blog-post.html">Post Format - Audio</a>
            </h2>
            <p>Euismod atras vulputate iltricies etri elit. className aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor
              ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor tellus eget
              hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl, eu ornare mauris
              tincidunt vitae. [...]</p>

            <div className="post-meta">
              <span>
                <i className="fa fa-user"></i> By
                <a href="#">John Doe</a>
              </span>
              <span>
                <i className="fa fa-tag"></i>
                <a href="#">Duis</a>,
                <a href="#">News</a>
              </span>
              <span>
                <i className="fa fa-comments"></i>
                <a href="#">12 Comments</a>
              </span>
              <a href="blog-post.html" className="btn btn-xs btn-primary pull-right">Read more...</a>
            </div>

          </div>
    </article>
        ) }
     else{
       return(
        <article class="post post-large">

        <div class="post-date">
          <span class="day">{this.props.day}</span>
          <span class="month">{this.props.month}</span>
        </div>

        <div class="post-content">

          <blockquote>
            {this.props.content}
            <small>Someone famous
              <cite title="Source Title">{this.props.title}</cite>
            </small>
          </blockquote>

          <div class="post-meta">
            <span>
              <i class="fa fa-user"></i> By
              <a href="#">{this.props.by}</a>
            </span>
            <span>
              <i class="fa fa-tag"></i>
              <a href="#">Duis</a>,
              <a href="#">News</a>
            </span>
            <span>
              <i class="fa fa-comments"></i>
              <a href="#">12 Comments</a>
            </span>
            <a href="blog-post.html" class="btn btn-xs btn-primary pull-right">Read more...</a>
          </div>

        </div>
      </article>
       )
     }
    }
  }


export default Post


