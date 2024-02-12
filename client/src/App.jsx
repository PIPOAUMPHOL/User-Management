import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import CreateNewUserPage from "./components/pages/CreateNewUserPage";
import EditUserData from "./components/pages/EditUserData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/CreateNewUser" element={<CreateNewUserPage />} />
        <Route path="/EditUserData/:id" element={<EditUserData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
