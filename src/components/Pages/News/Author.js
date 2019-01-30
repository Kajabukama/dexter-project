import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Author extends Component {
   render() {
      return (
         <div className="listBlock topBorder">
            <h3 className="listBlock-title">Author</h3>
            <div className="listBlock-author">
               <p className="listBlock-photo">
                  <Link to="/our-people/katarina-tulway">
                     <img alt="Dexter Attorneys | Kathleen Heycock" src={ author } style={{ width: 150 }} />
                  </Link>
               </p>
               <div className="listBlock-details">
                  <p className="listBlock-contactName">
                     <Link to="/our-people/katarina-tulway"> Katarina M. Tulway, Partner </Link>
                  </p>
                  <ul className="contactList">
                     <li>
                        <Link className="icon-email" to="mailto:kathleen.heycock@farrer.co.uk">Email Katarina</Link>
                     </li>
                     <li>
                        <Link className="icon-tel" to="tel:+255 (0) 688 498 912">+255 (0) 688 498 912</Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      )
   }
}
export default Author;
const author = require('../../../assets/images/content/contact-person.jpg');
