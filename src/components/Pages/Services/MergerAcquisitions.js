import React, { Component } from 'react';

import SectionNews from './SectionNews';
import Contact from './Contact';
import CallAction from './CallAction';
import HeaderPage from './Header';

class Acquisition extends Component {
   render() {
      return (
         <React.Fragment>
            <HeaderPage callout="Mergers &amp; Acquisitions" title="Mergers &amp; Acquisitions" />
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
                                                      <p>Dexter has extensive experience of advising local and overseas clients on all aspects of mergers and acquisitions, ranging from complex cross-border acquisitions and disposals to smaller local private company deals. We advise buyers, sellers and financial advisers on both public and private mergers and acquisitions. Our experience includes:</p>
                                                      
                                                      <p>Our range of work includes</p>
                                                      <ul className="listBullets">
                                                         <li>Public company takeover bids and responses</li>
                                                         <li>Private company Acquisitions and Disposals;</li>
                                                         <li>Joint Ventures</li>
                                                         <li>Reorganisations including schemes of arrangement;</li>
                                                         <li>Venture Capital and Private Equity;</li>
                                                         <li>Management Buyouts</li>
                                                         <li>Share Buybacks and Capital Reductions</li>
                                                         
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
export default Acquisition;