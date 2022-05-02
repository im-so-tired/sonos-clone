import React from "react";
import { Basket } from "./Pages/Basket";
import { Main } from "./Pages/Main";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NotFound } from "./Pages/NotFound";
import { SinglePage } from "./Pages/SinlePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/shop" element={<Main />}></Route>
          <Route path="/cart" element={<Basket />}></Route>
          <Route path="/" element={<Navigate to="/shop" replace />} />
          <Route path="/shop/:id" element={<SinglePage></SinglePage>}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
