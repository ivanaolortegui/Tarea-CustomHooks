import React, { useState, useEffect } from 'react'

import validator from 'validator';
import useForm from '../hooks/useForm';

const EmployeeForm = ({ addEmployee }) => {
    const initialFormValue = {
        name: '',
        lastname: '',
        area: ''
    }

   // const [formValue, setForm] = useState(initialFormValue)
   const [formValue, handleInput, setInitialForm] = useForm(initialFormValue)
    const [validForm, setValid] = useState(false)
    const { name, lastname, area } = formValue;

    useEffect(() => {
        if (validator.isEmpty(name && lastname && area, { ignore_whitespace: true })) {
            setValid(false)
        } else {
            setValid(true)
        }
    }, [formValue])


 /*    const handleInput = ({ target }) => {
        setForm({
            ...formValue,
            [target.name]: target.value
        })
    }
 */
    const addNewEmployee = (e) => {
        e.preventDefault()
        addEmployee(formValue)
        setInitialForm()
    }

    return (
        <div className="col-6 text-center">
            <h4>Formulario de Empleados</h4>
            <div className="card">
                <form className="card-body" onSubmit={addNewEmployee}>
                    <div className="form-group">
                        <input className="form-control" type="text" name="name" placeholder="Nombre" onChange={handleInput} value={name} required />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="lastname" placeholder="Apellido" onChange={handleInput} value={lastname} required />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="area" placeholder="Area" onChange={handleInput} value={area} required />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary col-8" disabled={!validForm} >Enviar</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default EmployeeForm
