import React from 'react';
import './App.css';
import Header from './Components/Header'
import BreadCrumbs from './Components/BreadCrumbs'
import SideBar from './Components/SideBar';
import Footer from './Components/Footer';
import Pagination from './Components/Pagination';
import Post from './Components/Post'


class App extends React.PureComponent{

  constructor(props){
    super(props)
    this.state = {
      hits: [],
      users: [
        {name: {first: "", last:""}}
      ],
    };
  }
    componentDidMount() {
      Promise.all([
      fetch("http://localhost:8080/talks"),
      fetch("http://localhost:8080/users")
      ])
        .then(values => Promise.all(values.map(value => value.json())))
        .then(allResponses => {
        this.setState({hits: allResponses[0]})
        this.setState({users: allResponses[1]})
        }
      )
    }

  render(){

    const { hits} = this.state;
    const { users} = this.state;

    console.log(users)
    return (
      <body>
      <div className="body">
      <Header/>
      <BreadCrumbs/>
        <div role="main" className="main">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <div className="blog-posts">
                  {hits.map(talk =>
                    <Post title ={talk.title} content = {talk.about}  by={` ${users[0].name.first} ${users[0].name.last}`}
                    img={talk.picture} tags={talk.tags} day = {talk.registered.split(" ")[2].replace(/,/,"")}
                    month = {talk.registered.split(" ")[1].slice(0,3)}/>)
                  }

                {/*<Post img = "/assets/img/blog/blog-image-3.jpg" title="Post Format - Image Gallery" day="12" month="Jan" by=" John Does"
                content="Euismod atras vulputate iltricies etri elit. className aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor
                ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor tellus eget
                hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl, eu ornare mauris
                tincidunt vitae. [...]"/>
                <Post img = "/assets/img/blog/blog-image-2.jpg" title="Post Format - Single Image" day="10" month="Feb" by=" John Doe"
                content ="Euismod atras vulputate iltricies etri elit. className aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor
                ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor tellus eget
                hendrerit. Morbi id aliquam ligula. Aliquam id dui sem. Proin rhoncus consequat nisl, eu ornare mauris
                tincidunt vitae. [...]"/>
                <Post vid = "//player.vimeo.com/video/67957799?color=0088CC" title="Post Format - Video" day="10" month="Feb" by=" John Doe"
                content = "Euismod atras vulputate iltricies etri elit. className aptent taciti sociosqu ad litora torquent per conubanostra, per inceptos himenaeos.
                    Nulla nunc duis tristique in semper vels congue sed ligulas Nam dolor
                    ligulas faucibus id sodales ins  auctor fringilla liberos Pellentesque pellentesque tempor tellus eget
                    hendrerits Morbi id aliquam ligulas Aliquam id dui sems Proin rhoncus consequat nisls eu ornare mauris
                    tincidunt vitaes[...]"/>
                <Post sound = "https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F67943430&amp;show_artwork=true&amp;maxwidth=132&amp;maxheight=1000"/>
                <Post img="" title="Post Format - Single Image" day="10" month="Feb" by=" John Doe"
                    content="Post Format - Blockquote - Mauris aliquet ultricies ante, non faucibus ante gravida sed. Sed ultrices pellentesque purus,
                        vulputate volutpat ipsum hendrerit sed neque sed sapien rutrum laoreet justo ultrices. In pellentesque
                        lorem condimentum dui morbi pulvinar dui non quam pretium ut lacinia tortor."/>
    */}
                <Pagination/>
                </div>
              </div>
              <div className="col-md-3">
                <SideBar/>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </body>
    )
  }
}

export default App;
