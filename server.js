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

app.post('/deleteTask', (req, res) => {
  tasks.splice(req.body.taskID, 1);
  res.send('Deleted Task');
});

app.post('/update', (req, res) => {
  const updatedTask = {
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
  };
  tasks[req.body.taskID] = updatedTask;
  res.send('updated task');
});

app.listen(5000, () => console.log(`Server started on port 5000`));
