import { Routes, Route } from "react-router-dom";
import Page404 from "./page404";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
