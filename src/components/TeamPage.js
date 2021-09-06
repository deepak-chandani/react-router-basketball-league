import * as React from "react";
import {
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import useTeam from "../hooks/useTeam";
import useTeamsArticles from "../hooks/useTeamsArticles";
import Loading from "./Loading";
import TeamLogo from "./TeamLogo";

function TeamPage() {
  const { teamId } = useParams();
  const { response: team, loading } = useTeam(teamId);

  if (loading) {
    return (
      <div className="panel">
        <Loading />
      </div>
    );
  }

  if(!loading && !team){
    return (
      <div className="panel">
        <h3 className="text-center heading">404 (invalid team id provided) </h3>
      </div>
    );
  }

  return (
    <div className="panel">
      <TeamLogo id={teamId} width="168px" />
      <h1 className="medium-header">{team.name}</h1>
      <h4 className="heading-no-margin">
        <Link to={{ pathname: '/players', search:`?teamId=${teamId}` }}>View Players</Link>
      </h4>
      <h4>Championships</h4>
      <Championships items={team.championships} />
      <InfoList {...team} />
      <Articles teamId={teamId} />
    </div>
  );
}

export default TeamPage;

function Championships({ items }) {
  return (
    <ul className="championships">
      {items.map((c) => (
        <li key={c}>{c}</li>
      ))}
    </ul>
  );
}

function InfoList({ wins, losses, established, manager, coach }) {
  return (
    <ul className="info-list row" style={{ width: "100%" }}>
      <li>
        Est. <p>{established}</p>
      </li>
      <li>
        Manager <p>{manager}</p>
      </li>
      <li>
        Coach <p>{coach}</p>
      </li>
      <li>
        Record{" "}
        <p>
          {wins}-{losses}
        </p>
      </li>
    </ul>
  );
}

function Articles({ teamId }) {
  const { response: articles, loading } = useTeamsArticles(teamId);
  const { url } = useRouteMatch();

  return (
    <>
      <h2>Articles</h2>
      {loading ? (
        <Loading />
      ) : (
        <ul className="articles">
          {articles.map((a) => (
            <li key={a.id}>
              <Link to={`${url}/articles/${a.id}`}>
                <h4 className="article-title">{a.title}</h4>
                <div className="article-date">{new Date(a.date).toLocaleDateString()}</div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
