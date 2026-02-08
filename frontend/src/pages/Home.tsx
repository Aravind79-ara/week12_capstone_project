import React from "react";

const Home: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>TaskFlow Lite</h1>

      <p style={styles.subtitle}>
        A simple full-stack capstone project built with FastAPI and React.
      </p>

      <div style={styles.card}>
        <h2>Backend Status</h2>
        <p>✅ API is running</p>
        <p>
          Health Check:{" "}
          <a href="http://127.0.0.1:8000/health" target="_blank">
            /health
          </a>
        </p>
        <p>
          API Docs:{" "}
          <a href="http://127.0.0.1:8000/docs" target="_blank">
            Swagger UI
          </a>
        </p>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "40px",
    textAlign: "center",
    backgroundColor: "#f5f7fa",
    minHeight: "100vh",
  },
  title: {
    fontSize: "42px",
    marginBottom: "10px",
    color: "#1f2937",
  },
  subtitle: {
    fontSize: "18px",
    marginBottom: "30px",
    color: "#4b5563",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "20px",
    maxWidth: "420px",
    margin: "0 auto",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
};

export default Home;