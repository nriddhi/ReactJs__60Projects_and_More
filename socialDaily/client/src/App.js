import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ProtectedRoute from './components/ProtectedRoute';
import EmailVerify from './pages/emailVerify/EmailVerify';
import ForgetPassword from './pages/forgetPassword/ForgetPassword';
import ResetPassword from './pages/resetPassword/ResetPassword';
import Home from './pages/home';
import NCSS from './assets/css/IncludeCss';

function App() {
  return (
    <Routes>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/forget-password" element={<ForgetPassword />}></Route>
    <Route path="/register" element={<Register />}></Route>
    <Route path= "/users/:id/verify/:token" element={<EmailVerify />}/>
    <Route path= "/users/:id/reset/:token" element={<ResetPassword />}/>
    <Route element={<ProtectedRoute />}>
    <Route path="/home" element={<Home />} />
    </Route>
    <Route path="*" element={''} />
 
     </Routes>
  );
}

export default App;
