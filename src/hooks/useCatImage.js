import { useState, useEffect } from 'react';

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState('url');

  useEffect(() => {
    if (!fact) return;

    const threeFirstWord = fact.split(' ', 3).join(' ');
    console.log(threeFirstWord);

    fetch(
      `https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`
    )
      .then((res) => res.json())
      .then((data) => {
        const { url } = data;
        setImageUrl(url);
      });
  }, [fact]);

  return { imageUrl };
}
