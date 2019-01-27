import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../Shared/Hero/PageHero';

class NotFound extends Component {
   render() {
      return (
         <React.Fragment>
            <PageHero image={ map }/>

            <div className="section">
               <div className="section-wrap">
                  <div className="grid">
                     <div className="col-8">
                        <div className="wysiwyg contactUsContent">
                           <div>
                              <div className='section '>
                                 <div className='section-wrap'>
                                    <div class='grid '>
                                       <div class="col-12 ">
                                          <div class="wysiwyg" data-title="">
                                             <h1>Sorry Page Not Found</h1>
                                             <p>Sorry the link is broken or the page you are looking for has been moved, deleted or server error. Please try again later.</p>
                                          </div>
                                       </div>
                                       
                                       <div class="col-12 ">
                                          
                                       </div>
                                       <div className="col-12 ">
                                          <div className="wysiwyg" data-title="">
                                             <h2>General Enquiries</h2>
                                             <p>For general enquiries please email: <Link title="enquiries@farrer.co.uk" to="mailto:enquiries@dexter.co.tz">enquiries@dexter.co.tz</Link>. For enquiries about bona vacantia, dissolved companies and intestate estates, please click <Link to="mailto:bvenquiries@dexter.co.tz">here</Link>.</p>
                                             <h2>Press Office</h2>
                                             <p>For media enquiries, please contact&nbsp;Yusuph H. Kajabukama on<br />
                                                <span className="baec5a81-e4d6-4674-97f3-e9220f0136c1" style={styles.fontNormal}>+255 (0)20 3375 7422</span>
                                                <span style={styles.fontNormal}>,&nbsp;</span>
                                                <span className="baec5a81-e4d6-4674-97f3-e9220f0136c1" style={styles.fontNormal}>+255 (0)7584 390 655</span>
                                                <span style={styles.fontNormal}>&nbsp;or email </span>
                                                <a style={styles.fontBold} href="mailto:kajabukama@dexter.co.tz">Press Office</a>
                                                <span style={styles.fontNormal}>.</span>
                                             </p>
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
export default NotFound;
const map = require('../../../assets/images/content/map.PNG')
const styles = {
   fontNormal: {
      fontSize: '16',
   },
   fontBold: {
      fontweight: 'bold',
      fontSize: '16'
   }
}