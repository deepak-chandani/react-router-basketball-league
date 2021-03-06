import * as React from "react";
import {
  Link,
  Route,
  useParams,
  useRouteMatch,
  Switch,
  useLocation
} from "react-router-dom";
import slug from "slug";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import usePlayers from "../hooks/usePlayers";
import Loading from "./Loading";
import Sidebar from "./Sidebar";


function PlayersList() {
  const { path } = useRouteMatch();
  const location = useLocation()
  const urlParams = new URLSearchParams(location.search)
  const teamId = urlParams.get('teamId')

  const { response: players, loading } = usePlayers(teamId);

  const names = players ? players.map((p) => p.name) : [];

  return (
    <div className="container two-column">
      {loading ? <Loading /> : <Sidebar heading="Teams" items={names} />}
      <TransitionGroup component={null}>
        <CSSTransition
          timeout={500}
          classNames='fade'
          key={location.key}
        >
          <Switch>
            <Route path={`${path}/:playerId`}>
              <PlayerProfile players={players} />
            </Route>
            <Route path="*">
              <div className="sidebar-instruction">Select a player</div>
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default PlayersList;

function PlayerProfile({ players }) {
  const { playerId } = useParams();
  const player =
    players && playerId ? players.find((p) => slug(p.name) === playerId) : null;

  if (!player) {
    return (
      <div className="sidebar-instruction">Invalid player id provided</div>
    );
  }

  const { name, position, avatar, number, teamId, rpg, spg, apg, ppg } = player;

  return (
    <div className="panel">
      <Avatar name={name} url={avatar} />
      <h1 className="medium-header">{name}</h1>
      <h3 className="header">#{number}</h3>
      <div className="row">
        <ul className="info-list" style={{ marginRight: "80px" }}>
          <li>
            <span>Team</span>
            <p>
              <Link to={`/${teamId}`}>{teamId.toProperCase()}</Link>
            </p>
          </li>
          <li>
            <span>Position</span>
            <p>{position}</p>
          </li>
          <li>
            <span>PPG</span>
            <p>{ppg}</p>
          </li>
        </ul>
        <ul className="info-list">
          <li>
            <span>APG</span>
            <p>{apg}</p>
          </li>
          <li>
            <span>SPG</span>
            <p>{spg}</p>
          </li>
          <li>
            <span>RPG</span>
            <p>{rpg}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Avatar({ url, name }) {
  return <img className="avatar" src={url} alt={`${name}'s avatar`} />;
}
