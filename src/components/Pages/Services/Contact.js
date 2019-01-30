import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contact extends Component {
   render() {
      return (
         <div className="listBlock">
            <p className="listBlock-photo">
               <Link to="/person">
                  <img alt="Dexter Attorneys | Josephine Lekule" src={ contact_thumb } />
               </Link>
            </p>
            <div className="listBlock-details">
               <h3 className="listBlock-title">Key contact</h3>
               <p className="listBlock-contactName">
                  <Link to="/person">Josephine A. Lekule, Partner</Link>
               </p>
               <ul className="contactList">
                  <li><Link className="icon-email" to="mailto:josephine.lekule@dexter.co.tz">Email Josephine</Link></li>
                  <li><Link className="icon-tel" to="tel:+255 (0) 688 498 912">+255 (0) 688 498 912</Link></li>
               </ul>
            </div>
            <form action="/people/" method="GET">
               <div className="search-bar-inner js-search-bar-inner">
                  <input type="hidden" name="service" value="Corporate" />
                  <input type="hidden" name="referrer" value="LegalServices" />
                  <button type="submit" className="button-theme">Meet the team</button>
               </div>
            </form>
         </div>
      )
   }
}
export default Contact;
const contact_thumb = require('../../../assets/images/content/contact-thumb.jpg');