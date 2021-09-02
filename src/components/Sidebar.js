import * as React from 'react'
import { Link, useLocation, useRouteMatch } from 'react-router-dom'
import slug from 'slug'

function Sidebar({heading, items = [] }){
  const {url} = useRouteMatch()
  const location = useLocation()

  return (
    <aside className="">
      <h3 className="header">{heading}</h3>
      <ul className="sidebar-list">
          {items.map((t) => {
            const urlSlug = slug(t)
            return (
              <CustomLink key={t} to={{
                pathname: `${url}/${urlSlug}`,
                search: location.search
              }}>
                {t.toUpperCase()}
              </CustomLink>
            )
          })}
        </ul>
    </aside>
  )
}

export default Sidebar

function CustomLink({to, children}){
  const match = useRouteMatch(to.pathname)

  return (
    <li className={match ? 'active': ''}>
      <Link to={to}>{children}</Link>
    </li>
  )
}