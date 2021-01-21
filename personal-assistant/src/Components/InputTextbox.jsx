import React from 'react'
import { StyledInput } from './styles'

const InputTextbox = ({label, placeholder, form, setForm}) => (
    <StyledInput type="text" placeholder={placeholder} value={form[label]}
        onChange={ e => setForm({ [label]: e.target.value })}
    />
)

export default InputTextbox