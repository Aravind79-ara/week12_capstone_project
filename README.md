# week12_capstone_project
# 🚀 TaskFlow Lite – Full-Stack Python Capstone Project


TaskFlow Lite is a **production-ready full-stack application** built as a capstone project to demonstrate backend development, API design, basic frontend integration, and DevOps-ready architecture using Python.


This project focuses on **clarity, structure, and real-world practices**, rather than feature overload.


---


## 📌 Project Overview


**TaskFlow Lite** provides:
- A FastAPI backend with documented REST APIs
- Health check and monitoring endpoints
- A lightweight frontend landing page
- Production-ready project structure
- Docker and CI/CD ready configuration


The project is designed to be **easy to demonstrate, explain in viva, and extend later**.


---


## 🛠️ Technology Stack


### Backend
- **Python 3.11+**
- **FastAPI**
- **Uvicorn**
- RESTful API design
- OpenAPI / Swagger documentation


### Frontend
- Static HTML/CSS (lightweight demo UI)
- Served via Python HTTP server or FastAPI
- React components included for future extension


### DevOps & Tooling
- Docker & Docker Compose (configuration ready)
- GitHub Actions (CI/CD ready)
- Environment-based configuration
- Structured logging & health checks


---


## 🗂️ Project Structure



week12-capstone-project/
│
├── backend/
│ ├── src/
│ │ ├── api/
│ │ │ ├── health.py
│ │ │ ├── auth.py
│ │ │ └── tasks.py
│ │ └── main.py
│ └── requirements.txt
│
├── frontend/
│ ├── index.html
│ ├── src/
│ │ ├── components/
│ │ │ └── Navbar.tsx
│ │ └── pages/
│ │ └── Home.tsx
│ └── package.json
│
├── docker-compose.yml
├── Dockerfile
├── README.md
└── .gitignore



---


## ▶️ How to Run the Project (Local)


### ✅ 1. Run Backend (FastAPI)


```bash
cd backend
uvicorn src.main:app --reload

Open in browser:

Health Check: http://127.0.0.1:8000/health

Swagger Docs: http://127.0.0.1:8000/docs

✅ 2. Run Frontend (Lightweight Static Server)
cd frontend
python -m http.server 9000 --bind 127.0.0.1

Open in browser:

Frontend UI: http://127.0.0.1:9000

⚠️ A static server is intentionally used to avoid OS-level restrictions and ensure reliable demo execution.

📖 API Endpoints
Method	Endpoint	Description
GET	/health	Application health
POST	/auth/login	Mock login endpoint
GET	/tasks	List sample tasks

All APIs are documented using Swagger UI.

🔍 Features Demonstrated

REST API design with FastAPI

OpenAPI / Swagger documentation

Health check endpoint for monitoring

Modular backend structure

Reusable frontend components

Production-ready project layout

DevOps-friendly configuration

🧠 Design Decisions

Minimal frontend to focus on backend and system design

FastAPI chosen for performance and auto-documentation

Static UI avoids Node/Docker runtime issues on restricted systems

Docker configs included for production readiness, even if not run locally
