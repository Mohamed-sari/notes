import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SingleNote = ({ notes, onUpdate }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = notes.find((note) => note.id === parseInt(id));

  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");

  if (!note) {
    return <p>Note not found!</p>;
  }

  const handleSave = () => {
    onUpdate(note.id, { ...note, title, content });
    navigate("/");
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Note</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
        rows="5"
      />
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Save
      </button>
    </div>
  );
};

export default SingleNote;
