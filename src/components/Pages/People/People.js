import React, { Component } from 'react';
import PageHeader from '../../Shared/Hero/PageHeader';
import FilterPeople from './Filter';

class People extends Component {
   render() {
      return (
         <div>
            <FilterPeople />
            <PageHeader title="Excellence &amp; expertise"/>
            <div className="section">
               <div className="section-wrap">
                  <div className="grid">
                     <div className="col-12">
                        <ul className="listing listing-results">
                           <li className="listing-col-4">
                              <div className="personBlock">
                                 <figure className="personBlock-img">
                                    <a href="/people/sarah-aggarwal/">
                                       <img alt="Dexter Attorneys | Sarah Nikundiwe" src={img} style={styles.imgStyle} />
                                    </a>
                                 </figure>
                                 <div className="personBlock-details">
                                    <a href="/people/james-kajabukama/" class="personBlock-link find-tracking-link" data-tracking="" >
                                       <h2 className="personBlock-name">Sarah M. Nikundiwe</h2>
                                       <span className="personBlock-jobtitle">Senior Associate</span>
                                    </a>
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
                                    <a href="/people/Uzma-Ahmed/">
                                       <img alt="Dexter Attorneys | Uzma Ahmed" src={ img1 } style={styles.imgStyle} />
                                    </a>
                                 </figure>
                                 <div className="personBlock-details">
                                    <a href="/people/Uzma-Ahmed/" className="personBlock-link find-tracking-link" data-tracking="">
                                       <h2 className="personBlock-name">Uzma Ahmed</h2>
                                       <span className="personBlock-jobtitle">Associate</span>
                                    </a>

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
const img = require('../../../assets/images/content/contact-person.jpg');
const img1 = require('../../../assets/images/content/bamoah_hs20crop.jpg');
const styles = {
   imgStyle: {
      width: 150,
      height: 170,
      backgroundPosition: 'cover'
   }
}