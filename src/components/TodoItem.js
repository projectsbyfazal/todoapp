import React from 'react';

const TodoItem = (props) => {
    return (
        <div>

            {
                props.todo.map((item) => {
                    return (
                        <div className='todoitem'>
                            <span className='text'>{item.data}</span>
                            <i className="bi bi-trash-fill delBtn"></i>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TodoItem;
