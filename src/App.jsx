import { useState } from 'react';
import './App.css'
import QuoteBox from './components/QuoteBox';
import quotes from "./json/quotes.json"
import colors from "./json/colors.json"



function App() {
  
  const randomElementFromArray = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }

  const [quoteRandom, setQuoteRandon] = useState(randomElementFromArray(quotes))
  const [colorRandom, setColorRandom] = useState(randomElementFromArray(colors))
  const handleClick = () => {
    setQuoteRandon(randomElementFromArray(quotes))
    setColorRandom(randomElementFromArray(colors))
  }
  
  return (
    <div style={{backgroundColor: colorRandom}} className="App">
      <QuoteBox 
      quoteRandom={quoteRandom} 
      handleClick={handleClick} 
      colorRandom={colorRandom}
      />
    <a className='link' href="https://github.com/CrisPer1988/Entregable-1-react" target="_blank">"Aqui esta mi codigo"</a>
    </div>
    
  )
}

export default App
