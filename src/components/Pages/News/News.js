import React, { Component } from 'react';
import Header from './Header';
import ShareSocial from '../../Shared/Social/Share';
import Author from './Author';

class News extends Component {
   render() {
      return (
         <React.Fragment>
            <Header />
            <div className="section">
               <div className="section-wrap">
                  <div className="grid">
                     <div className="col-8">
                        <div className="section">
                           <div className="section-wrap">
                              <div className="grid">
                                 <div className="col-12">
                                    <div className="wysiwyg">
                                       <p><img alt="Farrer & Co | Bullying in organisations - time for action: What needs to happen?" src={img1} /></p>
                                    </div>
                                 </div>
                                 <div className="col-12">
                                    <div className="row">
                                       <div className="col-12">
                                          <article>
                                             <div className="wysiwyg">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer leo est, tincidunt eu sapien vel, mattis faucibus elit. Mauris rutrum venenatis nibh et pellentesque. Maecenas vitae pretium quam, in blandit magna. Etiam id congue eros, eu porta nunc. Pellentesque id turpis est. Praesent efficitur ornare faucibus. Suspendisse luctus, neque eget pellentesque finibus, urna lacus tincidunt ex, non efficitur velit nibh id erat. Cras sit amet erat luctus, vehicula arcu id, fringilla neque. </p>

                                                <p>Cras pellentesque dolor eget rutrum tempus. Pellentesque eleifend justo mattis ipsum tincidunt rhoncus at sed tellus. Nulla faucibus elit vulputate nisi sagittis, ac malesuada urna fermentum. Donec iaculis, justo ac iaculis rutrum, nulla odio fermentum ante, nec gravida sapien dolor a libero. Suspendisse ullamcorper ligula elit, id interdum libero placerat ut.</p>
                                                <p><b>Cras pellentesque dolor eget rutrum tempus.</b></p>
                                                <p>Praesent cursus rhoncus interdum. Aliquam sed mauris turpis. Quisque dignissim nisi non ultricies auctor. Suspendisse cursus fringilla lacinia. Curabitur fringilla dui nibh, eget fringilla metus consectetur at. Nam ornare lectus et justo lacinia consectetur. Fusce scelerisque consequat mollis.</p>
                                                <p>Cras imperdiet scelerisque tellus eget posuere. Praesent dictum convallis lectus, eu feugiat tellus vulputate et. Donec nec ultrices est, molestie pharetra justo. Donec in gravida est, imperdiet euismod tortor. Nunc vitae ipsum quis felis bibendum laoreet. Curabitur iaculis nisi sapien. Proin eu nisi vel nisi malesuada ultrices.</p>

                                                <p><b>Take prompt and appropriate action</b></p>
                                                <p>Vivamus aliquam libero tristique quam tempor finibus. Etiam et viverra sapien. Vivamus nec erat consectetur est viverra viverra sit amet id enim. Donec aliquet rutrum magna, in tincidunt arcu sodales et. Vestibulum ut consectetur risus, at tincidunt nisi. Ut placerat leo vitae nulla maximus, et tempor mi sodales. Curabitur viverra ullamcorper mauris, eget gravida ante porttitor lacinia. Sed fermentum et ante ac volutpat. Ut eleifend commodo sapien at scelerisque.</p>
                                                <p><b>Ut eleifend commodo sapien</b></p>
                                                <p>Vestibulum eget placerat risus, ac consectetur quam. Aliquam sed tortor ut sem dapibus venenatis ut et ipsum. Curabitur volutpat, nisl tincidunt malesuada tempus, lacus tortor ullamcorper diam, vitae porttitor nulla ante vitae libero. Morbi id cursus velit. In venenatis nec libero ac convallis. Morbi at odio augue. Maecenas id porta ex. Vestibulum dictum congue nulla. Morbi a est nunc. Suspendisse at mollis orci.</p>
                                             </div>
                                          </article>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-4 sidebar-container">
                        <div className="sideBar">
                              <Author/>
                           <div className="listBlock">
                              <ShareSocial />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </React.Fragment>

      )
   }
}
export default News;
const img1 = require('../../../assets/images/content/blog-01.jpg');