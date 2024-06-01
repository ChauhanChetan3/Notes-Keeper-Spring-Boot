import React, { useState, useEffect } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios"

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    getNotes();
  },[])

  async function addNote(newNote) {
    setLoading(true);
    const { data } = await axios.post("http://localhost:8080/noteses", newNote);
    setNotes(prevNotes => {
      return [...prevNotes, data];
    });
    setLoading(false);
  }

  async function getNotes(){
    const {data} = await axios.get("http://localhost:8080/noteses");
    setNotes(data._embedded.noteses);
    setLoading(false);
  }

  async function deleteNote(id) {
    setLoading(true);
    console.log(notes[id]._links.self.href)
    await axios.delete(notes[id]._links.self.href);
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
    setLoading(false);
  }
if(loading){
  return <div><h1>Loading...</h1></div>
}else
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      
    </div>
  );
}

export default App;
