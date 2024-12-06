import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNote = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: Date.now(),
      title,
      content,
    };
    onAdd(newNote);
    navigate("/");
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add Note</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          rows="5"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Save Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
