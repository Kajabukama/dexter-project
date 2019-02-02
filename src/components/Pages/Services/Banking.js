import React, { Component } from 'react';

import SectionNews from './SectionNews';
import Contact from './Contact';
import CallAction from './CallAction';
import HeaderPage from './Header';

class Banking extends Component {
   render() {
      return (
         <React.Fragment>
            <HeaderPage callout="Banking" title="Banking" />
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
                                                      <p>Our Banking and Finance Team has a wealth of experience in banking & finance transactions. We act for many of the leading banks, financial institutions as well as leading corporate borrowers, providing the full range of banking services from corporate lending to restructuring and recovery. Our experience and insight within the financial services industry means our advice is not only technically expert, but practical, commercial and market relevant. We provide specialist support in areas such as structured and general corporate banking, social finance, acquisition finance, real estate finance and asset based lending transactions.</p>
                                                      
                                                      {/* <p>Our range of work includes</p>
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
                                                      </ul> */}
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
export default Banking;