import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
   render() {
      return (
            <header className="header">
               <div className="content-wrap">
                  <div className="header-logo">
                     <Link to="">Dexter</Link>
                  </div>

                  <div className="header-container">
                     <ul className="header-links">
                        <li><Link to="" className="">Private Wealth</Link> </li>
                        <li><Link to="" className="">Businesses </Link> </li>
                        <li><Link to="" className="">Financial Services </Link> </li>
                        <li><Link to="" className="">Not-for-Profit </Link> </li>
                        <li><Link to="" className="">Education </Link> </li>
                     </ul>
                     <ul className="header-util">
                        <li>
                           <Link to="#" className="icon icon-search js-trigger-search"> Search</Link>
                        </li>
                        <li>
                           <Link to="" className="icon icon-twitter" title="">Twitter</Link>
                        </li>
                        <li>
                           <Link to="" className="icon icon-linkedin" title="O window">Linked in</Link>
                        </li>
                     </ul>
                     <div className="searchbox-container">
                        <div className="js-trigger-searchbox-close">
                           <div className="searchbox-logo">Farrer &amp; Co</div>
                           <button className="searchbox-close">Close</button>
                        </div>
                        <form className="searchbox" method="get" action="" >
                           <label className="offscreen" htmlFor="search"> Search site: </label>
                           <input
                              type="search"
                              placeholder="Search Dexter Attorneys ..."
                              id="search"
                              className="searchbox-input"
                              autoComplete="off"
                              required
                              name="q"
                           />
                           <input
                              type="submit"
                              className="searchbox-button"
                              value="Search"
                           />
                        </form>
                     </div>
                  </div>
                  <ul className="header-mobile-nav">
                     <li> <button className="toggle-search js-trigger-search">Search</button> </li>
                     <li> <button className="toggle-menu js-trigger-menu">Menu</button> </li>
                  </ul>
               </div>
            </header>
            )
         }
      }
export default Header;