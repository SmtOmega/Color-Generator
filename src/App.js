
import { useState } from 'react';
import './App.css';
import Values from 'values.js'
import SingleColor from './SingleColor'

function App() { 
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#2ae4ef').all(10))

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors)
      setError(false)
    } catch (error) {
      setError(true)
      console.log(error)
    }

  }
  return (
    <div className="App">
      <div>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={color} placeholder="#FFFFFF" 
          onChange={(e) => setColor(e.target.value)}
          className={`${error ? 'error': null}`}
          />
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
      <div className="color-container">
        {list.map((item, index)=>{
          return <SingleColor key={index} {...item} index={index} hex={item.hex}/>
        })}
      </div>
    </div>
  );
}

export default App;
