import express from "express";

const app = express();

app.use((req, res, next) => {
    console.log("Server node express został uruchomiony!")
    next();
})
app.use((req, res, next) => {
    res.send("witaj, świecie! jestem oprogramowaniem pośrednim")
})