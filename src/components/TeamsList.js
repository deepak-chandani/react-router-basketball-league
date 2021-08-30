import * as React from "react";
import { Link, Route, useParams, useRouteMatch, Switch } from "react-router-dom";
import useTeam from "../hooks/useTeam";
import useTeamNames from "../hooks/useTeamNames";
import Loading from "./Loading";
import Sidebar from "./Sidebar";
import TeamLogo from "./TeamLogo";

function TeamsList() {
  const {path} = useRouteMatch()
  const { response: teamNames, loading } = useTeamNames();

  return (
    <div className="container two-column">
      {loading ? <Loading /> : <Sidebar heading="Teams" items={teamNames} />}
      <Switch>
        <Route path={`${path}/:teamId`} component={TeamProfile} />
        <Route path="*">
          <div className="sidebar-instruction">Select a team</div>
        </Route>
      </Switch>
    </div>
  );
}

export default TeamsList;


function TeamProfile(){
  const {teamId} = useParams();
  const {response:team, loading } = useTeam(teamId)

  if(!loading && (!teamId || !team)){
    return <div className="sidebar-instruction">Invalid team id provided</div>
  }

  const {name, established, manager, coach} = team || {}

  const showDetails = () => {
    return (
      <>
        <h1 className="medium-header">{name}</h1>
        <ul className="info-list row">
          <li>
            <span>Est.</span>
            <div>{established}</div>
          </li>
          <li>
            <span>Manager</span>
            <div>{manager}</div>
          </li>
          <li>
            <span>Coach</span>
            <div>{coach}</div>
          </li>
        </ul>
        <Link to={`/${teamId}`} className="center btn-main">{name} Team Page</Link>
      </>
    )
  }

  return (
    <div className="panel">
      <div style={{width: '100%'}}>
        <TeamLogo id={teamId} className="center" width="150px" />
        {loading ? <Loading /> : showDetails()}
      </div>
    </div>
  )
}