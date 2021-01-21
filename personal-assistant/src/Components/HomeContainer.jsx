import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AppContainer } from './styles'
import announceDate from './announceDate'

const HomeContainer = (props) => {
    const [weather, setWeather] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=naples&appid=886705b4c1182eb1c69f28eb8c520e20')
            const data = await res.json()
            setWeather(data.weather[0].description)
        }
    fetchData()
    }, [])

    return (
        <AppContainer>
            <h1>Personal Assistant</h1>
            <h4>Hello, David!</h4>
            <p>{announceDate()}</p>
            <p>The current weather outside is: {weather}</p>
            <p>Would you like to <Link to="/todos">manage your todos?</Link></p>
        </AppContainer>
    )
} 

export default HomeContainer