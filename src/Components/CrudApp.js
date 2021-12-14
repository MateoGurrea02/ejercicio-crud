import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
  {
    id: 1,
    name: "Son Goku",
    raza: "Saiyajin",
  },
  {
    id: 2,
    name: "Son Gohan",
    raza: "Hibrido Saiyajin/Humano",
  },
  {
    id: 3,
    name: "Piccolo",
    raza: "Namekuseijin",
  },
  {
    id: 4,
    name: "Majin Buu",
    raza: "Majin",
  },
  {
    id: 5,
    name: "Freezer",
    raza: "Freezer",
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateData = (data) => {
    const newData = db.map((el) => el.id === data.id ? data : el);
    setDb(newData);
  };

  const deleteData = (id) => { 
    const newData = db.filter((el) => el.id !== id);
    setDb(newData);
  };

  return (
    <div>
      <h2>Crud App</h2>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable
        data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </div>
  );
};

export default CrudApp;
