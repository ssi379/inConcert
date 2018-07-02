import React from 'react';
import Carousel from 'nuka-carousel';

class App extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const { videos, count } = this.props;
    return (
      <Carousel
        className="video-carousel"
        slidesToShow={count}
        slidesToScroll={count}
        cellSpacing={1}
        dragging={false}
        renderBottomCenterControls={() => { return null }}>

        { videos }

      </Carousel>
    );
  }
}

export default App;
