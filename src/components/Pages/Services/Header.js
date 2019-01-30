import React, { Component } from 'react';

class HeaderPage extends Component {
   render() {
      return (
         <div className="pageHeader pageHeader_generic">
            <div className="pageHeader-top">
               <span className="pageHeader-line"></span>
               <h2 className="pageHeader-tag tag-desktop-only">{ this.props.callout}</h2>
            </div>
            <div className="content-wrap">
               <h2 className="pageHeader-tag tag-mobile-only">{ this.props.title1 }</h2>
               <h1 className="pageHeader-header">{ this.props.title }</h1>
            </div>
         </div>

      )
   }
}
export default HeaderPage;