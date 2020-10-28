const express = require("express");
const path = require("path");

const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

let allReservations = [
    {
        name: "John",
        phone: "111-111-1111",
        email: "email@gmail.com",
    }
];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/reservations", function(req, res) {
    return res.json(allReservations);
})

app.get("/api/reservations/:reservation", function(req, res) {
    var selected = req.params.reservation;
    console.log(selected);

    for (var i = 0; i < allReservations.length; i++) {
        if (selected === allReservations[i].routeName) {
            return res.json(allReservations[i]);
        }
    }

    return res.json(false);
});

app.post("/api/reservations", function(req, res){
    var data = req.body
    data.routeName = data.name.replace(/\s+/g, "").toLowerCase();

    allReservations.push(data);
    res.json(data);
});

app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
})



