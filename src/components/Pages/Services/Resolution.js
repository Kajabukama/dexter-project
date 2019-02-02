import React, { Component } from 'react';

import SectionNews from './SectionNews';
import Contact from './Contact';
import CallAction from './CallAction';
import HeaderPage from './Header';

class Resolution extends Component {
   render() {
      return (
         <React.Fragment>
            <HeaderPage callout="Dispute Resolution" title="Dispute Resolution &amp; Litigation" />
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
                                                      <p>Intellectual Property work requires a deep understanding of the current ways in which IP can be used, and the creativity and imagination to protect our clients’ IP for the future. We advise small and large organizations, both commercial and charitable, as well individuals, on a wide range of issues including:</p>
                                                      <p>Our range of work includes</p>
                                                      <ul className="listBullets">
                                                         <li>Branding and brand protection</li>
                                                         <li>Confidentiality agreements</li>
                                                         <li>Copyright law and copyright licensing</li>
                                                         <li>Patent licensing</li>
                                                         <li>Registration of trademarks and trade names.</li>
                                                         <li>All manner of IP disputes including trade mark infringement, passing off, trade mark challenges and oppositions, copyright infringement</li>
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
export default Resolution;