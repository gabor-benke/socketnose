import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home.js';
import Contacts from './components/Contacts/Contacts.js';
import NoPage from './components/NoPage/NoPage.js';
import ProductList from './components/ProductList/ProductList.js';
import MyOrders from './components/MyOrders/MyOrders.js';
import Navbar from './components/Navbar/Navbar.js';
import SignIn from './components/SignIn/SignIn.js';
import SignUp from './components/SignUp/SignUp.js';

const App = () => {

  return (

    <>
      
      <Navbar />

      {/* Adding React Router to manage routes*/}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/my-orders' element={<MyOrders />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>

    </>
    
  );

};

export default App;