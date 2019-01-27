import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
   render() {
      return (
         <div>
         <footer className="footer">
            <div className="content-wrap content-wrap_top">
               <button className="newsletter-header toggle-open">Subscribe to our news and events</button>
            </div>
            <div className="newsletter-container">
               <div className="content-wrap">
                  <p>
                     <iframe src="https://sites-farrer.vuture.net/9/866/landing-pages/farrer-and-co-web-subscription.asp" title="Subscribe to our newsletters"></iframe>
                  </p>
               </div>
            </div>
            <div className="content-wrap content-wrap_bottom">
               <ul className="footer-social">
                  <li><Link to="" className="icon icon-twitter" >Twitter</Link></li>
                  <li><Link to="" className="icon icon-linkedin">Linked in</Link></li>
               </ul>
               <ul className="footer-links">
                  <li><Link to="">Website Terms &amp; Conditions</Link></li>
                  <li><Link to="">Legal and Regulatory</Link></li>
               </ul>
               <div className="footer-copyright">
                  &copy; Dexter Attorneys &copy; 2019. All rights reserved
               </div>
            </div>
         </footer>
         <div className="cookieBanner">
            <p>
               This site uses cookies to help us manage and improve the website and to analyse how visitors use our site. By continuing to use the website, you are agreeing to our use of cookies. For further information about cookies, including about how to change your browser settings to no longer accept cookies, please view our Cookie Policy.
               <Link className="cookieBanner-privacyPolicy" to="legal--regulatory/cookie-policy/index.html">
               Click for more info
               </Link>
            </p>
            <div className="cookieBanner-close">
               <Link to="#">Close</Link>
            </div>
         </div>
         </div>
      )
   }
}
export default Footer;