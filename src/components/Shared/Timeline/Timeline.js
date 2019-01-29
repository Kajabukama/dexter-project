import React, { Component } from 'react';

class Timeline extends Component {

   render() {
      return (
         <div>
            <div className='section section_wide '>
               <div className='section-wrap'>
                  <div className='grid'></div>
               </div>
            </div>
            <div className='section section_wide section_grey'>
               <div className='section-wrap'>
                  <div className='grid '>
                     <div className="col-12 ">
                        <div className="timeline">
                           <div className="timeline-intro">
                              <div className="timeline-block">
                                 <h2 className="timeline-intro-header">The Dexter Attorneys Timeline</h2>
                                 <div className="timeline-intro-copy">
                                    <p>Dexter Attorneys down the timeline ...</p>
                                 </div>
                              </div>
                           </div>
                           <div className="timelineCarousel owl-carousel">
                              <div className="carousel-slot timeline-item" data-dot='<button>2018</button>'>
                                 <div className="timeline-block">
                                    <span className="timeline-mobile-data-dot">2018</span>
                                    <div className="section">
                                       <div className="section-wrap">
                                          <div className="grid">
                                             <div className="col-12">
                                                <div className="wysiwyg">
                                                   <h3>2018</h3>
                                                   <p className="ParagraphHeading">Suspendisse eleifend</p>
                                                   <p>Aenean a nisi commodo, tincidunt dui non, vehicula augue. Vivamus sit amet ullamcorper elit. Suspendisse eleifend, magna eget pellentesque elementum, felis ligula luctus eros, sit amet commodo velit purus quis. </p>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              
                              
                              <div className="carousel-slot timeline-item" data-dot='<button>2018</button>'>
                                 <div className="timeline-block">
                                    <span className="timeline-mobile-data-dot">2018</span>
                                    <div className="section">
                                       <div className="section-wrap">
                                          <div className="grid">
                                             <div className="col-12">
                                                <div className="wysiwyg">
                                                   <h3>2018</h3>
                                                   <p className="ParagraphHeading">Vivamus ligula</p>
                                                   <p>Vivamus ligula enim, malesuada nec ultrices nec, dignissim et augue. Vivamus eget ornare enim, mattis malesuada est. Vivamus consectetur sodales viverra.</p>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="carousel-slot timeline-item" data-dot='<button>2019</button>'>
                                 <div className="timeline-block">
                                    <span className="timeline-mobile-data-dot">2019</span>
                                    <div className="section">
                                       <div className="section-wrap">
                                          <div className="grid">
                                             <div className="col-12">
                                                <div className="wysiwyg">
                                                   <h3>2019</h3>
                                                   <p className="ParagraphHeading">Sollicitudin Scelerisque</p>
                                                   <p>Proin aliquam tortor risus, in aliquet velit sodales in. Fusce ornare vitae ante sollicitudin scelerisque. Aenean posuere viverra cursus.</p>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              
                              <div className="carousel-slot timeline-item" data-dot='<button>2019</button>'>
                                 <div className="timeline-block">
                                    <span className="timeline-mobile-data-dot">2019</span>
                                    <div className="section">
                                       <div className="section-wrap">
                                          <div className="grid">
                                             <div className="col-12">
                                                <div className="wysiwyg">
                                                   <h3>2019</h3>
                                                   <p className="ParagraphHeading">Velit Sodales</p>
                                                   <p>Proin aliquam tortor risus, in aliquet velit sodales in. Fusce ornare vitae ante sollicitudin scelerisque. Aenean posuere viverra cursus.</p>
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
               </div>
            </div>
         </div>
      )
   }
}
export default Timeline;