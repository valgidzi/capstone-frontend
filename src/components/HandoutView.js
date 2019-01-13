import React, { Component } from 'react';
import Matching from './Matching';

class HandoutView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      materials: [],
    };
  }

  render() {
    return(
      <div>
        <h3>Handout View</h3>
          <Matching data={this.props.data} />
      </div>
    )
  }
}

export default HandoutView;
