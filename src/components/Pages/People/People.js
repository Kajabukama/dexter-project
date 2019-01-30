import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../Shared/Hero/PageHeader';

class People extends Component {
   render() {
      return (
         <div>
            <PageHeader title="Excellence &amp; expertise"/>
            <div className="section">
               <div className="section-wrap">
                  <div className="grid">
                     <div className="col-12">
                        <ul className="listing listing-results">
                           <li className="listing-col-4">
                              <div className="personBlock">
                                 <figure className="personBlock-img">
                                    <Link to="/person">
                                       <img alt="Dexter Attorneys | Sarah Nikundiwe" src={img} style={styles.imgStyle} />
                                    </Link>
                                 </figure>
                                 <div className="personBlock-details">
                                    <Link to="/person" class="personBlock-link find-tracking-link" data-tracking="" >
                                       <h2 className="personBlock-name">Sarah M. Nikundiwe</h2>
                                       <span className="personBlock-jobtitle">Senior Associate</span>
                                    </Link>
                                    <ul className="personBlock-experties listDash">
                                       <li>Commercial Real Estate</li>
                                    </ul>
                                    <ul className="personBlock-contact contactList">
                                       <li><a className="icon-email" href="mailto:sarah.aggarwal@farrer.co.uk">sarah.nikundiwe@dexter.co.tz</a></li>
                                    </ul>
                                 </div>
                              </div>
                           </li>

                           <li className="listing-col-4">
                              <div className="personBlock">
                                 <figure className="personBlock-img">
                                    <Link to="/person">
                                       <img alt="Dexter Attorneys | Uzma Ahmed" src={ img1 } style={styles.imgStyle} />
                                    </Link>
                                 </figure>
                                 <div className="personBlock-details">
                                    <Link to="/person" className="personBlock-link find-tracking-link" data-tracking="">
                                       <h2 className="personBlock-name">Uzma Ahmed</h2>
                                       <span className="personBlock-jobtitle">Associate</span>
                                    </Link>

                                    <ul className="personBlock-experties listDash">
                                       <li>Corporate</li>
                                    </ul>

                                    <ul className="personBlock-contact contactList">
                                       <li><a className="icon-email" href="mailto:uzma.ahmed@dexter.co.tz">uzma.ahmed@dexter.co.tz</a></li>
                                       <li><a className="icon-linkedin" href="http://www.linkedin.com/in/uzma-ahmed-35a557a5">Connect on LinkedIn</a></li>
                                    </ul>
                                 </div>
                              </div>
                           </li>

                           <li className="listing-col-4">
                              <div className="personBlock">
                                 <figure className="personBlock-img">
                                    <Link to="/person">
                                       <img alt="Dexter Attorneys | Uzma Ahmed" src={ img } style={styles.imgStyle} />
                                    </Link>
                                 </figure>
                                 <div className="personBlock-details">
                                    <Link to="/person" className="personBlock-link find-tracking-link" data-tracking="">
                                       <h2 className="personBlock-name">Uzma Ahmed</h2>
                                       <span className="personBlock-jobtitle">Associate</span>
                                    </Link>

                                    <ul className="personBlock-experties listDash">
                                       <li>Corporate</li>
                                    </ul>

                                    <ul className="personBlock-contact contactList">
                                       <li><a className="icon-email" href="mailto:uzma.ahmed@dexter.co.tz">uzma.ahmed@dexter.co.tz</a></li>
                                       <li><a className="icon-linkedin" href="http://www.linkedin.com/in/uzma-ahmed-35a557a5">Connect on LinkedIn</a></li>
                                    </ul>
                                 </div>
                              </div>
                           </li>

                           <li className="listing-col-4">
                              <div className="personBlock">
                                 <figure className="personBlock-img">
                                    <Link to="/person">
                                       <img alt="Dexter Attorneys | Uzma Ahmed" src={ img1 } style={styles.imgStyle} />
                                    </Link>
                                 </figure>
                                 <div className="personBlock-details">
                                    <Link to="/person" className="personBlock-link find-tracking-link" data-tracking="">
                                       <h2 className="personBlock-name">Uzma Ahmed</h2>
                                       <span className="personBlock-jobtitle">Associate</span>
                                    </Link>

                                    <ul className="personBlock-experties listDash">
                                       <li>Corporate</li>
                                    </ul>

                                    <ul className="personBlock-contact contactList">
                                       <li><a className="icon-email" href="mailto:uzma.ahmed@dexter.co.tz">uzma.ahmed@dexter.co.tz</a></li>
                                       <li><Link className="icon-linkedin" to="http://www.linkedin.com/in/uzma-ahmed-35a557a5">Connect on LinkedIn</Link></li>
                                    </ul>
                                 </div>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
export default People;
const img = require('../../../assets/images/content/woman_office.jpg');
const img1 = require('../../../assets/images/content/man_office.jpg');
const styles = {
   imgStyle: {
      width: 150,
      height: 170,
      backgroundPosition: 'cover'
   }
}