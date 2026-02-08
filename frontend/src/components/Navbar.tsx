import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>TaskFlow Lite</div>

      <ul style={styles.menu}>
        <li>
          <a href="#" style={styles.link}>Home</a>
        </li>
        <li>
          <a
            href="http://127.0.0.1:8000/docs"
            target="_blank"
            style={styles.link}
          >
            API Docs
          </a>
        </li>
        <li>
          <a
            href="http://127.0.0.1:8000/health"
            target="_blank"
            style={styles.link}
          >
            Health
          </a>
        </li>
      </ul>
    </nav>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 32px",
    backgroundColor: "#1f2937",
    color: "#ffffff",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "16px",
  },
};

export default Navbar;