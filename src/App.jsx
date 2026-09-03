import { useState, useEffect } from "react"
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

function App() {
  const [fact, setFact] = useState('initial test data')
  const [imageUrl, setImageUrl] = useState('url')

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data;
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return;

    const threeFirstWord = fact.split(' ', 3).join(' ');
    console.log(threeFirstWord)

    fetch(`https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`)
      .then(res => res.json())
      .then(data => {
        const { url } = data;
        setImageUrl(url);
      })
  }, [fact])

  return (
    <main style={{ display: 'flex', flexDirection: 'column', placeItems: 'center', maxWidth: '400px', margin: '0 auto' }}>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`cat image for ${fact}`} />}
    </main>
  )
}

export default App
