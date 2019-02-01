import React, { Component } from 'react';

import PageHeader from '../../Shared/Hero/PageHeader';
import Employee from './Employee';

class People extends Component {
   render() {
      return (
         <div>
            <PageHeader title="Excellence &amp; expertise"/>
            <div className="section">
               <div className="section-wrap">
                  <div className="grid">
                     <div className="col-12">
                        <ul className="listing listing-results">
                           <li className="listing-col-4">
                              <Employee 
                                 image={ img1 } 
                                 name="Salimu Mushi" 
                                 title="Managing Partner" 
                                 email="salim@dexter.co.tz" 
                                 email_link="mailto:salim@dexter.co.tz" 
                                 field="Commercial"/> 
                           </li>
                           <li className="listing-col-4">
                              <Employee 
                                 image={ img1 } 
                                 name="Rodgers G. Mlacha" 
                                 title="Associate Partner" 
                                 email="rodgers@dexter.co.tz" 
                                 email_link="mailto:rodgers@dexter.co.tz" 
                                 field="Corporate"/> 
                           </li>
                           <li className="listing-col-4">
                              <Employee 
                                 image={ img1 } 
                                 name="Ngereka Miraji" 
                                 title="Associate Partner" 
                                 email="ngereka@dexter.co.tz" 
                                 email_link="mailto:ngereka@dexter.co.tz" 
                                 field="Commercial"/> 
                           </li>
                           <li className="listing-col-4">
                              <Employee 
                                 image={ img1 } 
                                 name="Hamidu Mushi" 
                                 title="Associate Partner" 
                                 email="hamidu@dexter.co.tz" 
                                 email_link="mailto:hamidu@dexter.co.tz" 
                                 field="Labor and Employment"/> 
                           </li>
                           <li className="listing-col-4">
                              <Employee 
                                 image={ img } 
                                 name="Dinah Manga" 
                                 title="Associate Partner" 
                                 email="dinah@dexter.co.tz" 
                                 email_link="mailto:dinah@dexter.co.tz" 
                                 field="Commercial"/> 
                           </li>
                           <li className="listing-col-4">
                              <Employee 
                                 image={ img } 
                                 name="Bella Karoli" 
                                 title="Associate Partner" 
                                 email="bella@dexter.co.tz" 
                                 email_link="mailto:bella@dexter.co.tz" 
                                 field="Commercial"/> 
                           </li>
                           <li className="listing-col-4">
                              <Employee 
                                 image={ img } 
                                 name="Agnes Dominic" 
                                 title="Associate Partner" 
                                 email="agnes@dexter.co.tz" 
                                 email_link="mailto:agnes@dexter.co.tz" 
                                 field="Commercial"/> 
                           </li>
                           <li className="listing-col-4">
                              <Employee 
                                 image={ img } 
                                 name="Miriam Chepe" 
                                 title="Office Administrator" 
                                 email="mmiriam@dexter.co.tz" 
                                 email_link="mailto:miriam@dexter.co.tz" 
                                 field="Administrator"/> 
                           </li>
                           
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
export default People;
const img = require('../../../assets/images/content/woman_office.jpg');
const img1 = require('../../../assets/images/content/man_office.jpg');
