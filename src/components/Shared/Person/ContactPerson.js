import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactPerson extends Component {
   render() {
      return (
         <div className="sideBar">
            <div className="listBlock">
               <p className="listBlock-photo">
                  <Link to="/">
                     <img alt="Dexter Attorneys | Anne J. Kajabukama" src={ imgPerson } style={styles.imgStyle} />
                  </Link>
               </p>
               <div className="listBlock-details">
                  <h3 className="listBlock-title">Key contact</h3>
                  <p className="listBlock-contactName">
                     <Link to="/"> Anne J. Kajabukama, Senior Partner</Link>
                  </p>
                  <ul className="contactList">
                     <li><a className="icon-email" href="mailto:kajabukama@dexter.co.uk">Email Anne Kajabukama</a></li>
                     <li><a className="icon-tel" href="tel:+255 (0)20 3375 7462">+255 (0)20 3375 7462</a></li>
                  </ul>
               </div>
            </div>
         </div>
      )
   }
}
export default ContactPerson;
const imgPerson = require('../../../assets/images/content/contact-person.jpg');
const styles = {
   imgStyle:{
      // width: 150,
      // height: 150,
      backgroundSize: 'cover'
   }
}