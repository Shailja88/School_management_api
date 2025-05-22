# 🏫 School Management API

A simple Node.js REST API to manage schools using a MySQL database.  
Built with **Express.js**, **mysql2**, and **dotenv**.

---

## ✨ Features

- Add new schools with details (name, address, latitude, longitude)
- List all schools sorted by proximity to a given location

---

## 🔧 Tech Stack

- **Node.js**
- **Express.js**
- **MySQL** (via `mysql2`)
- **dotenv** for managing environment variables

---

## 🚀 Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Shailja88/School_management_api.git
cd School_management_api
```
### 2️⃣ Install Dependencies
npm install
### 3️⃣ Set Up MySQL Database
Create a database named school_db

Run the following SQL to create the schools table:

CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL
);
### 4️⃣ Configure Environment Variables
Create a .env file in the root of your project:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=school_db
PORT=3000
Replace your_mysql_password with your actual MySQL password.

### 🧪 API Endpoints
➕ Add School
URL: /addSchool
Method: POST
Payload:
{
  "name": "ABC School",
  "address": "123 Main Street",
  "latitude": 12.9716,
  "longitude": 77.5946
}
Success Response:
Code: 201 CREATED
Content: Inserted school data


📍 List Schools by Proximity
URL: /listSchools

Method: GET
Query Parameters:
latitude (required)
longitude (required)

Example:
GET /listSchools?latitude=12.9716&longitude=77.5946
Success Response:
Code: 200 OK
Content: List of schools sorted by distance

📦 Testing
Use the included Postman collection:
SchoolManagement.postman_collection.json


☁️ Deployment
Configure a cloud MySQL instance (e.g. PlanetScale, Railway, etc.)

Update .env with production database credentials

Deploy the app on platforms like:
Render
Railway
Heroku
Any VPS/hosting supporting Node.js

📄 License
This project is licensed under the MIT License.
