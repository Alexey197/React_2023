import {useState} from 'react'
import {Circle} from './components/Circle'

export default function MyApp() {
  let [ items, setItems ] = useState([
    { min: 10, max: 30, value: 10 },
    { min: 1, max: 9, value: 4 },
    { min: 2, max: 9, value: 3 }
  ]);
  
  function setItemValue(i, newValue){
    let newItems = [...items]
    newItems[i] = { ...items[i], value: newValue}
    setItems(newItems)
  }
  
  let itemsElems = items.map((item, i) => <Circle
    min={item.min}
    max={item.max}
    value={item.value}
    changed={newVal => setItemValue(i, newVal)}
    key={i}
  />)
  
  return <div>
    {itemsElems}
  </div>;
}