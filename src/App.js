import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import RequireAuth from "./components/Auth/RequireAuth/RequireAuth";
import Header from "./components/Header/Header";
import AddStock from "./components/pages/AddStock/AddStock";
import Home from "./components/pages/Home/Home";
import Inventory from "./components/pages/Inventory/Inventory";
import Footer from "./components/Shared/Footer/Footer";
import StockDetails from "./components/StockDetails/StockDetails";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }></Route>

        <Route
          path="/stock-details/:id"
          element={
            <RequireAuth>
              <StockDetails></StockDetails>
            </RequireAuth>
          }></Route>

        <Route
          path="/add-stock"
          element={
            <RequireAuth>
              <AddStock></AddStock>
            </RequireAuth>
          }></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/sign-up" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
