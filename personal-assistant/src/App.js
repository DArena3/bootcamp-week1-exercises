import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ContentContainer from './Components/ContentContainer'
import HomeContainer from './Components/HomeContainer'

const App = () => {

  return (
  <>
    <Switch>
      <Route path="/todos" >
        <h1>Hello</h1>
        <ContentContainer/>
      </Route>
      <Route exact path="/">
        <HomeContainer/>
      </Route>
    </Switch>
  </>
)}

export default App
