import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CallAction extends Component {
   render() {
      return (
         <React.Fragment>
            <div className='section'>
               <div className='section-wrap'>
                  <div className='grid '>
                     <div className="col-12 ">
                        <div className="contactBlock">
                           <div className="contactBlock-intro">
                              <h2 className="contactBlock-header">How can we help?</h2>
                              <p>Contact the team about the corporate law services you might need:</p>
                           </div>
                           <ul className="contactList">
                              <li><Link className="icon-tel" to="tel:+255 (0) 688 498 912">+255 (0) 688 498 912</Link></li>
                              <li><Link className="icon-email" to="mailto:enquiries@dexter.co.tz">enquiries@dexter.co.tz</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className='section section_grey'>
               <div className='section-wrap'>
                  <div className='grid '>
                     <div className="col-12 ">
                        <section className="relatedContainer">
                           <h2 className="relatedContainer-header">You may also be interested in</h2>
                           <ul className="listing">
                              <li className="listing-col-4" >
                                 <div className="relatedItems">
                                    <h3 className="relatedItems-title">Legal Services</h3>
                                    <ul className="relatedItems-list listPlain">
                                       <li><Link to="/corporate" title="">Banking &amp; Finance</Link></li>
                                       <li><Link to="/corporate" title="">Insolvency</Link></li>
                                       <li><Link to="/corporate" title="">Commercial</Link></li>
                                    </ul>
                                 </div>
                              </li>
                              <li className="listing-col-4" >
                                 <div className="relatedItems">
                                    <h3 className="relatedItems-title">Clients &amp; Sectors</h3>
                                    <ul className="relatedItems-list listPlain">
                                       <li><Link to="/corporate" title="">Businesses</Link></li>
                                       <li><Link to="/corporate" title="">Financial Services</Link></li>
                                    </ul>
                                 </div>
                              </li>
                              <li className="listing-col-4" ></li>
                           </ul>
                        </section>
                     </div>
                  </div>
               </div>
            </div>
         </React.Fragment>
      )
   }
}
export default CallAction;