import React from 'react'
import { Link } from "react-router-dom";
import BreadCrumbs from '../Components/BreadCrumbs'
import SideBar from '../Components/SideBar';
import Footer from '../Components/Footer';
import Pagination from '../Components/Pagination';
import Post from '../Components/Post'
class Talk extends React.PureComponent {
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
    const {match: { params }} = this.props
    console.log(params.talkId)
    Promise.all([
      fetch(`http://localhost:8080/talks/${params.talkId}`),
      fetch("http://localhost:8080/users")
      ])
        .then(values => Promise.all(values.map(value => value.json())))
        .then(allResponses => {
          console.log(allResponses)
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
    console.log(users)
   /* if(users.length > 1){
     const {name:{first, last}} =  (users.find( (element) => element  === hits.userId))
     console.log(first)
    }
*/
  return(
    <body>
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


                    {hits.length !== 0 && users.length > 1 ? <Post  id = {hits.id} title ={hits.title} content = {hits.about}
                    img={hits.picture} tags={hits.tags} day = {hits.registered.split(" ")[2].replace(/,/,"")}
                    month = {hits.registered.split(" ")[1].slice(0,3)}  />: null}

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

export default Talk
