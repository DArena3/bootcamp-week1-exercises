import React from 'react'
import InputTextbox from './InputTextbox'
import AddButton from './AddButton'
import { ElementContainer } from './styles'

const FormContainer = ({form, setForm, database, setDatabase}) => {
    return (
        <ElementContainer>
            <InputTextbox label="addTodoText" placeholder="Todo Description" form={form} setForm={setForm}/>
            <AddButton label="addTodoText" text="Add a Todo" form={form} setForm={setForm} database={database} setDatabase={setDatabase}/>
            <InputTextbox label="searchText" placeholder="Search" form={form} setForm={setForm}/>
        </ElementContainer>
    )
}

export default FormContainer