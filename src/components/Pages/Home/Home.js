import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../../Shared/Carousel/Carousel';

class HomePage extends Component {
   render() {
      return (
         <div>
            <Carousel/>
            <div className='section'>
               <div className='section-wrap'>
                  <div className='grid '>
                     <div className="col-12 ">
                        <div className="wysiwyg" data-title="">
                           <h2><span className="largeIntro"><span class="largeIntro">The balance of experience and innovation, of in-depth knowledge and fresh thinking, of insight and vision makes us who we are. But it does not end there: Our commitment is full focus on client service and matching solutions to our clients' needs.</span></span></h2>
                           <p><Link className="button-theme" title="LEARN MORE" to="/">LEARN MORE</Link></p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className='section section_grey'>
               <div className='section-wrap'>
                  <div className='grid '>
                     <div className="col-12 ">
                        <div className="videoBlock" data-title="">
                           <h2 className="videoBlock-header">Partipating to Reform Legal Practices in Tanzania</h2>
                           <div className="videoBlock-body">
                              <div className="videoBlock-image">
                                 <Link to="https://www.youtube.com/watch?v=m1azLpVj7R8&amp;feature=youtu.be?rel=0" data-lity target="_blank">
                                 <img  src={ img01 } alt="Hix Award 2018"/>
                                 </Link>
                              </div>
                              <div className="videoBlock-text wysiwyg">
                                 <p>Responsible for discovering some of the stars of tomorrow, the Hix Award provides a platform for artists from across the country and a range of disciplines. Find out more about our sponsorship and support for emerging artists.</p>
                                 <p><Link to="https://www.youtube.com/watch?v=dsuE5Mr00Ms&amp;feature=youtu.be" target="_blank" class="button-blue">Watch video</Link></p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-12 ">
                        <section className="relatedContainer">
                           <h2 className="relatedContainer-header">Court Updates</h2>
                           <ul className="listing">
                              <li className="listing-col-4">
                                 <div className="newsBlock">
                                    <div className="newsBlock-head">
                                       <figure className="newsBlock-img">
                                          <Link to="">
                                          <img alt="Farrer & Co | How good are your intentions?" src={ blog01 } />
                                          </Link>
                                       </figure>
                                       <div className="newsBlock-details">
                                          <span className="newsBlock-topStory">Insight</span>
                                          <time className="newsBlock-date" datetime="2019-01-09">09.01.19</time>
                                          <time className="newsBlock-time" datetime="P0H5M">5 min</time>
                                          
                                       </div>
                                    </div>
                                    <div className="newsBlock-footer">
                                       <h3 className="newsBlock-title">
                                          <Link className="find-tracking-link" to="">
                                          How good are your intentions?
                                          </Link>
                                       </h3>
                                       <span className="newsBlock-author">
                                       By
                                       <Link to="">Mark Gauguier</Link>
                                       </span>
                                    </div>
                                 </div>
                              </li>
                              <li className="listing-col-4">
                                 <div className="newsBlock">
                                    <div className="newsBlock-head">
                                       <figure className="newsBlock-img">
                                          <Link to="">
                                          <img alt="" src={ blog02 }/>
                                          </Link>
                                       </figure>
                                       <div className="newsBlock-details">
                                          <span className="newsBlock-topStory">Insight</span>
                                          <time className="newsBlock-date" datetime="2019-01-09">09.01.19</time>
                                          <time className="newsBlock-time" datetime="P0H7M">7 min</time>
                                          
                                       </div>
                                    </div>
                                    <div className="newsBlock-footer">
                                       <h3 className="newsBlock-title">
                                          <Link className="find-tracking-link" to="">
                                          Privacy and the right to be forgotten – removing your information from search engine results
                                          </Link>
                                       </h3>
                                       <span className="newsBlock-author">
                                       By
                                       <Link to="">Alicia Mendonca-Richards</Link>
                                       </span>
                                    </div>
                                 </div>
                              </li>
                              <li className="listing-col-4">
                                 <div className="newsBlock">
                                    <div className="newsBlock-head">
                                       <figure className="newsBlock-img">
                                          <Link to="">
                                             <img alt="" src={ blog03 } />
                                          </Link>
                                       </figure>
                                       <div className="newsBlock-details">
                                          <span className="newsBlock-topStory">Insight</span>
                                          <time className="newsBlock-date" datetime="2019-01-09">09.01.19</time>
                                          <time className="newsBlock-time" datetime="P0H8M">8 min</time>
                                          
                                       </div>
                                    </div>
                                    <div className="newsBlock-footer">
                                       <h3 className="newsBlock-title">
                                          <Link class="find-tracking-link" to="">Removing Ag Tags</Link>
                                       </h3>
                                       <span className="newsBlock-author"> By
                                       <a href="people/jay-sattin/index.html">Jay Sattin</a>
                                       </span>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </section>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
export default HomePage;
const img01 = require('../../../assets/images/content/content-02.jpg');
const blog01 = require('../../../assets/images/content/blog-01.jpg');
const blog02 = require('../../../assets/images/content/blog-02.jpg');
const blog03 = require('../../../assets/images/content/blog-03.jpg');