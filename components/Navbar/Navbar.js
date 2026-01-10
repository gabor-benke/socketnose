import logo from '../../img/Logo/socketnose-logo4-50.png';
import './Navbar.css';

// Creating the navigation bar with the help of Router

const Navbar = () => {

  return (

  <div className="navbar-container">

    <img className="navbar-logo" src={logo} alt="" />
    <nav className="navbar">
      <ul className="navbar-ul">
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/products'>Products</a>
        </li>
        <li>
          <a href='/my-orders'>My Orders</a>
        </li>
        <li>
          <a href='/contacts'>Contacts</a>
        </li>
        <li>
          <a href='/login'>Login</a>
        </li>
      </ul>

    </nav>
  
  </div>  
    
  );

};

export default Navbar;