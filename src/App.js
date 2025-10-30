import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Elham Soldouzi and it is open-sourced on{" "}
          <a
            href="https://github.com/ElhamSoldouzi/react-week-four-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and deployed on{" "}
          <a
            href="https://react-week-four-weather-app.vercel.app/"
            terget="_blank"
            rel="noreferrer"
          >
            Vercel
          </a>
        </footer>
      </div>
    </div>
  );
}
