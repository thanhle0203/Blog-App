import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar"
import SinglePage from "./pages/SinglePage/SinglePage";
import { Write } from "./pages/write/Write";
import { Settings } from "./pages/setttings/Settings";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  const user = false;

  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={user ? <Home/> : <Register />} />
        <Route exact path="/login" element={user ? <Home/> : <Login />} />
        <Route exact path="/write" element={user ? <Write/> : <Register />} />
        <Route exact path="/settings" element={user ? <Settings/> : <Register />} />
        <Route exact path="/post/:postId" element={<SinglePage />} />
      </Routes>
     
    </Router>
    
  );
}

export default App;
