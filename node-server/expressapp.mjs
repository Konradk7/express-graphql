import express from "express";

const app = express();

app.use((req, res, next) => {
    console.log("Server node express został uruchomiony!")
    next();
})