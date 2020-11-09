import React, { useState } from 'react'
import HeaderApp from './components/HeaderApp'
import ListItem from './components/ListItem'
import TaskForm from './components/TaskForm'

function App() {
  
  const [items, setItems] = useState(
    [
      {id: 1, text: 'Item 1'},
      {id: 2, text: 'Item 2'},
      {id: 3, text: 'Item 3'},
    ]
  );

  
  function addItem(text) {
      setItems(items.concat({id: Date.now(), text: text}))
  }

  function deleteItem(id) {
      setItems(items.filter(x => x.id !== id))
  }


  return (
    <div className="App">
      <HeaderApp />
      <ListItem items={items} deleteItem={deleteItem}/>
      <TaskForm addItem={addItem}/>
    </div>
  );
}



export default App;
