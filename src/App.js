import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar"
import SinglePage from "./pages/SinglePage/SinglePage";
import { Write } from "./pages/write/Write";
import { Settings } from "./pages/setttings/Settings";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/register/Register";


function App() {
  return (
    <>
      <TopBar />
      <Register />
    </>
    
  );
}

export default App;
