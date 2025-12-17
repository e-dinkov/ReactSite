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
import { AuthGuard, GuestGuard } from "./utils/routeGuard";



function App() {
  const { user } = useUserContext();

 return (
   <>
     <Header />

     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/catalog" element={<Catalog />} />
       <Route path="/about" element={<About />} />

       <Route
         path="/watches/:gameId/details"
         element={<Details user={user} />}
       />

     
       <Route element={<GuestGuard />}>
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
       </Route>

      
       <Route element={<AuthGuard />}>
         <Route path="/create" element={<WatchCreate />} />
         <Route path="/watches/:gameId/edit" element={<EditWatch />} />
         <Route path="/logout" element={<Logout />} />
       </Route>
     </Routes>

     <Footer />
   </>
 );
}

export default App;
