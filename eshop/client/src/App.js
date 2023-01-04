import {  Navigate, Route, Routes} from 'react-router-dom';
import './admin/css/Back-Css-Inc'
import  './front/assets/css/FrontIncCss';
import Login from './admin/pages/Login';
import Register from './admin/pages/Register';
import Contents from './admin/components/Contents';
import EmailVerify from './admin/EmailVerify/EmailVerify';
import ProtectedRoute from './admin/components/ProtectedRoute';
import NotFoundPage from './admin/components/404-Page';
import ForgotPassword from './admin/pages/ForgotPassword';
import ResetPassword from './admin/pages/ResetPassword';
import CreatePost from './admin/components/posts/Create-Post';
import CommonContents from './admin/components/commonContents';
import ProfileEdit from './admin/components/ProfileEdit';
import Profile from './admin/components/Profile';
import ContentsPosts from './admin/components/Contents-Posts';
import ContentsCategories from './admin/components/Contents-Categories';
import Home from './front/Home';
import CreateProduct from './admin/components/products/CreateProduct';
import Allproducts from './admin/components/products/Allproducts';

function App() {

  return (
   
    <Routes>

   <Route path="/" element={<Home />}></Route>   
      
   <Route path="/login" element={<Login/>}></Route>
   <Route path="/forget-password" element={<ForgotPassword />}></Route>
   <Route path="/register" element={<Register/>}></Route>
   <Route path= "/users/:id/verify/:token" element={<EmailVerify />}/>
   <Route path= "/users/:id/reset/:token" element={<ResetPassword />}/>
   <Route element={<ProtectedRoute />}>
   <Route element={<CommonContents />}>
   
   <Route path="/admin-dashboard" element={<Contents/>} />
   <Route path="/add-new-post" element={<CreatePost/>} />
   <Route path="/admin-dashboard/user-profile" element={<Profile />} />
   <Route path="/admin-dashboard/user-profile-edit" element={<ProfileEdit />} />
   <Route path="/admin-dashboard/all-posts" element={<ContentsPosts />} />
   <Route path="/admin-dashboard/create-post" element={<CreatePost />} />
   <Route path="/admin-dashboard/all-products" element={<Allproducts />} />
   <Route path="/admin-dashboard/create-product" element={<CreateProduct />} />
   <Route path="/admin-dashboard/categories" element={<ContentsCategories />} />
   
   </Route>
   </Route>
   <Route path="*" element={<NotFoundPage/>} />

    </Routes>
   

  );
}

export default App;
