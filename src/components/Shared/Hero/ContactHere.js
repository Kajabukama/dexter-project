import React, { Component } from 'react';
class ContactHero extends Component {
   render(){
      return(
         <div class="hero" style={ style.bg }>
            <div class="hero-header-wrap">
               <h1 class="hero-header">Contact Us</h1>
            </div>
         </div>
      )
   }
}
export default ContactHero;
const imgHeader = require('../../../assets/images/content/map.PNG');
const style = {
   bg: {
      backgroundImage: 'url('+ imgHeader +')',
      width: '1300px',
      height: '520px',
      backgroundSize: 'cover',
   }
}