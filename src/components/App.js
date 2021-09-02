import * as React from 'react'
import {Route, Switch } from 'react-router-dom'
import NavBar from "./NavBar"
import Home from "./Home"
import Loading from './Loading'

const TeamsList = React.lazy(() => import("./TeamsList"))
const PlayersList = React.lazy(() => import("./PlayersList"))
const TeamPage = React.lazy(() => import('./TeamPage'))
const ArticlesList = React.lazy(() => import('./ArticlesList'))

export default function App () {
  return (
    <div>
      <NavBar />
      <React.Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/teams" component={TeamsList} />
          <Route path="/players" component={PlayersList} />
          <Route path="/:teamId/articles" component={ArticlesList} />
          <Route exact path="/:teamId" component={TeamPage} />
          <Route path="*">
            <h1 className="text-center">404 page</h1>
          </Route>
        </Switch>
      </React.Suspense>
    </div>
  )
}
