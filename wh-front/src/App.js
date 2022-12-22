import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import EmployeeList from "./pages/EmployeeList";
import AddEmployee from "./pages/AddEmployee";
import Homepage from "./pages/Homepage";
// Style
import "./styles/app.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="employees" element={<EmployeeList />} />
          <Route path="employees/add" element={<AddEmployee />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
