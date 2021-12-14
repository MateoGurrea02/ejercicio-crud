import React, { useState } from "react";

const initialForm = {
  artist: "",
  song: "",
};

const SongForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value, 
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!form.artist || !form.song) {
      alert('Datos incompletos');
      return;
    }

    handleSearch(form);
    setForm(initialForm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a artist"
          name="artist"
          onChange={handleChange}
          value={form.artist}
        />
        <input
          type="text"
          placeholder="Search for a song"
          name="song"
          onChange={handleChange}
          value={form.song}
        />
        <input type="submit" value="Enviar"/>
      </form>
    </div>
  );
};

export default SongForm;
