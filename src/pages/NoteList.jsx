import React from "react";
import { Link } from "react-router-dom";

const NoteList = ({ notes }) => {
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Notes</h1>
      <Link
        to="/add"
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded mb-4"
      >
        Add Note
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((note) => (
          <Link
            key={note.id}
            to={`/note/${note.id}`}
            className="p-4 border rounded shadow hover:shadow-lg"
          >
            <h2 className="text-xl font-bold">{note.title}</h2>
            <p>{note.content.slice(0, 50)}...</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NoteList;
