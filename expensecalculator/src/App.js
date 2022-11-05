import "./App.css";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import { Routes, Route } from "react-router-dom";
import AddExpense from "./pages/addExpense/addExpense";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddExpense />} />
      </Routes>
      <div className="footer">footer</div>
    </div>
  );
}

export default App;
