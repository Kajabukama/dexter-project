import React, { Component } from 'react';

class FilterPeople extends Component {
   render() {
      return (
         <form className="formFilter" action="/people/" method="get">
            <div className="formFilter-fieldset-wrapper">
               <fieldset className="formFilter-fieldset">

                  <legend className="formFilter-legend">People</legend>
                  <h2 className="formFilter-header js-triggerButton">Find person</h2>

                  <div className="formFilter-container">

                     <div className="formFilter-field">
                        <label for="formId-4" className="formFilter-label">Find by Surname</label>
                        <select id="formId-4" name="letter" onchange="">
                           <option value="*" selected> A-Z </option>
                           <option value="A" >A</option>
                           <option value="B" >B</option>
                           <option value="C" >C</option>
                           <option value="D" >D</option>
                           <option value="E" >E</option>
                           <option value="F" >F</option>
                           <option value="G" >G</option>
                           <option value="H" >H</option>
                           <option value="I" >I</option>
                           <option value="J" >J</option>
                           <option value="K" >K</option>
                           <option value="L" >L</option>
                           <option value="M" >M</option>
                           <option value="N" >N</option>
                           <option value="O" >O</option>
                           <option value="P" >P</option>
                           <option value="Q" >Q</option>
                           <option value="R" >R</option>
                           <option value="S" >S</option>
                           <option value="T" >T</option>
                           <option value="V" >V</option>
                           <option value="W" >W</option>
                           <option value="Y" >Y</option>
                           <option value="Z" >Z</option>
                        </select>
                     </div>

                     <div class="formFilter-field">
                        <label for="formId-5" className="formFilter-label">Refine by</label>
                        <select id="formId-5" name="service" onchange="this.form.submit();">
                           <option value="Legal Services" >Legal Services</option>
                           <option value=" Charity and Community" >Charity and Community</option>
                           <option value="Banking and Finance" >Banking and Finance</option>
                           <option value="Commercial" >Commercial</option>
                           <option value="Contentious Trusts and Estates" >Contentious Trusts and Estates</option>
                           <option value="Corporate" >Corporate</option>
                           <option value="Dispute Resolution" >Dispute Resolution</option>
                           <option value="Employment" >Employment</option>
                           <option value="Family and Divorce" >Family and Divorce</option>
                           <option value="Firm Management" >Firm Management</option>
                           <option value="Immigration" >Immigration</option>
                           <option value="Information and Data" >Information and Data</option>
                           <option value="Intellectual Property" >Intellectual Property</option>
                           <option value="Private Client Services" >Private Client Services</option>
                           <option value="Property" >Property</option>
                           <option value="Reputation Management" >Reputation Management</option>
                           <option value="Safeguarding" >Safeguarding</option>
                           <option value="Tax" >Tax</option>
                        </select>
                     </div>

                     <p>
                        <button className="button-theme" onclick="$('#formId-4').prop('selectedIndex', 0);$('#formId-5').prop('selectedIndex', 0);">Clear Filter</button>
                     </p>

                     <div class="formFilter-field">
                        <label for="formId-6" className="offscreen">Search by keywords:</label>
                        <input id="formId-6" type="text" placeholder="Search entry" name="q" value="" />
                     </div>

                     <p>
                        <button className="button-theme" onclick="$('#formId-4').prop('selectedIndex', 0);$('#formId-5').prop('selectedIndex', 0);">Search</button>
                     </p>

                  </div>

               </fieldset>
            </div>
         </form>

      )
   }
}
export default FilterPeople;