import React from 'react'

const DataTable = (props) => {
    function getAge(date) {
        var birthDate = new Date(date);
        var now = new Date();
        // diffence in milliseconds
        var ageInMillisec = now - birthDate;
        // milliseconds into years
        var years = Math.floor(ageInMillisec/ 31556736000);
        //1 day has 86400000 milliseconds
        var days_diff = Math.floor((ageInMillisec % 31556736000) / 86400000);
        //1 month has 30.4167 days
        var months = Math.floor(days_diff / 30.4167);
        var days = Math.floor(days_diff % 30.4167);
        var hours = Math.round((ageInMillisec % 86400000) / 3600000);
        return 'Your Current Age is ' + years + ' years old ' + months + ' months '  + days + ' days ' + hours + ' hours';
    }
    
    return (
        props.all_data.length > 0 ? (
            props.all_data.map((data) => (
                <div className="item">
                    <div key="{data.id}">
                        <p className="itemName">Name: {data.name}</p>
                        <p className="itemDate">Enter date: {`${data.date}`}</p>
                        <p>Your Current Age is: {getAge(data.date)}</p>
                        <button className="edit" onClick={() => props.editRow(data)}>Edit</button>
                        <button className="remove" onClick={() => props.deleteData(data.id)}>Delete</button>
                    </div>
                </div>
            ))
        ) : ('')
    
    )    
}
export default DataTable