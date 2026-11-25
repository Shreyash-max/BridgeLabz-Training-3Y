# 🌐 Assignment 10 – APIs and Endpoints

This folder contains the complete solutions for **Assignment 10 (APIs and Endpoints)** as part of the **BridgeLabz 3-Year Training Program**.

---

## 📋 Instructions Adherence

- ✅ **Separate `db.json` for each question:** Each question resides in its own isolated subfolder containing its own dedicated `db.json`.
- ✅ **At least 5 valid sample records:** Every `db.json` file contains at least 5 valid records.
- ✅ **Different port for each question:** Each question is configured to run on a unique JSON Server port (`3001` through `3006`).
- ✅ **Specific JSON file for all API operations:** All requests (GET, POST, PATCH) strictly interact with their respective question's endpoint.

---

## 🚀 How to Run JSON Server

To run the JSON Server for any question, open a terminal, navigate into that question's folder, and run JSON Server on its assigned port:

```bash
# Question 1 (Port 3001)
cd "javascript-practice/APIs and Endpoints/Q1. Real-Time Live Search (jQuery AJAX)"
npx json-server --watch db.json --port 3001

# Question 2 (Port 3002)
cd "javascript-practice/APIs and Endpoints/Q2. Employee Status Dashboard (XMLHttpRequest + PATCH)"
npx json-server --watch db.json --port 3002

# Question 3 (Port 3003)
cd "javascript-practice/APIs and Endpoints/Q3. Task Manager With Filters (jQuery AJAX + Query Params)"
npx json-server --watch db.json --port 3003

# Question 4 (Port 3004)
cd "javascript-practice/APIs and Endpoints/Q4. Multi-API Dashboard (Fetch + Promise.all)"
npx json-server --watch db.json --port 3004

# Question 5 (Port 3005)
cd "javascript-practice/APIs and Endpoints/Q5. College Timetable Viewer (Fetch + Dynamic Rendering)"
npx json-server --watch db.json --port 3005

# Question 6 (Port 3006)
cd "javascript-practice/APIs and Endpoints/Q6. User Registration With Duplicate Check (Axios + GET + POST)"
npx json-server --watch db.json --port 3006
```

---

## 📁 Questions Overview

| Question | Technology | Endpoint & Port | Key Features |
| :--- | :--- | :--- | :--- |
| **Q1. Real-Time Live Search** | `jQuery AJAX` | `http://localhost:3001/products?q=value` | Live search input, loading spinner, product grid with images, "No products found" state |
| **Q2. Employee Status Dashboard** | `XMLHttpRequest + PATCH` | `http://localhost:3002/employees` | Pure native XHR for GET and PATCH, instant UI status toggle, automatic UI revert on network error |
| **Q3. Task Manager With Filters** | `jQuery AJAX + Query Params` | `http://localhost:3003/tasks` | Filter dropdown by priority/completion using query parameters, PATCH checkbox toggle for completed status |
| **Q4. Multi-API Dashboard** | `Fetch + Promise.all` | `http://localhost:3004/{users, orders, products}` | Simultaneous parallel fetch using `Promise.all()`, animated skeleton loaders, failure warning banner |
| **Q5. College Timetable Viewer** | `Fetch + Dynamic Rendering` | `http://localhost:3005/timetable?day=SelectedDay` | Weekday dropdown, dynamic schedule rendering (Subject, Faculty, Time), "No classes today" message |
| **Q6. User Registration With Duplicate Check** | `Axios (GET + POST)` | `http://localhost:3006/users` | Pre-submission duplicate email check via `Axios GET`, error feedback if duplicate, `Axios POST` submission |
