import React, { Component } from 'react';
import Axios from 'axios';

class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, description } = this.state;
    const newTask = {
      title: title,
      description: description,
    };
    Axios.post('/createTask', newTask)
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

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='title'
            placeholder='title'
            onChange={this.handleInputChange}
          />
          <br />
          <textarea
            name='description'
            placeholder='description'
            onChange={this.handleInputChange}
          />
          <br />
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default CreateTask;
