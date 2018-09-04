import React, { Component } from 'react';
import FooterBar from './FooterBar';
import A from '../A';

class Footer extends Component {

  render() {
    return (
            <FooterBar>
                <A href="https://github.com/justinformentin">
                    <i className="fab fa-github fa-fw"></i>
                </A>  
                <A href="https://twitter.com/justinformentin">
                    <i className="fab fa-twitter fa-fw"></i>
                </A>  
                <A href="https://www.linkedin.com/in/justinformentin/">
                    <i className="fab fa-linkedin-in fa-fw"></i>
                </A>  
                <A href="https://justinformentin.com">Justin Formentin
                </A> 
            </FooterBar>
    );
  }
}
export default Footer;