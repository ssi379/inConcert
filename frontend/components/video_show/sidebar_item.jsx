import React from 'react';
import { Link } from 'react-router';

export default class SidebarItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { video } = this.props;
    let linkPath = `/videos/${video.id}`

    return(
      <div className="sidebar-item">

        <Link to={linkPath}>
          <img className="sidebar-item-thumbnail"
            src={video.thumbnail_url}
            width={132}
            height={80} />
        </Link>
      </div>
    )
  }
}
