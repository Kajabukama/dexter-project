import React, { Component } from 'react';

import SectionNews from './SectionNews';
import Contact from './Contact';
import Speciality from './Speciality';
import CallAction from './CallAction';
import HeaderPage from './Header';

class Corporate extends Component {
   render() {
      return (
         <React.Fragment>
            <HeaderPage callout="Corporate" title="Corporate" />
            <div className="section">
               <div className="section-wrap">
                  <div className="grid">
                     <div className="col-8">
                        <div className="section">
                           <div className="section-wrap">
                              <div className="grid">
                                 <div className="col-12">
                                    <div>
                                       <div className='section '>
                                          <div className='section-wrap'>
                                             <div className='grid '>
                                                <div className="col-12 ">
                                                   <div className="wysiwyg" id="Introduction" data-title="">
                                                      <p>Dexter Attorneys Corporate team has market-leading expertise in complex, high-value transactional and advisory work. We are recognised as being pre-eminent in the private capital sector. Our clients include global high net worth individuals and their businesses, investors, established entrepreneurs, international family offices and trust companies as well as management teams and individual executives.</p>
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer leo est, tincidunt eu sapien vel, mattis faucibus elit. Mauris rutrum venenatis nibh et pellentesque. Maecenas vitae pretium quam, in blandit magna. Etiam id congue eros, eu porta nunc. Pellentesque id turpis est. Praesent efficitur ornare faucibus. Suspendisse luctus, neque eget pellentesque finibus, urna lacus tincidunt ex, non efficitur velit nibh id erat. Cras sit amet erat luctus, vehicula arcu id, fringilla neque.</p>
                                                      <p>Our range of work includes</p>
                                                      <ul className="listBullets">
                                                         <li>Mergers and acquisitions</li>
                                                         <li>FCA and PRA regulated transactions</li>
                                                         <li>Fundraising and investment</li>
                                                         <li>Reorganisation and restructuring</li>
                                                         <li>Joint ventures</li>
                                                         <li>Private equity</li>
                                                         <li>Offshore SPV transactions</li>
                                                         <li>Alternative exits and succession planning, and</li>
                                                         <li>Corporate governance.</li>
                                                      </ul>
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
                     <div className="col-4 sidebar-container">
                        <div className="sideBar">
                           <Contact />
                           <div className="listBlock"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <div className='section section_wide'>
                  <div className='section-wrap'>
                     <div className='grid '>
                        <div className="col-full ">
                           <Speciality />
                        </div>
                     </div>
                  </div>
               </div>
               <CallAction />
            </div>
            <div className="section section_grey">
               <div className="section-wrap">
                  <div className="grid">
                     <div className="col-12">
                        <SectionNews />
                     </div>
                  </div>
               </div>
            </div>
         </React.Fragment>
      )
   }
}
export default Corporate;