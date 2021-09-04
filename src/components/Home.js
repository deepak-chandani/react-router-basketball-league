import * as React from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading"
import TeamLogo from "./TeamLogo"
import useTeamNames from '../hooks/useTeamNames'

export default function Home() {
  return (
    <div className="container">
      <h1 className="medium-header">Hash History Basketball League</h1>
      <h3 className="header text-center">Select a team</h3>
      <TeamLinks />
    </div>
  );
}

function TeamLinks() {
  const { response: names, loading } = useTeamNames();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="home-grid">
      {names.map((t) => (
        <Link key={t} to={`/${t}`} title={t}>
          <TeamLogo id={t} width="100px" />
        </Link>
      ))}
    </div>
  );
}
