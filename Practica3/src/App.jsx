import { useEffect, useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [toDo, setToDo] = useState([]);

  useEffect(() => {
    console.log("Componente termino de renderizar");
  }, []);

  useEffect(() => {
    console.log("toDo:", toDo);
  }, [toDo]);

  useEffect(() => {
    console.log("text:", text);
  }, [text]);

  useEffect(() => {
    console.log("ambos:", text, toDo);
  }, [text, toDo]);

  function addHandler() {
    if (text.trim().length > 0) {
      setToDo([text.trim(), ...toDo]);
      setText([""]);
    }
  }

  function keyDownHandler(e) {
    if (e.key == "Enter") addHandler();
  }

  function removeItem(index) {
    return () => {
      const filtered = toDo.filter((item, innerIndex) => index != innerIndex);
      setToDo(filtered);
    };
  }

  return (
    <main className="myMainContainer">
      <div className="toDoListContainer">
        <input
          className="inputToDoList"
          type="text"
          onChange={(e) => setText(e.target.value)}
          onKeyDown={keyDownHandler}
          value={text}
        />
        <button className="btnAdd" onClick={addHandler}>
          Add
        </button>
      </div>
      <div className="toDoListRenderContainer">
        {toDo.map((item, index) => {
          return (
            <div key={`item-${index}`} className="toDoItemContainer">
              <p className="toDoItem">{item}</p>
              <button onClick={removeItem(index)} className="btnDel">
                ✓
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
}
