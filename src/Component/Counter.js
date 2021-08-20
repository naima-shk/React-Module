import React , {useState} from 'react';

function Counter(){
  const [items, setItems] = useState([])
  const addItem =() =>{
    setItems([...items, {
      id: items.length,
      value: ''
    }])
  }
  return (
    <div>
    <button onClick={addItem}> Add Items</button>
    <ul>
    {items.map(item =>(
      <li key={item.id}>{item.value} </li>
    ))}
    </ul>
    </div>
  )
}
