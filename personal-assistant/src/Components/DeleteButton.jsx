import React from 'react'
import { StyledButton } from './styles'

const DeleteButton = ({itemId, database, setDatabase}) => {
    return (<StyledButton onClick={() => {
        setDatabase({data: database.data.filter(item => item.id !== itemId)})
    }
  }>Delete</StyledButton>
)}

export default DeleteButton