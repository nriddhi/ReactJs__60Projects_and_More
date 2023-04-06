import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home";
import LoggedInRoutes from "./routes/LoggedInRoutes";
import NotLoggedInRoutes from "./routes/NotLoggedInRoutes";
import Reset from "./pages/reset";
import Register from "./pages/register/Register";
import ForgetPassword from './pages/forgetPassword/ForgetPassword';
import EmailVerify from './pages/emailVerify/EmailVerify';
import ResetPassword from './pages/resetPassword/ResetPassword';
import CreatePostPopup from './components/createPostPopup/index';
import { useSelector } from "react-redux";
import {useGetUserDataQuery} from "./store/Apislice";


function App() {

  const visible = useSelector((state) => state.persistedReducer.appSlice.visible);
  const darkTheme = false;
  const { data, isLoading} = useGetUserDataQuery();

  
  return (
    <>
     <div className={darkTheme? 'dark' : ""}>
      {visible && (
        <CreatePostPopup
          setVisible={visible} user= {data}
        />
      )}
      <Routes>
        <Route element={<LoggedInRoutes />}>
        <Route path="/profile" element={<Profile />} exact />
          <Route path="/" element={<Home />} exact />
        </Route>
        <Route element={<NotLoggedInRoutes />}>
          <Route path="/login" element={<Login />} exact />
        </Route>
        <Route path="/reset" element={<Reset />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />}></Route>
        <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
        <Route path="/users/:id/reset/:token" element={<ResetPassword />} />
      </Routes>
      </div>
      </>
  );
}

export default App;
