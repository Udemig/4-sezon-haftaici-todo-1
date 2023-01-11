import React,{useState} from "react";

const AddTodoForm = ({yapilacaklar,setYapilacaklar}) => {
    const [yapilacakText,setYapilacakText]=useState("")

    const formuDenetle=(event)=>{
        event.preventDefault()
        /* validation */
        if(yapilacakText === ""){
            alert("Boş kayıt yapılamaz")
            return
        }
        var textMevcutMu=false
        yapilacaklar.map(item=>{
          if(item.text.toLowerCase() === yapilacakText.toLowerCase()){
            textMevcutMu=true
          }
        })
        if(textMevcutMu === true){
          if(window.confirm("Böyle bir kayıt zaten var. Yine de eklensin mi?") === false){
            return
          }
        }
        const newTodo={
            id:String(new Date().getTime()),
            text:yapilacakText,
            date:new Date(),
            yapildimi:false
        }
        setYapilacaklar([...yapilacaklar,newTodo])
        setYapilacakText("")
    }
  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={formuDenetle} className="w-75">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Yapilacak işi yazın..."
            value={yapilacakText}
            onChange={(event)=>setYapilacakText(event.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Ekle
          </button>
        </div>
      </form>
    </div>
  );
};


export default AddTodoForm;
