const express = require("express");
const path = require("path");

const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const allReservations = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/create-reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/api/reservations", function(req, res){
    var reservation = req.body
    allReservations.push(reservation);

    res.json(reservations);
});

app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT} (https://localhost:/${PORT})`);
})



