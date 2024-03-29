import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import CreateNewUserPage from "./components/pages/CreateNewUserPage";
import EditUserData from "./components/pages/EditUserData";
import ImageUpload from "./Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/CreateNewUser" element={<CreateNewUserPage />} />
        <Route path="/EditUserData/:id" element={<EditUserData />} />
        <Route path="/Test" element={<ImageUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
