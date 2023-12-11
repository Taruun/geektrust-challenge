import Home from "./components/Home/Home";
import "./App.css";

export default function App() {
  const title = "Geektrust - Admin UI Challenge";
  return (
    <div className="container">
      <h2>{title}</h2>
      <Home />
    </div>
  );
}
