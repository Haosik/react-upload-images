import React, { Component } from 'react';
import { Spinner, Images, Buttons } from './components';
import { API_URL } from './config';
import './App.css';

const requiredExtensions = ['image/jpeg', 'image/png'];

class App extends Component {
  state = {
    uploading: false,
    images: []
  };

  onChange = e => {
    const files = Array.from(e.target.files);

    const formData = new FormData();

    let onlyRequiredFormats = true;

    files.forEach((file, ind) => {
      console.log(file);
      const { type } = file;
      if (!requiredExtensions.includes(type)) {
        e.preventDefault();
        onlyRequiredFormats = false;
      }
      formData.append(ind, file);
    });

    if (!onlyRequiredFormats) {
      e.target.value = '';
      e.preventDefault();
      alert('Only jpg/jpeg/png!');
      return false;
    }
    this.setState({ uploading: true });

    fetch(`${API_URL}images-upload`, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(images => {
        this.setState({ images, uploading: false });
      });
  };

  removeImage = id => {
    this.setState({ images: this.state.images.filter(image => image.public_id !== id) });
  };

  render() {
    const { uploading, images } = this.state;

    const content = () => {
      switch (true) {
        case uploading:
          return <Spinner />;
        case images.length > 0:
          return <Images images={images} removeImage={this.removeImage} />;
        default:
          return <Buttons onChange={this.onChange} />;
      }
    };
    return (
      <>
        <div className="buttons">{content()}</div>
      </>
    );
  }
}

export default App;
