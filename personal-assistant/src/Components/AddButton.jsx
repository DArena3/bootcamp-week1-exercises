import React from 'react'
import { StyledButton } from './styles'
import { nanoid } from 'nanoid'

const AddButton = ({text, form, setForm, database, setDatabase}) => {
    return (<StyledButton onClick={() => {
        if (form.addTodoText) {
            setDatabase({data: database.data.concat([{id: nanoid(), description: form.addTodoText}])})
            setForm({addTodoText: ''})
        }}}>
            {text}
        </StyledButton>
)}

export default AddButton