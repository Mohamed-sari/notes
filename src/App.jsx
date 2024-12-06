import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import NoteList from "./pages/NoteList";
import AddNote from "./pages/AddNote";
import SingleNote from "./pages/SingleNote";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([note, ...notes]);
  };

  const updateNote = (id, updatedNote) => {
    setNotes(notes.map((note) => (note.id === id ? updatedNote : note)));
  };

  return (
    <Routes>
      {/* Main Notes Page */}
      <Route
        path="/"
        element={<NoteList notes={notes} />}
      />
      
      {/* Add Note Page */}
      <Route
        path="/add"
        element={<AddNote onAdd={addNote} />}
      />

      {/* Single Note Page */}
      <Route
        path="/note/:id"
        element={<SingleNote notes={notes} onUpdate={updateNote} />}
      />
    </Routes>
  );
};

export default App;
