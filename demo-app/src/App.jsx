import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "././Home";
import Create from "./components/create/Create";
import Read from "./components/read/Read";
import Update from "./components/update/Update";
import Delete from "./components/delete/Delete";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/read/:id" element={<Read />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/delete/:id" element={<Delete />} />
        </Routes>
  );
}

export default App;
