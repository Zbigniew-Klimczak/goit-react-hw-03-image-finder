import { Component } from 'react';
import axios from 'axios';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
const API_KEY = '33245282-6e238748bd483492097eba1b8';
export class App extends Component {
  state = {
    images: [],
    actualInputValue: '',
    actualPage: 1,
  };
  onSubmit = inputValue => {
    this.setState({ actualInputValue: inputValue, actualPage: 1 });
    this.getImages();
  };
  getImages = () => {
    const { actualInputValue, actualPage } = this.state;
    async function getImagesFunc() {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${actualInputValue}&page=${actualPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      return response.data.hits;
    }

    this.setState({ images: getImagesFunc() });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit}></Searchbar>
        <ImageGallery images={this.state.images}></ImageGallery>
      </>
    );
  }
}
