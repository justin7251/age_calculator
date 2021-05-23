import React, { useState } from 'react'

const AddDataForm = (props) => {
    const initialFormState = { id: null, name: '', date: '' }
    const [data, setData] = useState(initialFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setData({...data, [name]: value })
    }
    
    return (
        <form
            onSubmit= {(event) => {
                event.preventDefault()
                if (!data.name || !data.date) return
                
                props.addData(data)
                setData(initialFormState)
            }}
        >
            <label>Name</label>
            <input type="text" name="name" value={data.name} onChange={handleInputChange}/>
            <label>Date</label>
            <input type="date" name="date" value={data.date} onChange={handleInputChange}/>
            <button className="add">Calculate</button>
        </form>
    )
}
export default AddDataForm