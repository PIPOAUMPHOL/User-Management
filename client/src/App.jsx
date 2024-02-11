import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import CreateNewUserPage from "./components/pages/CreateNewUserPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/CreateNewUser" element={<CreateNewUserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
