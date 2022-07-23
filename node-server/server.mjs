import http from "http";

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.end("Witaj, świecie!");
    } else if (req.url === "/a") {
        res.end("Witaj na trasie A!");
    } else if (req.url === "/b") {
        res.end("Witaj na trasie B!");
    } else {
        res.end("Do zobaczenia!");
    }

});
const port = 8000;
server.listen(port, () => {
    console.log(`Serwer został uruchomiony na porcie ${port}`);
});

