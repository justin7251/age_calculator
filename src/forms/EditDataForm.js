import React, { useState, useEffect } from "react";

const EditDataForm = (props) => {
    const [data, setData] = useState(props.currentData)

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setData({...data, [name]: value })
    }

    useEffect(() => {
        setData(props.currentData)
    }, [props])

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()
                props.updateData(data.id, data)
            }}
        >
            <label>Name :</label>
            <input type="text" name="name" value={ data.name } onChange={handleInputChange} />
            <label>Date: </label>
            <input type="date" name="date" value={ data.date } onChange={handleInputChange}  />
            <button className="btn_edit update">Update Data</button>
            <button
                onClick={() => props.setEditing(false)}
                className="btn_edit cancel"
            >
                Cancel
            </button>
        </form>
    )
}
export default EditDataForm 