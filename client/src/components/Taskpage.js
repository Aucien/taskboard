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

  //Handles Updated the task
  handleSubmit = (event) => {
    event.preventDefault();
    Axios.post('/update', this.state)
      .then((response) => {
        console.log(response);
      })
      .then((error) => {
        console.log(error);
      });
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  updateStatus = (event) => {
    switch (this.state.status) {
      case 'todo':
        this.setState({
          status: 'in progress',
        });
        break;
      case 'in progress':
        this.setState({
          status: 'review',
        });
        break;
      case 'review':
        this.setState({
          status: 'done',
        });
        break;
      case 'done':
        this.setState({
          status: 'todo',
        });
        break;
      default:
        console.log('error');
        break;
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='title'
            value={this.state.title}
            onChange={this.handleInputChange}
          />
          <br />
          <p>status: {this.state.status}</p>
          <textarea
            name='description'
            value={this.state.description}
            onChange={this.handleInputChange}
          />
          <button onClick={this.updateStatus}>Update status</button>
          <br />
          <button>Update Task</button>
        </form>
        <button onClick={this.deleteTask}>Delete task</button>
      </div>
    );
  }
}

export default TaskPage;
