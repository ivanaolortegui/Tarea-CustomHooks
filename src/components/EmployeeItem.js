import React from 'react'
import '../index.css'
const EmployeeItem = ({employee}) => {
    return (
        <div className="item">
            {employee.name} {employee.lastname}
            <br/>
            {employee.area}
        </div>
    )
}

export default EmployeeItem
