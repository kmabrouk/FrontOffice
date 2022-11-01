import "./App.scss";
import { render } from "react-dom";

import "boxicons/css/boxicons.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Blank from "./pages/Blank";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/newDemande" element={<Blank />} />
          <Route path="/myDemandes" element={<Blank />} />
          {/* <Route path="/calendar" element={<Blank />} />
          <Route path="/user" element={<Blank />} />
          <Route path="/order" element={<Blank />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

render(<App />, document.getElementById("root"));
