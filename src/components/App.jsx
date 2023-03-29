import { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
const API_KEY = '33245282-6e238748bd483492097eba1b8';
export class App extends Component {
  state = {
    images: [],
  };
  onSubmit = inputValue => {
    console.log(inputValue);
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit}></Searchbar>
      </>
    );
  }
}
