import { Footer } from "./componentes/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppRoutes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
