import React from "react";

import PageOrder from "@modules/PageOrder";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PageOrder />} />
          <Route path="/formpay" element={<PageOrder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
