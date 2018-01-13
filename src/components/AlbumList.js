import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import Album from './Album';

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }

  componentWillMount() {
    axios({
      method: 'get',
      url: 'https://rallycoding.herokuapp.com/api/music_albums'
    })
    .then((response) => {
      this.setState({ albums: response.data });
    })
    .catch((response) => {
      console.log(response);
    });
  }

  render() {
    const albumList = this.state.albums.map(album => <Album key={album.title} record={album} />);

    return (
      <ScrollView>
        {albumList}
      </ScrollView>
    );
  }
}

export default AlbumList;
