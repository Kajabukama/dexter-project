import React, { Component } from 'react';

class PageHeader extends Component {
   render() {
      return (
         <div className="pageHeader pageHeader_generic">
            <div className="pageHeader-top">
               <span className="pageHeader-line"></span>
            </div>
            <div className="content-wrap">
               <h1 className="pageHeader-header"> { this.props.title} </h1>
            </div>
         </div>
      )
   }
}
export default PageHeader;