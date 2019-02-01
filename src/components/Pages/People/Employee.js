import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Employee extends Component {
   render() {
      return (
         <div className="personBlock">
            <figure className="personBlock-img">
               <Link to="/person">
                  <img alt="Dexter Attorneys" src={ this.props.image } style={styles.imgStyle} />
               </Link>
            </figure>
            <div className="personBlock-details">
               <Link to="/person" class="personBlock-link find-tracking-link" data-tracking="" >
                  <h2 className="personBlock-name">{this.props.name}</h2>
                  <span className="personBlock-jobtitle">{ this.props.title }</span>
               </Link>
               <ul className="personBlock-experties listDash">
                  <li>{ this.props.field }</li>
               </ul>
               <ul className="personBlock-contact contactList">
                  <li>
                     <a className="icon-email" href={this.props.email_link}>{ this.props.email}</a>
                  </li>
                  <li>
                     <a className="icon-linkedin" href={this.props.linkedin_link}>{ this.props.linkedin}</a>
                  </li>
                  <li>
                     <a className="icon-twitter" href={this.props.twitter_link}>{ this.props.twitter}</a>
                  </li>
                  
               </ul>
            </div>
         </div>
      )
   }
}
export default Employee;
const styles = {
   imgStyle: {
      width: 150,
      height: 170,
      backgroundPosition: 'cover'
   }
}