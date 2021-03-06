import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MapGoogle from './Map';

class Contact extends Component {
   render() {
      return (
         <React.Fragment>
            <div style={{ height: '520px'}}>
               <MapGoogle 
                  isMarkerShown
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDOahiwLhjKZ9X4cOACBgWouIH2Ue6mLAc&v=3."
                  loadingElement={<div style={{ height: '100%' }} />}
                  containerElement={<div style={{ height: '100%' }} />}
                  mapElement={<div style={{ height: `100%` }} />}/>
            </div>
            <div className="section">
               <div className="section-wrap">
                  <div className="grid">
                     <div className="col-8">
                        <div className="wysiwyg contactUsContent">
                           <div>
                              <div className='section '>
                                 <div className='section-wrap'>
                                    <div className='grid '>
                                       <div className="col-6 ">
                                          <div className="wysiwyg" data-title="">
                                             <h2>Arush Office</h2>
                                             <p>Burka Avenue Burka Estate, <br />Plot No. 8/3, (Next to Arusha Coffee Lodge), <br />Arusha Tanzania P. O. Box 1976</p>
                                          </div>
                                       </div>
                                       <div className="col-6 ">
                                          <div className="wysiwyg" data-title="">
                                             <h2>Dar es Salaam Office</h2>
                                             <p>Kiko Avenue, <br />Mikocheni A, Plot No. 270,<br />P. O. Box 76949, Dar es Salaam – Tanzania</p>
                                          </div>
                                       </div>
                                       <div className="col-12 ">
                                          <div className="contactBlock">

                                             <div className="contactBlock-intro">
                                                <h2 className="contactBlock-header">Contact details</h2>
                                             </div>

                                             <ul className="contactList">
                                                <li>
                                                   <Link className="icon-tel" to="tel:+255 688 498 912">+255 688 498 912</Link>
                                                </li>
                                                <li>
                                                   <Link className="icon-tel" to="tel:+255 66 209975">+255 66 209975</Link>
                                                </li>
                                                <li>
                                                   <Link className="icon-email" to="mailto:enquiries@dexter.co.tz">enquiries@dexter.co.tz</Link>
                                                </li>
                                                <li>
                                                   <Link className="icon-email" to="mailto:enquiries@dexter.co.tz">info@dexter.co.tz</Link>
                                                </li>
                                                <li>
                                                   <Link className="icon-twitter" to="/" target="_blank">Follow us on Twitter</Link>
                                                </li>
                                                <li>
                                                   <Link className="icon-linkedin" to="/" target="_blank">Connect on LinkedIn</Link>
                                                </li>
                                             </ul>
                                          </div>
                                       </div>
                                       <div className="col-12 ">
                                          <div className="wysiwyg" data-title="">
                                             <h2>General Enquiries</h2>
                                             <p>For general enquiries please email: <Link title="enquiries@dexter.co.tz" to="mailto:enquiries@dexter.co.tz">enquiries@dexter.co.tz</Link>. For enquiries about bona vacantia, dissolved companies and intestate estates, please click <Link to="mailto:enquiries@dexter.co.tz">here</Link>.</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </React.Fragment>
      )
   }
}
export default Contact;
