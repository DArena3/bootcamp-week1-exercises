import React, { useReducer } from 'react'
import FormContainer from './FormContainer'
import ResultsContainer from './ResultsContainer'
import { AppContainer } from './styles'

const reducer = (prevState, payload) => {
   return {...prevState, ...payload}
}

const initialDatabase = {data: [
    {id: 0, description: "Wash dishes"},
    {id: 1, description: "Code some React"},
    {id: 2, description: "Fix Bug"}
]}

const ContentContainer = (props) => {
    const [form, setForm] = useReducer(reducer, {addTodoText: '', searchText: ''})
    const [database, setDatabase] = useReducer(reducer, initialDatabase)
    return (
        <AppContainer>
            <FormContainer form={form} setForm={setForm} database={database} setDatabase={setDatabase}/>
            <ResultsContainer searchText={form.searchText} database={database} setDatabase={setDatabase}/>
        </AppContainer>
    )
} 

export default ContentContainer