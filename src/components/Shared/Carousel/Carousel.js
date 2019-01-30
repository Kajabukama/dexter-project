import React, { Component } from 'react';

class Carousel extends Component {
   render() {
      return (
         <div>
            <div className="heroCarousel-container">
               <h1 className="offscreen">Dexter Attorneys is an independent law firm with a rich history</h1>
               <div className="heroCarousel owl-carousel">
                  <div className="carousel-slot heroCarousel-item" data-dot='' style={ styles.slider_1 }>
                     <div className="heroCarousel-header-wrap">
                        <h2 className="heroCarousel-header">Partipating to Reform Legal Practices in Tanzania
</h2>
                     </div>
                     {/* <div className="heroCarousel-body-wrap">
                        <div className="heroCarousel-body">
                           <span className="heroCarousel-body-line"></span>
                           <p className="heroCarousel-description">
                              We are proud to be part and support various legal reforms in Tanzania</p>
                           <p >
                              <Link to="#uniqueID//https://www.youtube.com/watch?v=m1azLpVj7R8&amp;feature=youtu.be" className="button-dark-blue" data-lity>Watch video</Link>
                           </p>
                        </div>
                     </div> */}
                  </div>
                  <div className="carousel-slot heroCarousel-item theme-blue" data-dot='' style={ styles.slider_2 }>
                     <div className="heroCarousel-header-wrap">
                        <h2 className="heroCarousel-header">2019 - Some things coming our way?</h2>
                     </div>

                     {/* <div className="heroCarousel-body-wrap">
                        <div className="heroCarousel-body">
                           <span className="heroCarousel-body-line"></span>
                           <p className="heroCarousel-description">
                              We look at some of the guidance and developments coming up in 2019.</p>
                           <p><Link to=""  title="" className="button-dark-blue">Read more</Link></p>
                        </div>
                     </div> */}
                  </div>
                  <div className="carousel-slot heroCarousel-item theme-blue" data-dot='' style={ styles.slider_3 }>
                  <div className="heroCarousel-header-wrap">
                     <h2 className="heroCarousel-header">Dexter Attorneys receives accolades across the board</h2>
                  </div>

                  {/* <div className="heroCarousel-body-wrap">
                     <div className="heroCarousel-body">
                        <span className="heroCarousel-body-line"></span>
                        <p className="heroCarousel-description">
                           Two independent commentators have ranked Farrers as one of the country&#39;s top law firms.</p>
                        <p><Link to=""  title="" className="button-dark-blue">Read more</Link></p>
                     </div>
                  </div> */}
            </div>
            <div className="carousel-slot heroCarousel-item"  data-dot='' style={ styles.slider_4 }>
               <div className="heroCarousel-header-wrap">
                  <h2 className="heroCarousel-header">Our international approach</h2>
               </div>

               {/* <div className="heroCarousel-body-wrap">
                  <div className="heroCarousel-body">
                     <span className="heroCarousel-body-line"></span>
                     <p className="heroCarousel-description">
                        We are perfectly positioned to provide the increasingly complex and international solutions our clients require.</p>
                     <p><Link to=""  title="" className="button-dark-blue">Read more</Link></p>
                  </div>
               </div> */}
         </div>
         </div >
            <button className="heroCarousel-button heroCarousel-button_stop">Stop</button>
            <button className="heroCarousel-button heroCarousel-button_play is-active">Play</button>
         </div >
         </div >
      )
   }
}
export default Carousel;

const img01 = require('../../../assets/images/header/header-01.jpg');
const img02 = require('../../../assets/images/header/header-02.jpg');
const img03 = require('../../../assets/images/header/header-03.jpg');
const img04 = require('../../../assets/images/header/header-04.jpg');

const styles = {
   slider_1:{ backgroundImage: 'url('+ img01 +')', },
   slider_2:{ backgroundImage: 'url('+ img02 +')', },
   slider_3:{ backgroundImage: 'url('+ img03 +')', },
   slider_4:{ backgroundImage: 'url('+ img04 +')', },
   slider_5:{ backgroundImage: 'url('+ img04 +')', }
}