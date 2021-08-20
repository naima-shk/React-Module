import React , {useState} from 'react';

function Counter(props){
  const [items, setItems] = useState([])
  const addItem =() =>{
    setItems([...items, {
      id: items.length,
      value: ''

    }])
    console.log(items)
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
export default Counter;
