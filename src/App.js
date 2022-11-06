import "./App.scss";
import { render } from "react-dom";

import "boxicons/css/boxicons.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import MyDemandes from "./pages/MyDemandes";
import NewDemande from "./pages/NewDemande";
import ModifyDemande from "./pages/ModifyDemande";
import { StrictMode } from "react";

function App() {
  return (
    <StrictMode>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route path="/newDemande" element={<NewDemande />} />
              <Route path="/myDemandes" element={<MyDemandes />} />
              {/* <Route path="/calendar" element={<Blank />} />
          <Route path="/user" element={<Blank />} />
          <Route path="/order" element={<Blank />} /> */}
            </Route>
            <Route path="/modifyDemande/:id" element={<ModifyDemande  />} />
          </Routes>
        </BrowserRouter>
      </div>
    </StrictMode>
  );
}

render(<App />, document.getElementById("root"));
