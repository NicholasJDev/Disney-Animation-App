import DisneyAnimationApp from "./app";


const app : DisneyAnimationApp = new DisneyAnimationApp(
    //TODO: Controller instance should go here
    [],
    parseInt(process.env.PORT ? process.env.PORT : "8080")
);
app.listen()