const JokeController=require('../controller/jokes.controller')

module.exports=app=>{
    app.get("/api/allJokes",JokeController.findAllJokes)
    app.get("/api/oneJoke", JokeController.oneJoke)
    app.post("/api/makeJoke",JokeController.makeJoke)
    app.post("/api/updateJoke",JokeController.updateJoke)
    app.post("/api/deleteJoke",JokeController.deleteJoke)
}