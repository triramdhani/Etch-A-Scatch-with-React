import React, {useState} from 'react'
import Button from './Button'
import "./Main.css"
import boxes from './boxesData'
import Boxes from './Boxes'

export default function Main() {
  
  const [arrayBoxes, setArrayBoxes] = useState(boxes)

  function handleToggle(id){
    setArrayBoxes(prevState => {
      return prevState.map(boxes => {
       return boxes.id === id ? { ...boxes, isOn: !boxes.isOn } : boxes
      })
    })
  }

  const [penColor, setPenColor] = useState('#000000')
  function penColorHandle(event) {
    const colorValue = event.target.value
    setPenColor(colorValue)
  }

  const boxesElement = arrayBoxes.map(item => {
    return (
      <Boxes
        key={item.id}
        ison={item.isOn}
        id={item.id}
        handleClick={handleToggle}
        penColor={penColor}
      />
    )
  })

  const [sizeStatus , setSizeStatus] = useState(true)
  const showSize = () =>{
    setSizeStatus(prevState => {
      return !prevState
    })
  }
  
  const [gridSize, setGridSize] = useState(1)
  function changeValue(event) {
    let gridSize = event.target.value
    setGridSize(gridSize)
    const boxLength = event.target.value;
    setArrayBoxes(prevState => {
      const newArrayBoxes=[]
      for(let i = 0; i <= boxLength * boxLength; i++){
        newArrayBoxes.push({id: [i], isOn: false})
      }
      return newArrayBoxes
    })
  }
  function clearFunc() {
    setArrayBoxes(prevState => {
      return prevState.map(box => {
        return {...box , isOn : false}
      })
    })
  }
  const css = {
    display: "grid",
    gridTemplateRows: `repeat(${gridSize}, ${gridSize}fr)`,
    gridTemplateColumns: `repeat(${gridSize}, ${gridSize}fr)`,
  }

  return (
    <>
    <div className='main'>
      <div className="parameter">
        <Button
          buttonFunc={showSize}
          buttonName='Size'
          />
        <Button
          buttonFunc={clearFunc}
          buttonName='Clear'
          />
        <input
          type='color'
          value={penColor}
          onChange={penColorHandle}
          />
      
        {
        sizeStatus &&
        <input
        type="range"
        defaultValue={gridSize}
          max="30"
          onChange={changeValue}
          
          />
        }
      </div>

      <div
        className='box--wraper'
        style={css}
      >
          {boxesElement}
      </div>
    </div>
      <footer>
        Created by : Tri Ramdhani
      </footer>
  </>

  )
}
