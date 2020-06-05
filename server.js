const express = require('express');
const fs = require('fs');
var bodyParser = require('body-parser');
const app = express();

let rawdata = fs.readFileSync('./data/taskData.json');
let tasks = JSON.parse(rawdata);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.get('/tasks/:id', (req, res) => {
  res.json(tasks[req.params.id]);
});

app.post('/createTask', (req, res) => {
  const newTask = {
    id: tasks.length,
    title: req.body.title,
    description: req.body.description,
    status: 'todo',
  };
  tasks.push(newTask);
  res.send('Added New Task');
});

app.get('/deleteTask', (req, res) => {
  var index = tasks.length;
  while (index--) {
    if (tasks[index] && tasks[index]['title'] === req.body.title) {
      tasks.splice(index, 1);
    }
  }
  res.send('Deleted Task');
});

app.listen(5000, () => console.log(`Server started on port 5000`));
