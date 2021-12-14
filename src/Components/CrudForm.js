import React, { useEffect, useState } from "react";

const initalForm = {
    name: "",
    raza: "",
    id: null,
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
    const [form, setForm] = useState(initalForm);

    useEffect(() => {
        if (dataToEdit) {
            setForm(dataToEdit);
        } else {
            setForm(initalForm);
        }
    }, [dataToEdit]);


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.raza) {
            alert('datos incompletos')
            return;
        }
        if (form.id === null) {
            createData(form);
        } else {
            updateData(form);
        }
        setForm(initalForm);
    }

    const handleReset = (e) => {
        setForm(initalForm);
        setDataToEdit(null);
    };

    return (
        <div>
            <h3>{dataToEdit ? "Editar" : "Agregar" }</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    onChange={handleChange}
                    value={form.name}
                />
                <input
                    type="text"
                    name="raza"
                    placeholder="Raza"
                    onChange={handleChange}
                    value={form.raza}
                />
                <input type="submit" value="Enviar" />
                <input type="reset" value="Limpiar" onClick={handleReset} />
            </form>
        </div>
    );
};

export default CrudForm;
