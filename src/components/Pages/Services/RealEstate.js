import React, { Component } from 'react';

import SectionNews from './SectionNews';
import Contact from './Contact';
import CallAction from './CallAction';
import HeaderPage from './Header';

class RealEstate extends Component {
   render() {
      return (
         <React.Fragment>
            <HeaderPage callout="Real Estate" title="Real Estate" />
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
                                                      <p>We provide a comprehensive service which enables us to put together the appropriate package for each individual client. Our services include</p>
                                                      <p>Our range of work includes</p>
                                                      <ul className="listBullets">
                                                         <li>Acquisitions and disposals</li>
                                                         <li>Development and funding</li>
                                                         <li>Investors and occupiers</li>
                                                         <li>Commercial lettings</li>
                                                         <li>Landlord and tenant matters</li>
                                                         <li>Resolution of disputes</li>
                                                         <li>Tax</li>
                                                         <li>Planning</li>
                                                         <li>Construction matters</li>
                                                         <li>Environmental matters</li>
                                                         <li>Banking and security work</li>
                                                         <li>Insolvency and receivership</li>
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
                           {/* <Speciality /> */}
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
export default RealEstate;