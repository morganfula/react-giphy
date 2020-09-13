/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "5wWf7H89PisM6An8UAU"
    }
  }

  search = (query) => {
    // TODO: API CALL
  }

  render() {
    const gifs = [
      { id: '5wWf7H89PisM6An8UAU' },
      { id: "5wWf7GW1AzV6pF3MaVW" }
    ]
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
