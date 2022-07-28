import express from "express";
import bodyParser from "body-parser";

const app = express();
const router = express.Router();

app.use(bodyParser.json())
app.use((req, res, next) => {
    console.log("Pierwsze pośrednie oprogramowanie!")
    next();
});
// app.use((req, res, next) => {
//     res.send("witaj, świecie! jestem oprogramowaniem pośrednim")
// });
app.use(router);
router.get("/api/v1/users", (req, res, next) => {
    const users = [
        {
            id: 1,
            username: "Tomek",
        },
        {
            id: 2,
            username: "Janek",
        },
        {
            id: 3,
            username: "Lidia",
        },
    ];
});
router.post("c", (req, res, next) => {
    res.send(`Cześć! witaj na trasie C. Mam wiadomośćL ${req.body.message}`)
});
app.use((err, req, res, next) => {
    res.status(500).send(message);
})

app.listen({port: 8000}, () => {
    console.log("Serwer node express został uruchomiony")
})