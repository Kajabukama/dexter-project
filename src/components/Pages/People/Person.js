import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PersonHeader from './Header';

class Person extends Component {
   render() {
      return (
         <React.Fragment>
            <PersonHeader/>
            <div className="col-8">
               <div className="section">
                  <div className="section-wrap">
                     <div className="grid">
                        <div className="col-8">
                           <div className="wysiwyg">
                              <p><img alt="Dexter Attorneys | Katarina M. Tulway, Senior Associate" src={ image_person } /></p>
                           </div>
                        </div>
                        <div className="col-4">
                           <div className="wysiwyg">
                              <div className="listBlock listBlock_person topBorder">
                                 <div className="listBlock-block">
                                    <h3 className="offscreen">Contact</h3>
                                    <ul className="contactList">
                                       <li>
                                          <Link className="icon-email" to="mailto:katarina.tuluway@dexter.co.tz">Email Katarina</Link></li>
                                       <li>
                                          <Link className="icon-tel" to="tel:+255 (0) 688 498 912">+255 (0) 688 498 912</Link></li>
                                       <form action="" method="post">
                                          <li><span className="icon-vcard"><button className="icon-vcard" type="submit">Download vCard</button></span></li>
                                       </form>
                                    </ul>
                                 </div>
                                 <div className="listBlock-block">
                                    <h3 className="listBlock-title">Practice areas</h3>
                                    <ul className="listDash">
                                       <li>Commercial Real Estate</li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-8">
                           <div className="row">
                              <div className="col-12">
                                 <div className="showMore-wrapper">
                                    <div className="wysiwyg">
                                       <p className="Bodycopy intro"><span>Katarina, advises clients on all aspects relating to commercial property including acquisitions, disposals, development and a wide range of landlord and tenant management issues. She acts for private, institutional and commercial clients; but she has particular experience of acting for ultra high net worth individuals, foreign investors, charities and schools. </span></p>
                                    </div>
                                    <div className="wysiwyg showMore-text">
                                       <p className="Bodycopy"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer leo est, tincidunt eu sapien vel, mattis faucibus elit. Mauris rutrum venenatis nibh et pellentesque. Maecenas vitae pretium quam, in blandit magna. Etiam id congue eros, eu porta nunc. Pellentesque id turpis est. Praesent efficitur ornare faucibus. Suspendisse luctus, neque eget pellentesque finibus, urna lacus tincidunt ex, non efficitur velit nibh id erat. Cras sit amet erat luctus, vehicula arcu id, fringilla neque. Cras pellentesque dolor eget rutrum tempus. Pellentesque eleifend justo mattis ipsum tincidunt rhoncus at sed tellus. Nulla faucibus elit vulputate nisi sagittis, ac malesuada urna fermentum. Donec iaculis, justo ac iaculis rutrum, nulla odio fermentum ante, nec gravida sapien dolor a libero. Suspendisse ullamcorper ligula elit, id interdum libero placerat ut.</span></p>
                                       
                                       <p className="Bodycopy"><span style={ styles.fontSize }>Cras imperdiet scelerisque tellus eget posuere. Praesent dictum convallis lectus, eu feugiat tellus vulputate et. Donec nec ultrices est, molestie pharetra justo. Donec in gravida est, imperdiet euismod tortor. Nunc vitae ipsum quis felis bibendum laoreet. Curabitur iaculis nisi sapien. Proin eu nisi vel nisi malesuada ultrices.</span></p>
                                       <p className="Bodycopy"><span style={ styles.fontSize }>Sarah qualified as a solicitor in 2005.</span></p>
                                    </div>
                                    <button className="showMoreToggle showMoreToggle_showMore">Read More</button>
                                    <button className="showMoreToggle showMoreToggle_showLess">Read Less</button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <div className='section '>
                  <div className='section-wrap'>
                     <div className='grid '>
                        <div className="col-full ">
                           <div className="nc-tabs nc-tabs-always_accordion accordion" data-title="">
                              <ul className="nc-tabs-tab-container">
                                 <li>
                                    <button className="nc-tabs-accordion-heading" data-tab-id="tab-efc89bdf-708e-46fe-b384-23c78a8283fe">Work Highlights</button>
                                    <div id="tab-efc89bdf-708e-46fe-b384-23c78a8283fe" className="nc-tabs-tab-content">
                                       <div className="accordion-body wysiwyg">
                                          <p className="Bodycopy">Examples of Sarah's recent work include</p>
                                          <ul>
                                             <li>Acting for an ultra-high net worth investor on the acquisition and management of its £200 million portfolio of prime London property</li>
                                             <li className="Bodycopy">Acting for charity client for over 10 years in the management of its £150 million property portfolio</li>
                                             <li className="Bodycopy">Acting for a foreign ultra-high net worth investor on the redevelopment of a flagship luxury hotel in central London</li>
                                             <li>Acting for the British Library on the development of land to the north of its St Pancras site, and</li>
                                             <li>Acting for a prominent cultural institution on a major capital project.</li>
                                          </ul>
                                          <p>&nbsp;</p>
                                       </div>
                                    </div>
                                 </li>
                              </ul>
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
export default Person;
const image_person = require('../../../assets/images/content/person.jpg');
const styles = {
   fontSize: {
      fontSize: '16px'
   },
   person: {
      width: '570px',
      height: '380px',
      backgroundPosition: 'cover'
   }
}