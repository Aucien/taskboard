import React, { Component } from 'react';
import Axios from 'axios';

class TaskPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      status: '',
      taskID: props.match.params.id,
    };
  }

  componentDidMount = () => {
    Axios.get(`/tasks/${this.state.taskID}`).then((response) => {
      this.setState({
        title: response.data.title,
        description: response.data.description,
        status: response.data.status,
      });
      console.log(this.state);
    });
  };

  deleteTask = (event) => {
    event.preventDefault();
    Axios.post('/deleteTask', this.state)
      .then((response) => {
        console.log(response);
      })
      .then((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>status: {this.state.status}</p>
        <p>{this.state.description}</p>
        <button onClick={this.deleteTask}>Delete task</button>
      </div>
    );
  }
}

export default TaskPage;
