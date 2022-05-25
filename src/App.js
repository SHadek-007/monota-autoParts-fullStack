import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import PurchageDetails from './Pages/Purchage/PurchageDetails';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import NotFound from './Pages/Shared/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Payment from './Pages/Dashboard/Payment';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import RequirAdmin from './Pages/Login/RequirAdmin';
import MyProfiles from './Pages/MyProfiles';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/myProfile' element={<MyProfiles></MyProfiles>}></Route>
        <Route path='/purchage/:productId' element={<RequireAuth><PurchageDetails></PurchageDetails></RequireAuth>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='manageOrder' element={<RequirAdmin><ManageAllOrders></ManageAllOrders></RequirAdmin>}></Route>
          <Route path='users' element={<RequirAdmin><MakeAdmin></MakeAdmin></RequirAdmin>}></Route>
          <Route path='addProduct' element={<RequirAdmin><AddProduct></AddProduct></RequirAdmin>}></Route>
          <Route path='manageProducts' element={<RequirAdmin><ManageProducts></ManageProducts></RequirAdmin>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
