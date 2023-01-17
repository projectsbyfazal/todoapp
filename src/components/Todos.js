import React from 'react';
import './style.css';


const Todos = ({todoitem, deleteItem, updateItem}) => {

  return (
    
      todoitem.length > 0 ? <div >
      {
        todoitem.map((item,index) => {
          return (
            <div className='todoitem' key={index}>
              <span className='text'>{item.data}</span>

              <span className='icons'>
              <i className="bi bi-pencil-square updateBtn" title="Update Item" onClick={() => updateItem(index)}></i>
              <i className="bi bi-trash-fill delBtn" title="Delete Item" onClick={() => deleteItem(index)}></i>
              </span>
            </div>
          )
        })
      }
    </div> : <p className='alter'>No Item Available . . .</p>
     
  )
}

export default Todos;
