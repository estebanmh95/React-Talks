import React from 'react'
import { Link } from "react-router-dom";
import BreadCrumbs from '../Components/BreadCrumbs'
import SideBar from '../Components/SideBar';
import Footer from '../Components/Footer';
import Pagination from '../Components/Pagination';
import Post from '../Components/Post'

class Home extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      hits: [],
      users: [
        {name: {first: "", last:""}}
      ],
    };
  }
  getData = () => {
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
      .catch(error => console.error(error))
  }
    componentDidMount() {
      this.getData()
    }

  render(){

    const { hits} = this.state;
    const { users} = this.state;

    return(

      <div className="body">
      <Link to="/new">
        <button type="button" style = {{marginLeft:370}}>
            New
      </button>
      </Link>
      <BreadCrumbs/>
        <div role="main" className="main">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <div className="blog-posts">

                  {hits.map((talk, idx) =>
                    <Post key={idx} id = {talk.id} title ={talk.title} content = {talk.about}  by={` ${users[0].name.first} ${users[0].name.last}`}
                    img={talk.picture} tags={talk.tags /*day = {talk.registered.split(" ")[2].replace(/,/,"")}
                    month = {talk.registered.split(" ")[1].slice(0,3)}*/}/>)
                  }
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

    )
  }
}

export default Home
