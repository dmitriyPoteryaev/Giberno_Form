import React from "react";

import PageError from "@modules/PageError";
import PageLoader from "@modules/PageLoader";
import PageOrder from "@modules/PageOrder";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PageLoader />} />
          <Route path="/loading" element={<PageLoader />} />
          <Route path="/error" element={<PageError />} />
          <Route path="/formpay" element={<PageOrder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
