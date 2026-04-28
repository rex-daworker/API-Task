**Oghenerobo Odomero Rex**  
Email: rexblazy90@gmail.com


# Internship Application Management API

A fully functional **Node.js + TypeScript + Express** REST API for managing candidates, job applications, interview notes, and summary statistics.  
The project includes a complete **Jest + Supertest** automated test suite and uses **MongoDB + Mongoose** for data persistence.

***

## 📚 Table of Contents

- [Internship Application Management API](#internship-application-management-api)
  - [📚 Table of Contents](#-table-of-contents)
  - [📌 Overview](#-overview)
  - [🚀 Features](#-features)
  - [🛠️ Tech Stack](#️-tech-stack)
    - [Backend](#backend)
    - [Testing](#testing)
    - [Tools](#tools)
  - [📁 Project Structure](#-project-structure)
  - [🔐 Environment Variables](#-environment-variables)
    - [.env (development)](#env-development)
    - [.env.test (testing)](#envtest-testing)
  - [📦 Installation](#-installation)
  - [▶️ Running the Server](#️-running-the-server)
  - [🧪 Running Tests](#-running-tests)
  - [📌 API Endpoints](#-api-endpoints)
    - [Candidates](#candidates)
    - [Applications](#applications)
    - [Interview Notes](#interview-notes)
    - [Summary](#summary)
  - [🧩 Development Steps](#-development-steps)
  - [🧱 Challenges \& Solutions](#-challenges--solutions)
  - [✔️ Final Status](#️-final-status)
  - [📄 License](#-license)

***

## 📌 Overview

This API allows organizations to:

- Register job candidates  
- Track job applications  
- Record interview notes  
- Generate summary analytics  

It is built with clean architecture, modular TypeScript code, and a fully isolated test environment.

***

## 🚀 Features

- Create & list **candidates**
- Create & list **applications**
- Add & retrieve **interview notes**
- Summary analytics:
  - Total candidates
  - Total applications
  - Applications grouped by status
  - Average interview rating
- Full Jest + Supertest test suite
- Separate development & test databases
- Clean TypeScript configuration

***

## 🛠️ Tech Stack

### Backend

- Node.js  
- Express.js  
- TypeScript  
- MongoDB  
- Mongoose  
- Dotenv  

### Testing

- Jest  
- Supertest  
- ts-jest  
- @types/jest  

### Tools

- Visual Studio Code  
- Thunder Client  
- Git & GitHub  
- MongoDB Community Server  
- MongoDB Shell (mongosh)

***

## 📁 Project Structure

```txt
src/
  app.ts
  server.ts
  config/
    db.ts
  controllers/
  routes/
  models/
  middleware/
  utils/
  tests/
```

***

## 🔐 Environment Variables

### .env (development)

```env
MONGO_URI=mongodb://127.0.0.1:27017/internship_db
PORT=3000
```

### .env.test (testing)

```env
MONGO_URI=mongodb://127.0.0.1:27017/internship_test_db
PORT=3001
```

A separate test database ensures test data does not pollute real data.

***

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/rex-daworker/API-Task
cd API-Task
```

Install dependencies:

```bash
npm install
```

***

## ▶️ Running the Server

Ensure MongoDB is running:

```bash
mongosh
```

Start the development server:

```bash
npm run dev
```

The API will be available at:  
http://localhost:3000

***

## 🧪 Running Tests

Stop the dev server (if running):

```bash
CTRL + C
```

Ensure MongoDB is running:

```bash
mongosh
```

Run the test suite:

```bash
npm test
```

Expected output:

```txt
Test Suites: 4 passed, 4 total
Tests:       10 passed, 10 total
```

***

## 📌 API Endpoints

### Candidates

- POST `/api/candidates` — Create candidate  
- GET `/api/candidates` — List candidates  

### Applications

- POST `/api/applications` — Create application  
- GET `/api/applications` — List applications  

### Interview Notes

- POST `/api/applications/:id/notes` — Add interview note  
- GET `/api/applications/:id/notes` — List interview notes  

### Summary

- GET `/api/summary` — Summary statistics  

***

## 🧩 Development Steps

- Initialized Node.js + TypeScript project  
- Set up Express server and MongoDB connection  
- Implemented models, controllers, and routes  
- Created `.env` and configured environment variables  
- Tested endpoints manually using Thunder Client  
- Installed Jest + Supertest and configured `jest.config.cjs`  
- Added `.env.test` for isolated test database  
- Fixed TypeScript Jest type issues via `tsconfig.json`  
- Wrote full test suites for all endpoints  
- Successfully ran all tests (10/10 passed)  

***

## 🧱 Challenges & Solutions

1. Thunder Client returning 404  
   Cause: Missing `/api` prefix  
   Fix: Use full route paths like `/api/candidates`  

2. MongoDB ObjectId casting errors  
   Cause: Using placeholder `"candidate_id_here"`  
   Fix: Create a real candidate first and use its `_id`  

3. Jest failing: “Cannot find name 'test'”  
   Cause: Missing Jest type definitions  
   Fix: Install `@types/jest` and update `tsconfig.json`  

4. Empty test files  
   Fix: Added proper `describe` and `test` blocks with full logic  

***

## ✔️ Final Status

- API fully functional  
- All endpoints tested manually  
- All Jest tests passing  
- Clean project structure  
- Ready for academic or professional submission  

***

## 📄 License

ISC
