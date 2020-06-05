import React, { Component } from 'react';
import axios from 'axios';

class TaskPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'blank',
      description: 'blank',
      taskID: props.match.params.id,
    };
  }

  componentDidMount = () => {
    axios.get(`/tasks/${this.state.taskID}`).then((response) => {
      this.setState({
        title: response.data.title,
        description: response.data.description,
      });
      console.log(this.state);
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
      </div>
    );
  }
}

export default TaskPage;
