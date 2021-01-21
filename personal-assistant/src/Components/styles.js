import styled from 'styled-components'

export const StyledButton = styled.button`
  background: darkred;
  border: none;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    color: white;
  }
`

export const StyledInput = styled.input`
  border: solid black;
  border-width: 1px;
`

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background: lightgray;
  justify-content: center;
  width: 80%;
`

export const ElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`

export const StyledItem = styled.li`
  color: darkgray;
`

