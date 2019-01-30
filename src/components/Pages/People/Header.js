import React, { Component } from 'react';

class PersonHeader extends Component {
   render() {
      return (
         <div className="pageHeader pageHeader_author">
            <div className="pageHeader-top">
               <span className="pageHeader-line"></span>
            </div>
            <div className="content-wrap">
               <h1 className="pageHeader-header"> Katarina M. Tulway</h1>
               <h2 className="pageHeader-subTitle">Senior Associate</h2>
            </div>
         </div>
      )
   }
}
export default PersonHeader;