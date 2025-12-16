import { Route, Routes } from "react-router";

import { useUserContext } from "./contexts/UserContext";



import Home from "./components/home/Home";

import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import { Header } from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Catalog from "./components/catalog/Catalog";
import Details from "./components/details/Details";
import WatchCreate from "./components/create/Create";
import EditWatch from "./components/edit/Edit";
import About from "./components/about/About";



function App() {
  const { user } = useUserContext();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route
          path="/watches/:gameId/details"
          element={<Details user={user} />}
        />
        <Route path="/watches/:gameId/edit" element={<EditWatch />} />
        <Route path="/create" element={<WatchCreate />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
