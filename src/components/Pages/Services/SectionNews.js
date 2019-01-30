import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SectionNews extends Component {
   render() {
      return (
         <section className="relatedContainer">
            <h2 className="relatedContainer-header">Court Updates</h2>
            <ul className="listing">
               <li className="listing-col-4">
                  <div className="newsBlock">
                     <div className="newsBlock-head">
                        <figure className="newsBlock-img">
                           <Link to="/court-updates">
                              <img alt="Dexter Attorneys | Staying in the game: growing revenues for rights holders" src={ thumb1 } />
                           </Link>
                        </figure>
                        <div className="newsBlock-details">
                           <span className="newsBlock-topStory">Insight</span>
                           <time className="newsBlock-date" dateTime="2018-12-17">17.12.18</time>
                           <time className="newsBlock-time" dateTime="P0H6M">6 min</time>
                        </div>
                     </div>
                     <div className="newsBlock-footer">
                        <h3 className="newsBlock-title">
                           <Link className="find-tracking-link" to="/court-updates">
                           Lorem ipsum dolor sit amet - consectetur adipiscing elit. Integer leo est
                           </Link>
                        </h3>
                        <span className="newsBlock-author">By
                           <Link to="/person">Owen O&#39;Rorke</Link>
                        </span>
                     </div>
                  </div>
               </li>
               <li className="listing-col-4">
                  <div className="newsBlock">
                     <div className="newsBlock-head">
                        <figure className="newsBlock-img">
                           <Link to="/court-updates">
                              <img alt="Dexter Attorneys | Continued Transparency – a register of ultimate owners of overseas companies holding UK property" src={ thumb2 }/>
                           </Link>
                        </figure>
                        <div className="newsBlock-details">
                           <span className="newsBlock-topStory">News</span>
                           <time className="newsBlock-date" dateTime="2018-02-08">08.02.18</time>
                           <time className="newsBlock-time" dateTime="P0H10M">10 min</time>
                        </div>
                     </div>
                     <div className="newsBlock-footer">
                        <h3 className="newsBlock-title">
                           <Link className="find-tracking-link" to="/court-updates">
                           Lorem ipsum dolor sit amet - consectetur adipiscing elit. Integer leo est
                           </Link>
                        </h3>
                        <span className="newsBlock-author">By
                           <Link to="/person">Anthony Turner</Link>
                        </span>
                     </div>
                  </div>
               </li>
               <li className="listing-col-4">
                  <div className="newsBlock">
                     <div className="newsBlock-head">
                        <figure className="newsBlock-img">
                           <Link to="/court-updates">
                              <img alt="Dexter Attorneys | Cross Border Mergers - Use it or Lose It!" src={ thumb3 } />
                           </Link>
                        </figure>
                        <div className="newsBlock-details">
                           <span className="newsBlock-topStory">News</span>
                           <time className="newsBlock-date" dateTime="2017-12-06">06.12.17</time>
                           <time className="newsBlock-time" dateTime="P0H10M">10 min</time>
                        </div>
                     </div>
                     <div className="newsBlock-footer">
                        <h3 className="newsBlock-title">
                           <Link className="find-tracking-link" to="/court-updates"  >
                           Lorem ipsum dolor sit amet - consectetur adipiscing elit. Integer leo est
                           </Link>
                        </h3>
                        <span className="newsBlock-author">By <Link to="/person">Anthony Turner</Link> </span>
                     </div>
                  </div>
               </li>
            </ul>
         </section>
      )
   }
}
export default SectionNews;

const thumb1 = require('../../../assets/images/content/blog-01.jpg');
const thumb2 = require('../../../assets/images/content/blog-02.jpg');
const thumb3 = require('../../../assets/images/content/blog-03.jpg');