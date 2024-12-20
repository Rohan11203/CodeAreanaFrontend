import {
  BrowserRouter,
  Navigate,
  Routes,
  Outlet,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import "./styles/index.css";
import MultiPlayer from "./pages/MultilPlayer";
import WorkInProgressError from "./components/WorkInProgressError";
import { SinglePlayer } from "./pages/SinglePlayer";
import { ReactQuizCard } from "./components/ReactQuiz";
  const PrivateRoutes = () =>{
    const { isAuth } = useSelector(state => state.auth)
    

    return <>{isAuth ? <Outlet /> : <Navigate to='/login' />}</>
  }

  const RestrictedRoutes = () =>{
    const { isAuth } = useSelector(state => state.auth)
    
    return <>{!isAuth ? <Outlet /> : <Navigate to='/dashboard' />}</>
  }
const App = () => {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/multiplayer/clashofCode" element={<MultiPlayer />} />
          <Route path="/singleplayer" element={<SinglePlayer />} />
          <Route path="/singleplayer/react-quiz" element={<ReactQuizCard />}/>
        </Route>

        <Route element={<RestrictedRoutes />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/leaderboard" element={<WorkInProgressError />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
