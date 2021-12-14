import React from 'react';

const CrudTableRow = ({el, setDataToEdit, deleteData}) => {
    let {id, name, raza} = el;
    return (
        <tr>
            <td>{name}</td>
            <td>{raza}</td>
            <td>
                <button onClick={ () => setDataToEdit(el)}>Editar</button>
                <button onClick={() => deleteData(id)}>Eliminar</button>
            </td>
        </tr>
    );

}



export default CrudTableRow;