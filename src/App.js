import React, { useState } from 'react'
import { v4 } from "uuid"
import DataTable from './tables/DataTable'
import AddDataForm from './forms/AddDataForm'
import EditDataForm from './forms/EditDataForm'

function App() {
  const initialFormState = { id: null, name: '', date: '' }
  const [all_data, setData] = useState([])
  const [editing, setEditing] = useState(false)
  const [currentData, setCurrentData] = useState(initialFormState)

  const addData = (data) => {
    data.id = v4()
    setData([...all_data, data])
  }

  const editRow = (data) => {
    setEditing(true)
    setCurrentData({ id: data.id, name: data.name, date: data.date })
  }

  const updateData = (id, updateData) => {
    setEditing(false)
    setData(all_data.map((data) => (data.id === id ? updateData: data)))
  }

  const deleteData = (id) => {
    setData(all_data.filter((data) => data.id !== id))
  }
  
  return (
    <div className="app">
      <h1>Age Calculator</h1>
      {
        editing ? (
          <div>
            <EditDataForm
              setEditing={setEditing}
              currentData={currentData}
              updateData={updateData}
            />
          </div>
        ) : (
          <div>
            <AddDataForm addData={addData} />
          </div>
        )
      }
      <DataTable all_data={all_data} editRow={editRow} deleteData={deleteData}/>
    </div>
  );
}

export default App;
