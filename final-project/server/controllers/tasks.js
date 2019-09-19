const express = require ('express');
const router = express.Router();
const Task = require('../models/tasks.js')
//Get Request to seed database
router.get('/seed', (req, res) => {
  console.log('hello');
  Task.create([
    {
      title: 'Venue',
      description: 'Choose a venue for the wedding',
      isCompleted: false
    },
    {
      title: 'Wedding Party',
      description: 'Choose who will be bridesmaids',
      isCompleted: false
    },
    {
      title: 'Wedding Party',
      description: 'Choose who will be groomsmen',
      isCompleted: false
    },
    {
      title: 'Entertainment',
      description: 'Find music for the wedding day',
      isCompleted: false
    },
    {
      title: 'Entertainment',
      description: 'Pick a fun game or object we can include for during the reception',
      isCompleted: false
    }
  ], (error, data) => {
    console.log(error);
    console.log(data);
    res.json(data)
  })
})

//Post Request
router.post('/', (req, res) => {
  Task.create(req.body, (error, createdTask) => {
    res.json(createdTask)
  })
})
//Delete Request
router.delete('/:id', (req, res) => {
  Task.findByIdAndDelete(req.params.id, (error, deletedTask) => {
    res.json(deletedTask)
  })
})
//Put Request
router.put('/task/:id/', (req, res) => {
  Task.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedTask) => {
    res.json(updatedTask)
  })
})

//Show Tasks
router.get('/', (req, res) => {
  Task.find({}, (error, foundTasks) => {
    res.json(foundTasks)
  })
})

//Show individual task
router.get('/:id', (req, res) => {
  Task.findById(req.params.id, (error, foundTask) => {
    res.json(foundTask)
  })
})

module.exports = router;
