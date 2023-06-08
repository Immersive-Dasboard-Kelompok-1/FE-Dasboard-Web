
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage"
import Dashboard from "./pages/Dashboard";
import UserList from "./pages/UserList";
import { CookiesProvider } from "react-cookie";
import Mantee from "./pages/Mantee";

function App() {

  return (
    <>
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<UserList />} />
          <Route path="/mantee" element={<Mantee/>}/>
        </Routes>
      </BrowserRouter>
    </CookiesProvider>

    </>

  )
}

export default App
