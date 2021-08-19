import { useState, useEffect } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { RiShoppingCartLine, RiAccountCircleLine, RiHome2Line } from 'react-icons/ri';
import { FaBars } from 'react-icons/fa';
import './NavBar.css';
import { useAuth0 } from "@auth0/auth0-react";

export interface Ee {
  "name": "<anystring>",
  "price": "<anystring>",
  "stock": "<anystring>",
  "id": "<anystring>",
  "brand": "<anystring>",
  "photo": "<anystring>",
  "description": "<anystring>",
  "value": "<anystring>",
  "categories": "<anystring>",
  "productId": "<anystring>",
  "units": "<anystring>",
}

export const NavBar = () => {
  const [navbarCollapsed, setNavbarCollapsed] = useState(true);
  const [renderCart, setRenderCart] = useState<any>(0);

  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0<{ name: string, picture?: string }>();  //const {user} = useAuth0()

  let countCart = 0;

  function toggleNavbar() {
    setNavbarCollapsed(!navbarCollapsed);
  };

  useEffect(() => {
    const allCartNoJson:any = localStorage.getItem('products-cart');
    const allCart = JSON.parse(allCartNoJson)
    allCart?.forEach((e:any) => {
      countCart += e.value.value
      setRenderCart(countCart)
    });
  });

  return (
    <header>
      <nav>
        <div className='nav-container'>
          <div className='link-home'>
            <Link to='/home'> <button className='button-home'> HOME <RiHome2Line /> </button></Link>
            <span className='btn-menu' onClick={toggleNavbar}> <FaBars /></span>
          </div>
          <div className={`links-login ${navbarCollapsed && "collapsed"}`}>
            <Link style={{ textDecoration: 'none' }} to='/cart'> CART {renderCart} <RiShoppingCartLine /></Link>
            
            { isAuthenticated ? 
              (<div>
              <Link style={{ textDecoration: 'none' }} to='/logout'> LOGOUT<RiAccountCircleLine /> </Link>
              <Link style={{ textDecoration: 'none' }} to='/adashboard'>ADMIN DASHBOARD</Link>
              <div className='boxUser'><img src={user?.picture} />  {user?.name}</div> 
              </div>) 
              : 
              (<div><Link style={{ textDecoration: 'none' }} to='/register'> REGISTER </Link>  
              <Link style={{ textDecoration: 'none' }} to='/login'> LOGIN <RiAccountCircleLine /> </Link>
              </div>)}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;