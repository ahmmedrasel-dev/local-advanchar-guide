import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import About from './Pages/Home/About/About';
import Checkout from './Pages/Checkout/Checkout';
import Login from './Pages/LoginRegister/Login/Login';
import Register from './Pages/LoginRegister/Register/Register';
import Notfound from './Pages/NotFound/Notfound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Common/Header/Header';
import Footer from './Pages/Common/Footer/Footer';
import RequiredAuth from './Pages/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import PasswordReset from './Pages/LoginRegister/PasswordReset/PasswordReset';
import Blogs from './Pages/Home/Blogs/Blogs';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientFeedback from './Pages/Home/ClientFeedback/ClientFeedback';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='services' element={<Services></Services>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/checkout' element={
          <RequiredAuth>
            <Checkout></Checkout>
          </RequiredAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/review' element={<ClientFeedback></ClientFeedback>}></Route>
        <Route path='/reset-password' element={<PasswordReset></PasswordReset>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </>
  );
}

export default App;
