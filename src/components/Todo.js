import React from "react";

const Todo = ({ item }) => {
  return (
    <div className="alert alert-secondary d-flex justify-content-between">
      <div>
        <h2>{item.text}</h2>
        <p>Tarih: {new Date(item.date).toLocaleString().replaceAll("/",".")}</p>
      </div>
      <div className="d-flex align-items-center">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-sm btn-danger">
            Sil
          </button>
          <button type="button" class="btn btn-sm btn-secondary">
            Güncelle
          </button>
          <button type="button" class="btn btn-sm btn-info">
            {item.yapildimi === true ? "Yapılmadı" : "Yapıldı"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
