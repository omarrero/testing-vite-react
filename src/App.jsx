import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main style={{ display: 'flex', flexDirection: 'column', placeItems: 'center', maxWidth: '400px', margin: '0 auto' }}>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>reload</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`cat image for ${fact}`} />}
    </main>
  )
}

export default App
