import React from 'react'
import EmployeeItem from './EmployeeItem'

const EmployeeList = ({employees}) => {
    return (
        <div className="col-6">
        <h3>Lista de Empleados</h3>
         {employees.map((item)=> (<div key={item.id}> <EmployeeItem employee={item}/> </div>))}
        </div>
    )
}

export default EmployeeList
