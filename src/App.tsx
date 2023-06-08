import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import UserList from "./pages/UserList";
import { CookiesProvider } from "react-cookie";
import AddNewMantee from "./pages/AddNewMantee";
import Classlist from "./pages/Classlist";
import AddUser from "./componen/AddUser";

function App() {
  return (
    <>
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user" element={<UserList />} />
            <Route path="/class" element={<Classlist />} />
            {/* <Route path="/add" element={<AddUser/>}/> */}
            <Route path="/add" element={<AddNewMantee />} />
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </>
  );
}

export default App;
