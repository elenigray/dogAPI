import React, { useState, useEffect } from 'react';

function App() {
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    const fetchDogImages = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random/5');
        const data = await response.json();
        setDogImages(data.message);
      } catch (error) {
        console.error('Error fetching dog images:', error);
      }
    };

    fetchDogImages();
  }, []);

  return (
    <div>
      <h1>Dog Images</h1>
      {dogImages.map((imageUrl) => (
        <img key={imageUrl} src={imageUrl} alt="Dog" />
      ))}
    </div>
  );
}

export default App;