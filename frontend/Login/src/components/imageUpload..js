import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ImageUpload() {
  const [image, setImage] = useState('');
  const [allImage, setAllImage] = useState([]);

  useEffect(() => {
    getImage();
  }, []);

  function convertToBase64(e) {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  }

  function uploadImage() {
    axios
      .post('http://localhost:5000/upload-image', {
        base64: image,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
      });
  }

  function getImage() {
    axios
      .get('http://localhost:5000/get-image')
      .then((response) => {
        const data = response.data;
        console.log(data);
        setAllImage(data.data);
      })
      .catch((error) => {
        console.error('Error getting images:', error);
      });
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner" style={{ width: 'auto' }}>
        Let's Upload Image<br />
        <input accept="image/*" type="file" onChange={convertToBase64} />
        {image !== '' && <img width={100} height={100} src={image} alt="Selected" />}
        <button onClick={uploadImage}>Upload</button>
        <br />
        {allImage.map((data) => {
          return <img key={data._id} width={100} height={100} src={data.image} alt="Uploaded" />;
        })}
      </div>
    </div>
  );
}

export default ImageUpload;
