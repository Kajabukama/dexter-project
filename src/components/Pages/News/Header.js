import React, { Component } from 'react';

class Header extends Component {
   render() {
      return (
         <div className="pageHeader pageHeader_news">
            <div className="pageHeader-top">
               <span className="pageHeader-line"></span>
            </div>
            <div className="content-wrap">
               <span className="pageHeader-small">Court Updates</span>
               <h1 className="pageHeader-header">
               Lorem ipsum dolor sit amet - consectetur adipiscing elit. Integer leo est</h1>
               <div className="pageHeader-info">
                  <time datetime="2017-12-20" class="pageHeader-date">30.01.2019</time>
                  <time datetime="P0H7M" class="pageHeader-time">7 min read</time>
               </div>
            </div>
         </div>
      )
   }
}
export default Header;