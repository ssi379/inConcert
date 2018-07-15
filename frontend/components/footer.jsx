import React from 'react';

class Footer extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <footer className="site-footer">
        <ul className="footer-links">
          <li><a href="https://github.com/MatthewDG/inConcert">Github</a></li>
          <li><a href="https://www.linkedin.com/in/matthew-goldman-a6aaa6115/">LinkedIn</a></li>
        </ul>
      </footer>
    )
  }
}

export default Footer;
