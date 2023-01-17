import { useEffect, useState } from "react";
import "./App.css";
import Todos from "./components/Todos";

const getLocalData = () => {
  const localItems = localStorage.getItem("TodoItems");

  if (localItems) {
    return JSON.parse(localItems);
  } else {
    return [];
  }
};

const App = () => {
  const [inputdata, setInputData] = useState("");
  const [todoitems, setTodoItem] = useState(getLocalData());
  const [updateBtn, setUpdateBtn] = useState(false);
  const [index, setIndex] = useState("");

  // Add new item in list -----------------
  const addTodoItems = () => {
    if (inputdata === "") {
      alert("Please type something");
    } else {
      // check if item already available
      const check = todoitems.some((item) => {
        return item.data === inputdata;
      });

      if (check) {
        alert("Item Already Added !");
      } else {
        const updatedTodoItems = [
          ...todoitems,
          {
            id: new Date().getTime().toString(),
            data: inputdata,
          },
        ];
        setInputData("");
        setTodoItem(updatedTodoItems);
      }
    }
  };

  // Deleting Item from List ------------
  const deleteItem = (removing_item) => {
    const updated = todoitems.filter(
      (item) => item !== todoitems[removing_item]
    );
    setTodoItem(updated);
  };

  // update Item in List -----------------
  const updateItem = (updating_item) => {
    setInputData(todoitems[updating_item].data);
    setUpdateBtn(true);
    setIndex(updating_item);
  };
  // Actually updating --------------
  const updateTodoItem = () => {
    if (inputdata === "") {
      alert("Please type something");
    } else {
      todoitems[index].data = inputdata;
      setTodoItem(todoitems);
      setUpdateBtn(false);
      setInputData("");
      localStorage.setItem("TodoItems", JSON.stringify(todoitems));
    }
  };

  // storing todoitems in local Storage
  useEffect(() => {
    localStorage.setItem("TodoItems", JSON.stringify(todoitems));
  }, [todoitems]);

  // components --------------
  return (
    <div className="container">
      <img src="todo.png" alt="Todo Img" />
      <h3>Add Your List Here✌️</h3>
      <form className="form">
        <div className="">
          <input
            type="text"
            placeholder="✍️ Add Item"
            value={inputdata}
            onChange={(e) => setInputData(e.target.value)}
            className="textbox"
          />
          <br />
          <span className="add-item">
            {updateBtn ? (
              <i
                className="bi bi-pencil-square updateButton"
                onClick={() => updateTodoItem()}
                title="Edit item"
              ></i>
            ) : (
              <i
                className="bi bi-plus addButton"
                onClick={() => addTodoItems()}
              ></i>
            )}
          </span>
        </div>
      </form>

      <Todos
        todoitem={todoitems}
        deleteItem={deleteItem}
        updateItem={updateItem}
      />

      {todoitems.length > 0 ? (
        <div className="clrbtn">
          <button className="clear" onClick={() => setTodoItem([])}>
            ❌
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
