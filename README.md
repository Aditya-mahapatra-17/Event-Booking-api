# Event-Booking-api
# 🎟️ Synergia Event Booking API

A simple RESTful API built with **Node.js** and **Express.js** to manage event bookings for *Synergia*, a technical event.  
This project demonstrates the fundamentals of creating a REST API using in-memory storage (no database).

---

## 📚 Project Overview

This API allows users to:
- View all bookings  
- Register for an event  
- View a specific booking  
- Update participant details  
- Cancel a booking  

All data is stored temporarily in an in-memory array.

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**

---

## 🚀 Getting Started

 1. Clone or create project folder

mkdir synergia-event-api
cd synergia-event-api
2. Initialize the project
npm init -y

3. Install dependencies
npm install express

4. Create a file index.js and paste the server code

(Use the full code provided in the assignment)

5. Start the server
node index.js


The server will start on:

http://localhost:3000

📡 API Endpoints
Method	Endpoint	Description
GET	/api/bookings	Get all event bookings
POST	/api/bookings	Create a new booking
GET	/api/bookings/:id	Get a specific booking by ID
PUT	/api/bookings/:id	Update participant details
DELETE	/api/bookings/:id	Cancel a booking
🧪 Example Requests
➕ Create a New Booking

POST /api/bookings
Body:

{
  "name": "Aditya Mahapatra",
  "email": "aditya@gmail.com",
  "event": "Hackathon"
}

📋 Get All Bookings

GET /api/bookings

🔍 Get a Booking by ID

GET /api/bookings/1

✏️ Update a Booking

PUT /api/bookings/1
Body:

{
  "event": "Tech Talk",
  "email": "aditya.m@gmail.com"
}

❌ Cancel a Booking

DELETE /api/bookings/1

📁 Project Structure
synergia-event-api/
│
├── index.js           # Main server file
├── package.json       # Project metadata and dependencies
└── README.md          # Project documentation

🧩 Modules Covered

Module 1: Node.js Basics

Module 2: Express Fundamentals

Module 3: REST API Concepts

🧑‍💻 Author

Aditya Mahapatra
For Synergia Event Booking API Assignment
