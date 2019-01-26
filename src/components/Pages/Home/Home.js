import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
   render() {
      return (
         <div>
            <div>
               <div class='section'>
                  <div class='section-wrap'>
                     <div class='grid '>
                        <div class="col-12 ">
                           <div class="wysiwyg" data-title="">
                              <h2><span class="largeIntro"><span class="largeIntro">The balance of experience and innovation, of in-depth knowledge and fresh thinking, of insight and vision makes us who we are. But it does not end there: Our commitment is full focus on client service and matching solutions to our clients' needs.</span></span></h2>
                              <p><a class="button-theme" title="LEARN MORE" href="our-story/index.html">LEARN MORE</a></p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class='section section_grey'>
                  <div class='section-wrap'>
                     <div class='grid '>
                        <div class="col-12 ">
                           <div class="videoBlock" data-title="">
                              <h2 class="videoBlock-header">Partipating to Reform Legal Practices in Tanzania</h2>
                              <div class="videoBlock-body">
                                 <div class="videoBlock-image">
                                    <Link to="https://www.youtube.com/watch?v=dsuE5Mr00Ms&amp;feature=youtu.be?rel=0" data-lity>
                                    <img  src={ img01 } alt="Hix Award 2018"/>
                                    </Link>
                                 </div>
                                 <div class="videoBlock-text wysiwyg">
                                    <p>Responsible for discovering some of the stars of tomorrow, the Hix Award provides a platform for artists from across the country and a range of disciplines. Find out more about our sponsorship and support for emerging artists.</p>
                                    <p><Link to="https://www.youtube.com/watch?v=dsuE5Mr00Ms&amp;feature=youtu.be" target="_blank" class="button-blue">Watch video</Link></p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-12 ">
                           <section class="relatedContainer">
                              <h2 class="relatedContainer-header">News &amp; Insights</h2>
                              <ul class="listing">
                                 <li class="listing-col-4">
                                    <div class="newsBlock">
                                       <div class="newsBlock-head">
                                          <figure class="newsBlock-img">
                                             <Link to="">
                                             <img alt="Farrer & Co | How good are your intentions?" src={ blog01 } />
                                             </Link>
                                          </figure>
                                          <div class="newsBlock-details">
                                             <span class="newsBlock-topStory">Insight</span>
                                             <time class="newsBlock-date" datetime="2019-01-09">09.01.19</time>
                                             <time class="newsBlock-time" datetime="P0H5M">5 min</time>
                                             
                                          </div>
                                       </div>
                                       <div class="newsBlock-footer">
                                          <h3 class="newsBlock-title">
                                             <Link class="find-tracking-link" to="">
                                             How good are your intentions?
                                             </Link>
                                          </h3>
                                          <span class="newsBlock-author">
                                          By
                                          <Link to="">Mark Gauguier</Link>
                                          </span>
                                       </div>
                                    </div>
                                 </li>
                                 <li class="listing-col-4">
                                    <div class="newsBlock">
                                       <div class="newsBlock-head">
                                          <figure class="newsBlock-img">
                                             <Link to="">
                                             <img alt="" src={ blog02 }/>
                                             </Link>
                                          </figure>
                                          <div class="newsBlock-details">
                                             <span class="newsBlock-topStory">Insight</span>
                                             <time class="newsBlock-date" datetime="2019-01-09">09.01.19</time>
                                             <time class="newsBlock-time" datetime="P0H7M">7 min</time>
                                             
                                          </div>
                                       </div>
                                       <div class="newsBlock-footer">
                                          <h3 class="newsBlock-title">
                                             <Link class="find-tracking-link" to="">
                                             Privacy and the right to be forgotten – removing your information from search engine results
                                             </Link>
                                          </h3>
                                          <span class="newsBlock-author">
                                          By
                                          <Link to="">Alicia Mendonca-Richards</Link>
                                          </span>
                                       </div>
                                    </div>
                                 </li>
                                 <li class="listing-col-4">
                                    <div class="newsBlock">
                                       <div class="newsBlock-head">
                                          <figure class="newsBlock-img">
                                             <Link to="">
                                                <img alt="" src={ blog03 } />
                                             </Link>
                                          </figure>
                                          <div class="newsBlock-details">
                                             <span class="newsBlock-topStory">Insight</span>
                                             <time class="newsBlock-date" datetime="2019-01-09">09.01.19</time>
                                             <time class="newsBlock-time" datetime="P0H8M">8 min</time>
                                             
                                          </div>
                                       </div>
                                       <div class="newsBlock-footer">
                                          <h3 class="newsBlock-title">
                                             <Link class="find-tracking-link" to="">
                                             Removing Ag Tags
                                             </Link>
                                          </h3>
                                          <span class="newsBlock-author">
                                          By
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
         </div>
      )
   }
}
export default HomePage;
const img01 = require('../../../assets/images/content/content-01.jpg');
const blog01 = require('../../../assets/images/content/blog-01.jpg');
const blog02 = require('../../../assets/images/content/blog-02.jpg');
const blog03 = require('../../../assets/images/content/blog-03.jpg');