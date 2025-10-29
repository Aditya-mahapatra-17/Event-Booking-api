const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json()); 


let bookings = [];
let nextId = 1;


app.get("/api/bookings", (req, res) => {
  res.status(200).json({
    message: "All event bookings fetched successfully",
    total: bookings.length,
    data: bookings
  });
});


app.post("/api/bookings", (req, res) => {
  const { name, email, event } = req.body;

  if (!name || !email || !event) {
    return res.status(400).json({ message: "Name, email, and event are required!" });
  }

  const newBooking = {
    id: nextId++,
    name,
    email,
    event
  };

  bookings.push(newBooking);

  res.status(201).json({
    message: "Booking created successfully",
    data: newBooking
  });
});

app.get("/api/bookings/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const booking = bookings.find(b => b.id === id);

  if (!booking) {
    return res.status(404).json({ message: "Booking not found!" });
  }

  res.status(200).json({
    message: "Booking fetched successfully",
    data: booking
  });
});

app.put("/api/bookings/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const booking = bookings.find(b => b.id === id);

  if (!booking) {
    return res.status(404).json({ message: "Booking not found!" });
  }

  const { name, email, event } = req.body;

  if (name) booking.name = name;
  if (email) booking.email = email;
  if (event) booking.event = event;

  res.status(200).json({
    message: "Booking updated successfully",
    data: booking
  });
});

app.delete("/api/bookings/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = bookings.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Booking not found!" });
  }

  const deletedBooking = bookings.splice(index, 1);

  res.status(200).json({
    message: "Booking cancelled successfully",
    data: deletedBooking[0]
  });
});

app.listen(PORT, () => {
  console.log(` Synergia Event Booking API running on http://localhost:${PORT}`);
});
