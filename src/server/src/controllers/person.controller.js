const Person = require("../models/person");

const personCtrl = {};

personCtrl.getPersons = async (req, res, next) => {
  const persons = await Person.find();
  res.json(persons);
};

personCtrl.createPerson = async (req, res, next) => {

  const person = new Person({
    tag: req.body.tag,
    fullname: req.body.fullname,
    mail: req.body.mail,
    score: 0
  });
  await person.save();
  res.json({ status: "Person created" });
};

personCtrl.getPerson = async (req, res, next) => {
  console.log('uid', req.params.id); 
  var id  = req.params.id;
  const person = await Person.findById(id);
  if (person == null){
    res.json("Person not found!");
  }
  res.json(person);
  
};

personCtrl.editPerson = async (req, res, next) => {
    var id  = req.params.id;
    await Person.findByIdAndUpdate(id, {$set: req.body}, {new: true});
    res.json({ status: "Person Updated" });
};

personCtrl.deletePerson = async (req, res, next) => {
  await Person.findByIdAndRemove(req.params.id);
  res.json({ status: "Person Deleted" });
};

module.exports = personCtrl;