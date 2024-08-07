import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Cart from "../Pages/Cart/Cart";
import Wallet from "../Pages/Wallet/Wallet";
import Inventory from "../Pages/Inventory/Inventory";
import Analytics from "../Pages/Analytics/Analytics";

const AppRouter = () => {
const navigate = useNavigate()

useEffect(() => {
const pathName = window.location.pathname
if(pathName === '/'){
    navigate('/dashboard')
}
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])


  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AppRouter;
