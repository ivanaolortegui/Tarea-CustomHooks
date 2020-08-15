import React, { useState } from 'react'
import EmployeeForm from '../components/EmployeeForm'
import EmployeeList from '../components/EmployeeList'

const EmployeePage = () => {
    const [employees, setEmployees] = useState([])
    const addEmployee = (newEmployee) => {
        setEmployees([
            ...employees, {
                id: new Date().getTime(),
                ...newEmployee
            }

        ])
    }
    return (
        <div className="container">
            <div className="row">
                <EmployeeForm addEmployee={addEmployee} />
                <EmployeeList employees={employees} />
            </div>

        </div>
    )
}

export default EmployeePage
