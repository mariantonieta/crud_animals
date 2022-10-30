import { Navbar } from "./stat/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TableAnimals from "./controller/TableAnimals";
import CreateTable from "./controller/CreateTable";
import EditTable from "./controller/EditTable";
function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TableAnimals />} />
          <Route path="/create" element={<CreateTable />} />
          <Route path="/edit/:id" element={<EditTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
