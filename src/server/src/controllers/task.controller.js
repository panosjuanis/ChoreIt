const Task = require("../models/task");

const taskCtrl = {};

taskCtrl.getTasks = async (req, res, next) => {
  const tasks = await Task.find();
  res.json(tasks);
};
taskCtrl.createTask = async (req, res, next) => {

  const task = new Task({
    task_name: req.body.task_name,
    participant_ids: req.body.participant_ids,
    freq: req.body.freq,
    difficulty: req.body.difficulty
  });
  await task.save();
  res.json({ status: "Task created" });
};

taskCtrl.getTask = async (req, res, next) => {
  console.log('uid', req.params.id); 
  var id  = req.params.id;
  const task = await Task.findById(id);
  if (task == null){
    res.json("Task not found!");
  }
  res.json(task);
  
};

taskCtrl.editTask = async (req, res, next) => {
    var id  = req.params.id;
    await Task.findByIdAndUpdate(id, {$set: req.body}, {new: true});
    res.json({ status: "Task Updated" });
};

taskCtrl.addUserToTask = async (req, res, next) => {
    console.log("Adding user to task")
    var id  = req.params.id;
    var newUser = req.body.newUser;
    console.log(newUser);
    const task = await Task.findById(id);
    if (task == null){
        res.json("Task not found!");
      }
    task.participant_ids.push(newUser);
    console.log(task.participant_ids);
    await Task.findByIdAndUpdate(id, {$set: task}, {new: true});
    res.json({ status: "Task Updated" });
};

taskCtrl.deleteTask = async (req, res, next) => {
  await Task.findByIdAndRemove(req.params.id);
  res.json({ status: "Task Deleted" });
};

module.exports = taskCtrl;