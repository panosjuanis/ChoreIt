const Home = require("../models/home");

const homeCtrl = {};

homeCtrl.getHomes = async (req, res, next) => {
  const homes = await Home.find();
  res.json(homes);
};

homeCtrl.createHome = async (req, res, next) => {

  const home = new Home({
    name: req.body.name,
    participants: req.body.participants,
    tasks: req.body.tasks
  });
  await home.save();
  res.json({ status: "Home created" });
};

homeCtrl.getHome = async (req, res, next) => {
  console.log('uid', req.params.id); 
  var id  = req.params.id;
  const home = await Home.findById(id);
  if (home == null){
    res.json("Home not found!");
  }
  res.json(home);
  
};

homeCtrl.editHome = async (req, res, next) => {
    var id  = req.params.id;
    await Home.findByIdAndUpdate(id, {$set: req.body}, {new: true});
    res.json({ status: "Home Updated" });
};

homeCtrl.deleteHome = async (req, res, next) => {
  await Home.findByIdAndRemove(req.params.id);
  res.json({ status: "Home Deleted" });
};

module.exports = homeCtrl;