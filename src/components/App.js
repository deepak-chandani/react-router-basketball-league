import * as React from 'react'
import {Route, Switch } from 'react-router-dom'
import NavBar from "./NavBar"
import Home from "./Home"
import TeamsList from "./TeamsList"
import PlayersList from "./PlayersList"

export default function App () {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/teams" component={TeamsList} />
        <Route path="/players" component={PlayersList} />
        <Route path="/:teamId" component={TeamPage} />
      </Switch>
    </div>
  )
}

function TeamPage() {

  // setup nested routes for articles `/:teamId/articles/:slug`
  return (<div>Team Page</div>)
}
