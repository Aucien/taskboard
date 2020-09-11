import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
  }

  componentDidMount = () => {
    axios.get('/tasks').then((response) => {
      this.setState({
        tasks: response.data,
      });
      console.log(this.state);
    });
  };

  render() {
    return (
      <div>
        {this.state.tasks.map((info, index) => {
          return (
            <div>
              <Link to={`/task/${index}`}> {info.title}</Link>
              <p>status: {info.status}</p>
            </div>
          );
        })}
        <br />
        <Link to='/createTask'>Create task</Link>
      </div>
    );
  }
}

export default Homepage;
