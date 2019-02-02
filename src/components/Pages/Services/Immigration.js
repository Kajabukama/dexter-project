import React, { Component } from 'react';

import SectionNews from './SectionNews';
import Contact from './Contact';
import CallAction from './CallAction';
import HeaderPage from './Header';

class Immigration extends Component {
   render() {
      return (
         <React.Fragment>
            <HeaderPage callout="Labour &amp; Immigration" title="Labour &amp; Immigration Law" />
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
                                                      <p>Our philosophy around labour is to focus on doing the right thing, and not just focus on the law. This approach assists clients to have less labor disputes and have a higher success rate, should cases be taken to the Labour Tribunals or the High Court. Services include:</p>
                                                      
                                                      <p>Our range of work includes</p>
                                                      <ul className="listBullets">
                                                         <li>Preparation, Audit and Reviews of employment policies and contracts</li>
                                                         <li>Developing personnel policies and employer’s handbooks</li>
                                                         <li>Providing counsel on complex HR structuring to maximize financial objectives and minimize exposure to litigation – including layoff strategies, plant shutdowns, executive compensation, non-competition, confidentiality and similar agreements and issues surrounding the enforceability and advisability of collective bargaining agreements with individual employees</li>
                                                         <li>compliance with all labor and employment laws and regulations</li>
                                                         <li>training of HR departments/officers on compliance and policy drafting</li>
                                                         <li>engagement of expatriates in their enterprises</li>
                                                         <li>advise on immigration law, including procurement of work residence permits, visas and other passes.</li>
                                                         <li>monitoring legal development and providing clients with ad hoc advice on compliance matters and regular updates to a Compliance Matrix we prepare for each client.</li>
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
export default Immigration;