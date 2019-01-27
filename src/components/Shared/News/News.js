import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class News extends Component {
   render() {
      return (
         <div>
            <div class="col-12 ">
               <section class="relatedContainer">
                  <h2 class="relatedContainer-header">News &amp; Insights</h2>
                  <ul class="listing">
                     <li class="listing-col-4">
                        <div class="newsBlock">
                           <div class="newsBlock-head">
                              <figure class="newsBlock-img">
                                 <a href="news-and-insights/how-good-are-your-intentions/index.html">
                                    <img alt="Farrer & Co | How good are your intentions?" src="globalassets/supreme-court-uk74ef.jpg?w=150&amp;h=150&amp;scale=both&amp;mode=crop" />
                                 </a>
                              </figure>
                              <div class="newsBlock-details">
                                 <span class="newsBlock-topStory">Insight</span>
                                 <time class="newsBlock-date" datetime="2019-01-09">09.01.19</time>
                                 <time class="newsBlock-time" datetime="P0H5M">5 min</time>

                              </div>
                           </div>
                           <div class="newsBlock-footer">
                              <h3 class="newsBlock-title">
                                 <a class="find-tracking-link" href="news-and-insights/how-good-are-your-intentions/index.html"  >
                                    How good are your intentions?
                                             </a>
                              </h3>
                              <span class="newsBlock-author">
                                 By
                                          <a href="people/mark-gauguier/index.html">Mark Gauguier</a>
                              </span>
                           </div>
                        </div>
                     </li>
                     <li class="listing-col-4">
                        <div class="newsBlock">
                           <div class="newsBlock-head">
                              <figure class="newsBlock-img">
                                 <a href="news-and-insights/privacy-and-the-right-to-be-forgotten--removing-your-information-from-search-engine-results/index.html">
                                    <img alt="Farrer & Co | Privacy and the right to be forgotten – removing your information from search engine results" src="globalassets/man-with-pc74ef.jpg?w=150&amp;h=150&amp;scale=both&amp;mode=crop" />
                                 </a>
                              </figure>
                              <div class="newsBlock-details">
                                 <span class="newsBlock-topStory">Insight</span>
                                 <time class="newsBlock-date" datetime="2019-01-09">09.01.19</time>
                                 <time class="newsBlock-time" datetime="P0H7M">7 min</time>
                              </div>
                           </div>
                           <div class="newsBlock-footer">
                              <h3 class="newsBlock-title">
                                 <a class="find-tracking-link" href="news-and-insights/privacy-and-the-right-to-be-forgotten--removing-your-information-from-search-engine-results/index.html"  >
                                    Privacy and the right to be forgotten – removing your information from search engine results
                                             </a>
                              </h3>
                              <span class="newsBlock-author">
                                 By
                                          <a href="">Alicia Mendonca-Richards</a>
                              </span>
                           </div>
                        </div>
                     </li>
                     <li class="listing-col-4">
                        <div class="newsBlock">
                           <div class="newsBlock-head">
                              <figure class="newsBlock-img">
                                 <a href="news-and-insights/removing-ag-tags/index.html">
                                    <img alt="Farrer & Co | Removing Ag Tags" src="globalassets/farmhouse74ef.jpg?w=150&amp;h=150&amp;scale=both&amp;mode=crop" />
                                 </a>
                              </figure>
                              <div class="newsBlock-details">
                                 <span class="newsBlock-topStory">Insight</span>
                                 <time class="newsBlock-date" datetime="2019-01-09">09.01.19</time>
                                 <time class="newsBlock-time" datetime="P0H8M">8 min</time>

                              </div>
                           </div>
                           <div class="newsBlock-footer">
                              <h3 class="newsBlock-title">
                                 <a class="find-tracking-link" href="">
                                    Removing Ag Tags
                                             </a>
                              </h3>
                              <span class="newsBlock-author">
                                 By
                                          <a href="">Jay Sattin</a>
                              </span>
                           </div>
                        </div>
                     </li>
                  </ul>
               </section>
            </div>
         </div>
      )
   }
}
export default News;