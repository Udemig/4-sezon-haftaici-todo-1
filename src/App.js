import React, { useState } from "react";

import AddTodoForm from "./components/AddTodoForm";
import Todo from "./components/Todo";
import emptyList from "./assets/emptyList.gif"

function App() {
  const [yapilacaklar, setYapilacaklar] = useState([]);

  return (
    <div className="container">
      <h1 className="text-center my-5">Todo App</h1>
      <AddTodoForm
        yapilacaklar={yapilacaklar}
        setYapilacaklar={setYapilacaklar}
      />
      {yapilacaklar.length === 0 ? (
        <div className="d-flex flex-column align-items-center">
          <img src={emptyList} />
          <p className="text-center">Henüz Yapılacak Bir İşiniz Yok</p>
        </div>
      ) : (
        <div className="container my-5">
          {yapilacaklar.map((item, index) => (
            <Todo key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
export default App;
