const Joke=require('../model/jokes.model');

module.exports.findAllJokes=(req,res)=>{
    Joke.find({})
    .then(jokes=>res.json(jokes))
    .catch(err=>console.log("findAllJokes failed:",err))
}
module.exports.oneJoke=(req,res)=>{
    Joke.findOne({})
    .then(joke=>res.json(joke))
    .catch(err=>console.log("findOne failed:",err))
}
module.exports.makeJoke=(req,res)=>{
    Joke.create(req.body)
    .then(res.json("You made a joke! Well done."))
    .catch(err=>console.log("findOne failed:",err))
}
module.exports.updateJoke=(req,res)=>{
    Joke.updateOne({},req.body)
    .then(res.json("You updated a joke!"))
    .catch(err=>console.log("findOne failed:",err))
}
module.exports.deleteJoke=(req,res)=>{
    Joke.remove({_id:req.body.id})
    .then(res.json("You deleted a joke! Sad."))
    .catch(err=>console.log("findOne failed:",err))
}