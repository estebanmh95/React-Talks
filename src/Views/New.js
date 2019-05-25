import React from 'react'
import { Link } from "react-router-dom";
import { WithContext as ReactTags } from 'react-tag-input';
const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

class New extends React.PureComponent{
  state = {
    title:"",
    about: "",
    isActive: "",
    picture: "http://placehold.it/1280x500",
    userId: "",
    registered:"",
    tags:[],
    users: [],
  }
  handleDelete = (i) => {
    const { tags } = this.state;
    this.setState({
     tags: tags.filter((tag, index) => index !== i),
    });
}

handleAddition = (tag) => {
    this.setState(state => ({ tags: [...state.tags, tag] }));
}

handleDrag=(tag, currPos, newPos) => {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });
}

  handleChange = (event) => {
    this.setState({
     [event.target.name] : event.target.value
    })
  }
    getData = () => {
      Promise.all([
        fetch("http://localhost:8080/users")
        ])
          .then(values => Promise.all(values.map(value => value.json())))
          .then(allResponses => {
          this.setState({users: allResponses[0]})
          }
        )
        .catch(error => console.error(error))
    }
      componentDidMount() {
        this.getData()
      }
      handleSubmit = (event) =>{
        event.preventDefault();

        const  {
          title,
          about,
          registered,
          picture,
          isActive,
          userId,
          tags
        } = this.state
        const talk = {
          title: title,
          about: about,
          isActive: isActive,
          picture: picture,
          userId: userId,
          registered: registered,
          tags: tags.map(tag  =>tag.text),
        }
        console.log(talk)
        debugger
        fetch("http://localhost:8080/talks", {
            method: 'post',
            headers: {
              "Content-type": "application/json; charset=UTF-8 "
            },
            body: JSON.stringify(talk)
          }).then(function(response) {
            return response.json();
          }).then(function(data) {
          });

      }

  render(){
    const { tags } = this.state;
    return(
      <body>
        <div className="container">
          <div className="row">
            <div className="col-6">
            <h2>New Talk Form</h2>

              <form action="http://localhost:3000/" onSubmit={this.handleSubmit}>
                <h1>Title:</h1>
                <input type="text" name="title" placeholder="Title of the talk" value={this.state.title} onChange={this.handleChange}/>
                <br/><br/>
              <h1>About:</h1>
              <textarea placeholder="Explain what your talk is all about" name="about" onChange={this.handleChange}/>
              <br/><br/>
              <h1>Esta Activa esta Charla?</h1>
              <select value={this.state.isActive} onChange={this.handleChange} name="isActive">
              <option value="#" >Select...</option>
                <option value={true} >Si</option>
                <option value={false}>No</option>
              </select>
                <br/><br/>
                <h1>Seleccione el ponente de la charla</h1>
              <select value={this.state.userId} onChange={this.handleChange} name="userId">
                <option>Select User...</option>
                {this.state.users.map(user=>
                     <option value={user.userId} >
                       {`${user.name.first} ${user.name.last}`}
                       </option>
                )}
                </select>
                <br/><br/>
                <h1>Fecha de la Charla</h1>
                <input type="date" id="start" name="registered"
                        value={this.state.registered}
                        min="2019-01-01" max="2019-12-31" onChange={this.handleChange}>
                   </input>
                <br/><br/>
                <div>
                <ReactTags tags={tags}

                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleDrag={this.handleDrag}
                    delimiters={delimiters} />
                  </div>
                <br/><br/>
                <input type="submit" value="Submit"/>
              </form>
              <Link to="/">
                <button type="button" style = {{marginLeft:370}}>
                    Home
              </button>
              </Link>
            </div>
          </div>
        </div>
      </body>
    )
  }

}

export default New
