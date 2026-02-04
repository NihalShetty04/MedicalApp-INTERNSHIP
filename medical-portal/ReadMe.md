# Secure Patient Medical Record Portal

A patient-centric web application to securely manage and share medical records across hospitals.

## Features
- Patient login/register
- Encrypted medical record storage
- Medical history timeline
- Consent-based access
- Emergency time-bound access
- JSON / XML / CSV support

## Tech Stack
Frontend: React  
Backend: Node.js + Express  
Database: MongoDB  

## Setup

### Backend
cd server  
npm install  
npx nodemon index.js  

### Frontend
cd client  
npm install  
npm run dev  

## How it works
- Records stored encrypted (base64 simulation)
- Patients control access
- Hospitals require consent
- Emergency access expires automatically

## Project Structure
server/ → backend API  
client/ → frontend UI  

## Author
Your Name
