import React, { Component } from 'react';
import PageHero from '../../Shared/Hero/PageHero';
import Timeline from '../../Shared/Timeline/Timeline';
import ContactPerson from '../../Shared/Person/ContactPerson';

class Story extends Component {
   render(){
      return (
         <React.Fragment>
            <PageHero/>
            <div className="section">
               <div className="section-wrap">
                  <div className="grid">
                     <div className="col-8">
                        <div>
                           <div className='section '>
                              <div className='section-wrap'>
                                 <div className='grid '>
                                    <div className="col-12 ">
                                       <div className="wysiwyg" data-title="">
                                          <p className="ParagraphHeading">Dexter Attorneys is synonymous with the highest quality legal advice and service.</p>
                                          <p className="ParagraphHeading">Dexter Attorneys is one of the leading law firms in Tanzania comprised of a team of Lawyers with wide range of legal experties.The Firm is founded by young and talented lawyers and has also developed close relationship with other Law Firms around the East African Region which makes it one of the largest and strong Law firm in the Region.</p>
                                          <p>Our clients present us with complex and varied challenges. Whether that's a complicated family trust issue, a multinational corporate transaction, or an emerging threat to their reputation, they need clear thinkers who can advise on the best solutions, fast thinkers when speed is of the essence and agile thinkers who can produce a fresh approach to get the job done. That's why they choose us.</p>
                                          <p>Our clients value our in-depth knowledge, technical excellence and diversity of disciplines. But what really binds our long-standing relationships with them is our approach: pragmatic, plain speaking and always steadfast in our values, which we hold dear. Values which mean we gain our clients' trust, always strive to do the right thing, and aim for the best results for them.</p>
                                          <p>Superb client service sits at the heart of everything we do. We are modern lawyers with timeless values.</p>
                                       </div>
                                    </div>
                                    <div className="col-full ">
                                       <div className="nc-tabs nc-tabs-always_accordion accordion" data-title="">
                                          <ul className="nc-tabs-tab-container">
                                             <li>
                                                <button className="nc-tabs-accordion-heading" data-tab-id="tab-01">Our Culture.</button>
                                                <div id="tab-01" className="nc-tabs-tab-content">
                                                   <div className="accordion-body wysiwyg">
                                                      <p>Rewards do not just come in the form of financial ones; making and seeing a difference is central to our everyday working lives. Whether it’s a focussed charities strategy or minimising our carbon footprint, we always look to find ways we can contribute even more to our communities.</p>
                                                   </div>
                                                </div>
                                             </li>
                                             <li>
                                                <button className="nc-tabs-accordion-heading" data-tab-id="tab-02">Our Vision &amp; Values</button>
                                                <div id="tab-02" className="nc-tabs-tab-content">
                                                   <div className="accordion-body wysiwyg">
                                                      <p>We are at the ready to explain our strategy and progress, as well as answer your questions. You can expect a team that will keep you up to speed at all times. We listen intently before talking, we investigate thoroughly and advise on the best plan of action; working with you every step of the way for a successful outcome.</p>
                                                   </div>
                                                </div>
                                             </li>
                                             <li>
                                                <button className="nc-tabs-accordion-heading" data-tab-id="tab-03">Diversity.</button>
                                                <div id="tab-03" className="nc-tabs-tab-content">
                                                   <div className="accordion-body wysiwyg">
                                                      <p>Diverse perspectives ultimately make for more rounded thinking and better answers for you.</p>
                                                   </div>
                                                </div>
                                             </li>
                                             <li>
                                                <button className="nc-tabs-accordion-heading" data-tab-id="tab-04">Relationship</button>
                                                <div id="tab-04" className="nc-tabs-tab-content">
                                                   <div className="accordion-body wysiwyg">
                                                      <p>Strong relationships with our communities. It’s what makes us proud.</p>
                                                   </div>
                                                </div>
                                             </li>
                                             <li>
                                                <button className="nc-tabs-accordion-heading" data-tab-id="tab-05">Transparency</button>
                                                <div id="tab-05" className="nc-tabs-tab-content">
                                                   <div className="accordion-body wysiwyg">
                                                      <p>Our aim is to create lasting relationships with our clients; relationships that provide value for them over time.</p>
                                                   </div>
                                                </div>
                                             </li>
                                             <li>
                                                <button className="nc-tabs-accordion-heading" data-tab-id="tab-06">Integrity</button>
                                                <div id="tab-06" className="nc-tabs-tab-content">
                                                   <div className="accordion-body wysiwyg">
                                                      <p>This is about you. Giving you pragmatic, proactive, straightforward advice that helps you achieve your goals. Our fee structures are fair and transparent. And we work with you rather than simply for you.</p>
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
                     </div>
                     <div className="col-4">
                        <ContactPerson/>
                     </div>
                  </div>
               </div>
            </div>
            <Timeline/>
         </React.Fragment>
      )
   }
}
export default Story;