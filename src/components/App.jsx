import { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
const API_KEY = '33245282-6e238748bd483492097eba1b8';
export class App extends Component {
  state = {
    images: [],
    actualInputValue: 'bear',
    actualPage: 1,
  };
  onSubmit = inputValue => {
    this.setState({ actualInputValue: inputValue, actualPage: 1 });
    this.fetchImages(inputValue, 1);
  };
  fetchImages = async (actualInputValue, actualPage) => {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${actualInputValue}&page=${actualPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    this.setState({ images: response.data.hits });
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
