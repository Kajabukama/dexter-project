import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';

class Submenu extends Component {
   render() {
      return (
         <div>
            <div className="mainContent">
               <div className="siteNav-container">
                  <nav className="siteNav">
                     <div className="siteNavMobileHeader js-trigger-menu-close">
                        <div className="siteNavMobileHeader-logo">Dexter</div>
                        <button className="siteNavMobileHeader-close">Close</button>
                     </div>
                     <ul className="siteNav-content">
                        <li className="styleClients has-children">
                           <Link className="" to="clients-and-sectors/index.html">Clients &amp; Sectors</Link>
                           <div className="siteNav-dropdown dropdown-3columns">
                              <h3 className="siteNav-dropdown-title">
                                 <Link to="">Clients &amp; Sectors</Link>
                              </h3>
                              <Link to="" className="overviewLink">Overview</Link>
                              <ul className="siteNav-list-level2">
                                 <li>
                                    <Link className="" to="">Private Wealth</Link>
                                    <ul className="siteNav-list-level3">
                                       <li><Link className="" to="">Art Collectors</Link></li>
                                       <li><Link className="" to="">Family Offices</Link></li>
                                       <li><Link className="" to="">Individuals &amp; Families</Link></li>
                                       <li><Link className="" to="">Landed Estates</Link></li>
                                       <li><Link className="" to="">Private Investors</Link></li>
                                       <li><Link className="" to="">Senior Executives</Link></li>
                                       <li><Link className="" to="">Trustees</Link></li>
                                    </ul>
                                 </li>
                                 <li>
                                    <Link className="" to="">Businesses</Link>
                                    <ul className="siteNav-list-level3">
                                       <li><Link className="" to="">Entrepreneurs</Link></li>
                                       <li><Link className="" to="">Family Businesses</Link></li>
                                       <li><Link className="" to="">Luxury Brands</Link></li>
                                       <li><Link className="" to="">Media &amp; Publishing</Link></li>
                                       <li><Link className="" to="">Partnerships</Link></li>
                                       <li><Link className="" to="">Private Businesses</Link></li>
                                       <li><Link className="" to="">Property Businesses</Link></li>
                                    </ul>
                                 </li>
                                 <li>
                                    <Link className="" to="">Financial Services</Link>
                                    <ul className="siteNav-list-level3">
                                       <li><Link className="" to="">Asset Managers</Link></li>
                                       <li><Link className="" to="">Alternative Lenders</Link></li>
                                       <li><Link className="" to="">Fintech</Link></li>
                                       <li><Link className="" to="">Private Banks &amp; Wealth Managers</Link></li>
                                    </ul>
                                 </li>
                                 <li>
                                    <Link className="" to="">Not-for-Profit</Link>
                                    <ul className="siteNav-list-level3">
                                       <li><Link className="" to="">Charities</Link></li>
                                       <li><Link className="" to="">Cultural Organisations</Link></li>
                                       <li><Link className="" to="">Faith-based Organisations</Link></li>
                                       <li><Link className="" to="">Livery Companies</Link></li>
                                       <li><Link className="" to="">Sport</Link></li>
                                       <li><Link className="" to="">Professional &amp; Membership Organisations</Link></li>
                                    </ul>
                                 </li>
                                 <li>
                                    <Link className="" to="">Education</Link>
                                    <ul className="siteNav-list-level3">
                                       <li><Link className="" to="">Schools</Link></li>
                                       <li><Link className="" to="">Universities</Link></li>
                                    </ul>
                                 </li>

                              </ul>

                           </div>
                        </li>
                        <li className="styleClients has-children">
                           <Link className="" to="">Legal Services</Link>

                           <div className="siteNav-dropdown ">
                              <h3 className="siteNav-dropdown-title">
                                 <Link to="legal-services/index.html">Legal Services</Link>
                              </h3>
                              <Link to="" className="overviewLink">Overview</Link>
                              <ul className="siteNav-list-level2">
                                 <li><Link className="" to="">Banking &amp; Finance</Link></li>
                                 <li><Link className="" to="">Charity &amp; Community</Link></li>
                                 <li><Link className="" to="">Commercial</Link></li>
                                 <li><Link className="" to="">Contentious Trusts &amp; Estates</Link></li>
                                 <li><Link className="" to="">Corporate</Link></li>
                                 <li><Link className="" to="">Dispute Resolution</Link></li>
                                 <li><Link className="" to="">Employment</Link></li>
                                 <li><Link className="" to="">Family &amp; Divorce</Link></li>
                                 <li><Link className="" to="">Immigration</Link></li>
                                 <li><Link className="" to="">Information &amp; Data</Link></li>
                                 <li><Link className="" to="">Intellectual Property &amp;Technology</Link></li>
                                 <li><Link className="" to="">Private Client Services</Link></li>
                                 <li><Link className="" to="">Property</Link></li>
                                 <li><Link className="" to="">Reputation Management</Link></li>
                                 <li><Link className="" to="">Safeguarding &amp; Child Protection</Link></li>
                                 <li><Link className="" to="">Tax</Link></li>
                              </ul>
                           </div>
                        </li>
                        <li className="styleClients">
                           <Link className="" to="">People</Link>
                        </li>
                        <li className="styleClients">
                           <Link className="" to="">Our Story</Link>
                        </li>
                        <li className="styleClients">
                           <Link className="" to="">News &amp; Insights</Link>
                        </li>
                        <li className="styleClients">
                           <Link className="" to="">International</Link>
                        </li>
                        <li className="styleClients">
                           <Link className="" to="">Join Us</Link>
                        </li>
                        <li className="styleClients">
                           <Link className="" to="">Contact Us</Link>
                        </li>
                        <li className="socialShare">
                           <ul>
                              <li>
                                 <Link to="" className="icon icon-twitter"title="">Twitter</Link>
                              </li>
                              <li>
                                 <Link to="" className="icon icon-linkedin" title="">Linked in</Link>
                              </li>
                           </ul>
                        </li>
                     </ul>
                  </nav>
               </div>
               <div id="skipToContent"></div>
               <Carousel/>
            </div>
         </div>
      )
   }
}
export default Submenu;