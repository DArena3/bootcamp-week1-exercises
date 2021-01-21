import React from 'react'
import DeleteButton from './DeleteButton'
import ListItem from './ListItem'
import { ElementContainer } from './styles'

const ResultsContainer = ({searchText, database, setDatabase}) => {
    console.log(database)
    return (
        <ElementContainer>
            <ul>
                {database.data.map(item => {
                    if (item.description.toLowerCase().includes(searchText.toLowerCase())) {
                        return (
                            <div key={item.id}>
                                <ListItem description={item.description}></ListItem>
                                <DeleteButton itemId={item.id} database={database} setDatabase={setDatabase}/>
                            </div>
                        )
                    }
                    return (<></>)
                })}
            </ul>
        </ElementContainer>
    )
}

export default ResultsContainer