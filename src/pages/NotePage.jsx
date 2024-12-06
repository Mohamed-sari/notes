import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import IconButton from "../components/IconButton";
import { PencilIcon, TrashIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const NotePage = ({ notes, onEdit, onDelete }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = notes.find((note) => note.id === parseInt(id));

  if (!note) {
    return <p>Note not found!</p>;
  }

  const handleEdit = () => {
    const newTitle = prompt("Edit Title:", note.title) || note.title;
    const newContent = prompt("Edit Content:", note.content) || note.content;
    onEdit(note.id, { ...note, title: newTitle, content: newContent });
    navigate("/");
  };

  const handleDelete = () => {
    onDelete(note.id);
    navigate("/");
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <IconButton icon={ArrowLeftIcon} onClick={() => navigate("/")} label="Back" />
      <h1 className="text-2xl font-bold mt-4">{note.title}</h1>
      <p className="mt-2">{note.content}</p>
      <div className="mt-4 flex space-x-2">
        <IconButton icon={PencilIcon} onClick={handleEdit} label="Edit" />
        <IconButton icon={TrashIcon} onClick={handleDelete} label="Delete" />
      </div>
    </div>
  );
};

export default NotePage;
