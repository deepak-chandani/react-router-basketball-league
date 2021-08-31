import * as React from "react";
import {
  Route,
  useParams,
  useRouteMatch,
  Switch,
} from "react-router-dom";
import useArticle from "../hooks/useArticle";
import useTeamsArticles from "../hooks/useTeamsArticles";
import Loading from "./Loading";
import Sidebar from "./Sidebar";

function ArticlesList() {
  const { teamId } = useParams();
  const { path } = useRouteMatch();
  const { response: articles, loading } = useTeamsArticles(teamId);

  const titles = articles ? articles.map((a) => a.title) : [];

  return (
    <div className="container two-column">
      {loading ? <Loading /> : <Sidebar heading="Articles" items={titles} />}
      <div className="panel">
        <Switch>
          <Route path={`${path}/:articleId`} component={ArticleDetails} />
          <Route path="*">
            <div className="sidebar-instruction">Select an Article</div>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default ArticlesList;

function ArticleDetails() {
  const { teamId, articleId } = useParams();
  const { response: article, loading } = useArticle({ articleId, teamId });

  if(!loading && !article){
    return <div className="sidebar-instruction">Invalid article id provided</div>
  }

  if (loading) {
    return (
      <article className="article">
        <Loading />
      </article>
    );
  }

  return (
    <article className="article">
      <h1 className="header">{article.title}</h1>
      <div className="article-date">{new Date(article.date).toDateString()}</div>
      <p>{article.body}</p>
    </article>
  );
}
