import { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage";
import ProductsDetail from "./Pages/ProductsDetail";

function App() {
  const [users, setUsersData] = useState([]);
  useEffect(() => {
    const getAllUsers = async () => {
      const data = await fetch(
        "https://js-511bb-default-rtdb.firebaseio.com/users/.json"
      );
      const users = await data.json();
      const usersArray = Object.keys(users).map((key) => ({
        key,
        ...users[key],
      }));
      setUsersData(usersArray);
    };
    getAllUsers();
  }, []);
  return (
    <>
      <nav className="border border-gray-500 p-4 flex justify-end">
        <ul className="flex gap-4">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/products">
            <li>Products</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>

      <div className="container mx-auto boder">
        <Routes>
          <Route path="/" element={<h1 className="text-xl">Home</h1>} />
          <Route
            path="/products"
            element={<ProductsPage usersData={users} />}
          />
          <Route path="/product-detail/:id" element={<ProductsDetail />} />
          <Route
            path="/contact"
            element={<h1 className="text-xl">Contact</h1>}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
