import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShareSocial extends Component {
   render() {
      return (
         <div class="listBlock-block">
            <h3 class="listBlock-title">Share on</h3>
            <ul class="shareEvent">
               <li><Link to="/" class="icon icon-twitter" title="Share on Twitter">Twitter</Link></li>
               <li><Link to="/" class="icon icon-linkedin" title="Share on Linked in">Linked in</Link></li>
               <li><Link to="" class="icon icon-facebook" title="Share on Facebook" >Facebook</Link></li>
               <li><Link to="" class="icon icon-email" title="Share via Email">Email</Link> </li>
            </ul>
         </div>
      )
   }
}
export default ShareSocial;