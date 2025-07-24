import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <p>© 2025 Anneke Weather App.</p>
      <p>
        Built by Anneke Viljoen using React. This project is open-sourced on{" "}
        <a
          href="https://github.com/anneke44/anneke-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://annekeweather.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
        .
      </p>
    </footer>
  );
}
