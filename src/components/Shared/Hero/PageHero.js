import React, { Component } from 'react';
class PageHero extends Component {
   render(){
      return(
         <div className="hero" style={ style.bg }>
            <div className="hero-header-wrap">
               <h1 className="hero-header">Our story</h1>
            </div>
         </div>
      )
   }
}
export default PageHero;
const imgHeader = require('../../../assets/images/header/header-02.jpg');
const style = {
   bg: {
      backgroundImage: 'url('+ imgHeader +')',
      width: '1300px',
      height: '520px',
      backgroundSize: 'cover',
   }
}