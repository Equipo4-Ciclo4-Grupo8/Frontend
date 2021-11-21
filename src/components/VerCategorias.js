import React from 'react'
import MaterialTable from 'material-table';


export default function Editable() {
    const { useState } = React;
  
    const [columns, setColumns] = useState([
      { title: 'Nombre', field: 'nombre' },
      { title: 'Descripcion', field: 'descripcion', initialEditValue: 'initial edit value' },
      { title: 'Imagen', field: 'imagen', type: 'numeric' },
      {
        title: 'Estado',
        field: 'estado',
        lookup: { 1: 'activo', 0: 'inactivo' },
      },
    ]);
  
    const [data, setData] = useState([
      { nombre: 'Profes', descripcion: 'Baran', imagen: 1987, estado: 1 },
      { nombre: 'tecnicos', descripcion: 'Computadores, celulares, sistemas eléctricos', imagen: 2017, estado: 0 },
    ]);
  
    return (
      <MaterialTable
      options={{
        filtering: true
      }}
        title="CRUD CATEGORIAS"
        columns={columns}
        data={data}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);
                
                resolve();
              }, 1000)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
  
                resolve();
              }, 1000)
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);
                
                resolve()
              }, 1000)
            }),
        }}
      />
    )
  }
  
