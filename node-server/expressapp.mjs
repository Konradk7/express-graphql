import express from "express";

const app = express();
const router = express.Router();

app.use((req, res, next) => {
    console.log("Server node express został uruchomiony!")
    next();
});
app.use((req, res, next) => {
    res.send("witaj, świecie! jestem oprogramowaniem pośrednim")
});
app.use(router);
router.get("/a", (req, res, next) => {
    res.send("Cześć! witaj na trasie A");
});
router.post("c", (req, res, next) => {
    res.send("Cześć! witaj na trasie C")
})

app.listen({port: 8000}, () => {
    console.log("Serwer node express został uruchomiony")
})