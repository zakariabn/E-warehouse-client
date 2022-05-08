import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/pages/Footer/Footer";
import Home from "./components/pages/Home/Home";
import AddStock from "./components/pages/Inventory/AddStock/AddStock";
import Inventory from "./components/pages/Inventory/Inventory";
import StockDetails from "./components/StockDetails/StockDetails";

function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route
          path="/stock-details/:id"
          element={<StockDetails></StockDetails>}></Route>
        <Route path="/add-stock" element={<AddStock></AddStock>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
