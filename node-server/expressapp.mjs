import express from "express";

const app = express();

app.listen({port: 8000}, () => {
    console.log("Server node express został uruchomiony!")
})